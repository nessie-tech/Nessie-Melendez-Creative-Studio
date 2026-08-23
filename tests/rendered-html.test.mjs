import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

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

test("server-renders the portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Nessie Melendez \| Creative Direction Portfolio<\/title>/i);
  assert.match(html, /AI-POWERED CREATIVE/);
  assert.match(html, /FOR BRANDS IN MOTION/);
  assert.match(html, /NESSIE MELENDEZ/);
  assert.match(html, /CREATIVE STUDIO/);
  assert.doesNotMatch(html, /Nessie Melendez \/ Creative Direction/);
  assert.match(html, /href="#top" aria-current="page">Home/);
  assert.match(
    html,
    /IGNITE YOUR BUSINESS WITH DYNAMIC STORYTELLING POWERED BY 18\+ YEARS OF BRAND-BUILDING EXPERIENCE AND DESIGN INNOVATION\./,
  );
  assert.doesNotMatch(html, /Nessie Melendez is an AI-powered creative director and storyteller/);
  assert.match(html, /nessie-demo-reel\.mp4/);
  assert.match(html, /Social content/);
  assert.match(html, /Brand campaigns/);
  assert.match(html, /Cinematic storytelling/);
  assert.match(html, /Visual identity/);
  assert.match(html, /Brand systems/);
  assert.match(html, /Vibe-coded websites/);
  assert.match(html, /Creative consulting/);
  assert.doesNotMatch(html, /Trusted to innovate, built for transformation across four strategic areas\./);
  assert.match(html, /WAYS TO COLLABORATE/);
  assert.doesNotMatch(
    html,
    /I build the strategic and creative world around a brand—not just the assets\./,
  );
  assert.match(html, /Brand Strategy and Storytelling/);
  assert.match(
    html,
    /Visual identity, brand world creation, tone of voice, strategic messaging, cinematic storytelling, brand campaigns, digital activations\./,
  );
  assert.doesNotMatch(html, /Define what your brand stands for/);
  assert.match(html, /Social Content/);
  assert.match(html, /tsa-social-demo\.mp4/);
  assert.doesNotMatch(html, /Social Content Strategy and Production/);
  assert.doesNotMatch(html, /Campaigns &amp; Storytelling/);
  assert.match(
    html,
    /Customized content packs, carousel sequences, video and animation concepts, kinetic graphics\./,
  );
  assert.doesNotMatch(html, /Strategic social media content/);
  assert.doesNotMatch(html, /Each asset is thoughtfully directed for impact/);
  assert.match(html, /Web Design/);
  assert.doesNotMatch(html, /Content ecosystems/);
  assert.match(html, /curbie-demo-service\.mp4/);
  assert.match(html, /Brand websites built at speed\./);
  assert.doesNotMatch(html, /Brand websites built with speed and strategic direction/);
  assert.match(html, /Creative Workshops and Consulting/);
  assert.match(html, /nessie-consult\.png/);
  assert.doesNotMatch(html, /AI-powered creative systems/);
  assert.match(
    html,
    /Build your creative capability, workshops, demos, hands-on training, systems integration\./,
  );
  assert.doesNotMatch(html, /Whether it&#x27;s a one-day workshop or ongoing consulting/);
  assert.doesNotMatch(html, /Positioning/);
  assert.doesNotMatch(html, /Campaign worlds/);
  assert.doesNotMatch(html, /Ongoing storylines/);
  assert.doesNotMatch(html, /AI workflows/);
  assert.doesNotMatch(html, /Selected work/);
  assert.doesNotMatch(html, /Make the work the first impression\./);
  assert.doesNotMatch(html, /Placeholder selected work/);
  assert.doesNotMatch(html, /Launch Film System/);
  assert.doesNotMatch(html, /Editorial Brand World/);
  assert.doesNotMatch(html, /Founder Story Package/);
  assert.doesNotMatch(html, /Find the signal/);
  assert.doesNotMatch(html, /Shape the story/);
  assert.doesNotMatch(html, /Direct the visual world/);
  assert.doesNotMatch(html, /Deliver the working system/);
  assert.match(html, /LET&#x27;S KICK OFF YOUR VISION\./);
  assert.doesNotMatch(html, /Ready to amplify what you&#x27;re building\?/);
  assert.doesNotMatch(html, /READY TO AMPLIFY WHAT YOU&#x27;RE BUILDING\?/);
  assert.doesNotMatch(html, /ARE YOU READY TO LAUNCH YOUR VISION\?/);
  assert.doesNotMatch(html, /Bring the next body of work into focus\./);
  assert.match(html, /href="\/start"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});

test("server-renders the restrained about page", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Hello, I&#x27;m Nessie\./);
  assert.match(html, /nessie-brown-couch\.png/);
  assert.match(html, /Nessie Melendez seated on a brown couch/);
  assert.doesNotMatch(html, /Editable personal introduction/);
  assert.doesNotMatch(html, /Headshot placeholder/);
  assert.doesNotMatch(html, /Replace with Nessie&#x27;s portrait/);
  assert.doesNotMatch(html, /Nessie Melendez shapes brand stories/);
  assert.doesNotMatch(html, /Nessie Melendez is an AI-powered creative director and storyteller/);
  assert.doesNotMatch(html, /She blends deep brand-building experience/);
  assert.match(
    html,
    /With almost 18-plus years leading design innovation at a Fortune 50, I am now consulting independently, helping people, brands, and businesses tell their stories with creative AI\./,
  );
  assert.doesNotMatch(html, /I&#x27;m taking early founding clients through December\./);
  assert.match(html, /Disclaimer: I am not able to take CPG collaborations at this time\./);
  assert.match(html, /If you&#x27;re building, growing, or even just starting, let&#x27;s connect\./);
  assert.doesNotMatch(html, /In exchange for the early founding rate/);
  assert.doesNotMatch(html, /Point of view/);
  assert.doesNotMatch(html, /Experience/);
  assert.doesNotMatch(html, /Collaboration/);
  assert.match(html, /Start now/);
  assert.match(html, /href="\/#top">Home/);
  assert.match(html, /href="\/start"/);
});

test("server-renders the project intake page", async () => {
  const response = await render("/start");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /START HERE/i);
  assert.match(html, /href="\/#top">Home/);
  assert.match(html, /TELL US ABOUT YOUR PROJECT\./);
  assert.match(html, /Name/);
  assert.match(html, /Email/);
  assert.match(html, /Brand or business/);
  assert.match(html, /What do you need\?/);
  assert.match(html, /Brand identity/);
  assert.match(html, /Social media content/);
  assert.match(html, /Brand refresh/);
  assert.match(html, /Images/);
  assert.match(html, /Not sure yet/);
  assert.match(html, /Website refresh/);
  assert.match(html, /New website from scratch/);
  assert.match(html, /Ballpark budget range/);
  assert.match(html, /Project details/);
  assert.match(html, /Not sure what you need\? Let&#x27;s just chat/);
  assert.match(html, /First call is always free/);
  assert.match(html, /nessie@nessiemelendez\.com/);
});

test("keeps the starter preview removed", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /const selectedWork = \[/);
  assert.doesNotMatch(page, /const process = \[/);
  assert.match(layout, /Nessie Melendez \| Creative Direction Portfolio/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);

  await assert.rejects(access(new URL("app/_sites-preview", templateRoot)));
});
