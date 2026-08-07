import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the engineering portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Steven Pierce \| Junior Software Engineer<\/title>/i);
  assert.match(html, /Software for the/);
  assert.match(html, /Projects that ship/);
  assert.match(html, /Pole Vault Meet Manager/);
  assert.match(html, /PV Video Capture/);
  assert.match(html, /Landon Pole Rental/);
  assert.match(html, /I built the servers, too/);
  assert.match(html, /Cloudflare Tunnel \+ Load Balancing/);
  assert.match(html, /Linux server 01/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("server-renders a project case study", async () => {
  const response = await render("/projects/video-capture");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /PV Video Capture \| Steven Pierce/);
  assert.match(html, /From user action to production service/);
  assert.match(html, /Cloudflare Stream/);
  assert.match(html, /Two trained models/);
  assert.match(html, /30,605/);
  assert.match(html, /15,579/);
  assert.match(html, /scene-segmentation mask mAP50/);
  assert.match(html, /Publish a candidate only when it beats the current same-split baseline/);
  assert.match(html, /Open live check-in/);
  assert.match(html, /Private repository/);
});

test("server-renders the authenticated Meet Manager showcase", async () => {
  const response = await render("/projects/meet-manager");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /meet-manager-dashboard\.png/);
  assert.match(html, /Authenticated Pole Vault Meet Manager dashboard/);
  assert.doesNotMatch(html, /Meet Manager production login screen/);
});
