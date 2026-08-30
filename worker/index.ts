/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import {
  PORTFOLIO_FALLBACK_HOSTNAME,
  PORTFOLIO_HOME_URL,
  RESUME_PATH,
  RESUME_SOURCE_ASSET_PATH,
  rootProjectPathForHost,
} from "../lib/site-urls";

interface Env {
  ASSETS: Fetcher;
  IMAGES: ImagesBinding;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname.toLowerCase() === PORTFOLIO_FALLBACK_HOSTNAME) {
      const canonicalUrl = new URL(`${url.pathname}${url.search}`, PORTFOLIO_HOME_URL);
      return Response.redirect(canonicalUrl.toString(), 308);
    }

    if (url.pathname === RESUME_PATH) {
      const assetUrl = new URL(RESUME_SOURCE_ASSET_PATH, url);
      const assetResponse = await env.ASSETS.fetch(new Request(assetUrl, request));
      const headers = new Headers(assetResponse.headers);
      headers.set("Content-Type", "application/pdf");
      headers.set("Content-Disposition", 'inline; filename="Steven-Pierce-Resume.pdf"');
      return new Response(assetResponse.body, {
        status: assetResponse.status,
        statusText: assetResponse.statusText,
        headers,
      });
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const outputFormat = format === "image/avif"
            ? "image/avif"
            : format === "image/webp"
              ? "image/webp"
              : "image/jpeg";
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({
            format: outputFormat,
            quality,
          });
          return result.response();
        },
      }, allowedWidths);
    }

    const rootProjectPath =
      url.pathname === "/" ? rootProjectPathForHost(url.hostname) : undefined;

    if (rootProjectPath) {
      url.pathname = rootProjectPath;
      return handler.fetch(new Request(url, request), env, ctx);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
