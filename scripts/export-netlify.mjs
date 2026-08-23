import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const routes = [
  { pathname: "/", output: "index.html" },
  { pathname: "/about", output: "about/index.html" },
  { pathname: "/start", output: "start/index.html" },
];

const outputDir = new URL("../netlify-dist/", import.meta.url);
const clientDir = new URL("../dist/client/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://nessiemelendez.com${route.pathname}`, {
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

  if (!response.ok) {
    throw new Error(`Failed to export ${route.pathname}: ${response.status}`);
  }

  const target = new URL(route.output, outputDir);
  await mkdir(new URL(".", target), { recursive: true });
  await writeFile(target, await response.text());
}

await writeFile(
  new URL("_redirects", outputDir),
  ["/about /about/index.html 200", "/start /start/index.html 200", "/* /index.html 200", ""].join("\n"),
);

console.log(`Exported ${routes.length} routes to ${outputDir.pathname}`);
