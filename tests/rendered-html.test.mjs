import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(
  pathname = "/",
  hostname = "portfolio.meetregistrationpv.com",
  headers = {},
) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://${hostname}${pathname}`, {
      headers: { accept: "text/html", ...headers },
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
  assert.match(html, /View project page/);
  assert.match(html, /Try demo/);
  assert.match(html, /I built the servers, too/);
  assert.match(html, /Cloudflare Tunnel \+ Load Balancing/);
  assert.match(html, /Linux server 01/);
  assert.match(
    html,
    /https:\/\/portfolio\.meetregistrationpv\.com\/projects\/meet-manager/,
  );
  assert.match(
    html,
    /https:\/\/portfolio\.landoncheckin\.com\/projects\/video-capture/,
  );
  assert.match(
    html,
    /https:\/\/portfolio\.pole-rental\.com\/projects\/pole-rental/,
  );
  assert.match(
    html,
    /https:\/\/portfolio\.meetregistrationpv\.com\/demos\/meet-manager/,
  );
  assert.match(
    html,
    /https:\/\/portfolio\.landoncheckin\.com\/demos\/video-capture/,
  );
  assert.match(
    html,
    /https:\/\/portfolio\.pole-rental\.com\/demos\/pole-rental/,
  );
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("routes each product portfolio host to its intended root page", async () => {
  const meetResponse = await render("/", "portfolio.meetregistrationpv.com");
  const meetHtml = await meetResponse.text();
  assert.match(meetHtml, /Projects that ship/);

  const videoResponse = await render("/", "portfolio.landoncheckin.com");
  const videoHtml = await videoResponse.text();
  assert.match(videoHtml, /PV Video Capture \| Steven Pierce/);
  assert.match(videoHtml, /Two trained models/);

  const rentalResponse = await render("/", "portfolio.pole-rental.com");
  const rentalHtml = await rentalResponse.text();
  assert.match(rentalHtml, /Landon Pole Rental \| Steven Pierce/);
  assert.match(rentalHtml, /Cross-platform commerce/);
});

test("does not trust forwarded host values for metadata or root routing", async () => {
  const attackerResponse = await render(
    "/",
    "portfolio.meetregistrationpv.com",
    { "x-forwarded-host": "attacker.example" },
  );
  const attackerHtml = await attackerResponse.text();
  assert.doesNotMatch(attackerHtml, /attacker\.example/i);
  assert.match(
    attackerHtml,
    /https:\/\/portfolio\.meetregistrationpv\.com\/og\.png/,
  );

  const crossHostResponse = await render(
    "/",
    "portfolio.meetregistrationpv.com",
    { "x-forwarded-host": "portfolio.landoncheckin.com" },
  );
  const crossHostHtml = await crossHostResponse.text();
  assert.match(crossHostHtml, /Projects that ship/);
  assert.doesNotMatch(crossHostHtml, /PV Video Capture \| Steven Pierce/);
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
  assert.match(html, /Open read-only demo/);
  assert.match(html, /Private repository/);
  assert.match(html, /Isolated sample data/);
  assert.match(
    html,
    /https:\/\/portfolio\.landoncheckin\.com\/projects\/pv-labeling-workspace\.png/,
  );
  assert.doesNotMatch(html, /portfolio\.landoncheckin\.com\/og\.png/);
});

test("server-renders the authenticated Meet Manager showcase", async () => {
  const response = await render("/projects/meet-manager");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /meet-manager-dashboard\.png/);
  assert.match(html, /Authenticated Pole Vault Meet Manager dashboard/);
  assert.doesNotMatch(html, /Meet Manager production login screen/);
});

test("server-renders isolated recruiter demos for all three projects", async () => {
  const demos = [
    {
      path: "/demos/meet-manager",
      host: "portfolio.meetregistrationpv.com",
      title: "Pole Vault Meet Manager Recruiter Demo | Steven Pierce",
      evidence: "Great Lakes Vault Classic — Sample Meet",
    },
    {
      path: "/demos/video-capture",
      host: "portfolio.landoncheckin.com",
      title: "PV Video Capture Recruiter Demo | Steven Pierce",
      evidence: "Indoor Practice 06 — Sample Session",
    },
    {
      path: "/demos/pole-rental",
      host: "portfolio.pole-rental.com",
      title: "Landon Pole Rental Recruiter Demo | Steven Pierce",
      evidence: "Demo Organization — Sample Inventory",
    },
  ];

  for (const demo of demos) {
    const response = await render(demo.path, demo.host);
    assert.equal(response.status, 200);

    const html = await response.text();
    assert.match(html, new RegExp(`<title>${demo.title}<\\/title>`, "i"));
    assert.match(html, /Interactive recruiter demo/);
    assert.match(html, /No production connection/);
    assert.match(html, /Signed in as/);
    assert.match(html, /Recruiter Demo/);
    assert.match(html, /Read-only/);
    assert.match(html, /Safe by design/);
    assert.match(html, new RegExp(demo.evidence));
    assert.doesNotMatch(html, /<form\b/i);
  }
});

test("demo UI has no production network or browser-storage integrations", async () => {
  const source = await readFile(
    new URL("../components/ProjectDemo.tsx", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(source, /\bfetch\s*\(/);
  assert.doesNotMatch(source, /XMLHttpRequest|WebSocket|EventSource/);
  assert.doesNotMatch(source, /localStorage|sessionStorage|indexedDB/);
  assert.doesNotMatch(source, /<form\b|action=/i);
});
