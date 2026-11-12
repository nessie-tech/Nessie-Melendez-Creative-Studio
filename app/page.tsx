import { HeroReel } from "./HeroReel";
import { ServiceShowcase } from "./ServiceShowcase";

const services = [
  {
    label: "Service 01",
    title: "AI Cinematic Storytelling",
    titleLines: ["AI Cinematic", "Storytelling"],
    caption: "Learn the tools to tell your cinematic story.",
    mediaSrc: "/nessie-demo-reel.mp4",
    focalPoint: "50% 46%",
    posterLabel: "Brand world reel",
    posterTime: 1.2,
  },
  {
    label: "Service 02",
    title: "AI-Powered Social Media Content",
    titleLines: ["AI-Powered", "Social Media Content"],
    caption:
      "Learn the tools to create dynamic social media content at scale.",
    mediaSrc: "/tsa-social-demo.mp4",
    focalPoint: "42% 50%",
    posterLabel: "Social content reel",
    posterTime: 0.4,
  },
  {
    label: "Service 03",
    title: "Vibe-Coded Web Design",
    titleLines: ["Vibe-Coded", "Web Design"],
    caption: "Learn to build your own website, built at speed.",
    mediaSrc: "/curbie-demo-service.mp4",
    focalPoint: "50% 50%",
    posterLabel: "Website motion reel",
    posterTime: 0.8,
  },
  {
    label: "Service 04",
    title: "Creative Workshops and Consulting",
    titleLines: ["Creative Workshops", "and Consulting"],
    caption:
      "Build your creative capability, workshops, demos, hands-on training, systems integration.",
    mediaSrc: "/nessie-consult.png",
    mediaType: "image",
    focalPoint: "50% 50%",
    posterLabel: "Workshop preview",
    posterTime: 0.6,
  },
];

const tickerItems = [
  "Social content",
  "Cinematic storytelling",
  "AI-powered creative",
  "Learn to build",
  "Become a creator",
];

// The track scrolls by half its width, so it is two identical halves.
// Each half repeats the list enough times to be wider than any screen.
const tickerRepeats = 6;

const heroPositioning = {
  headlineAccent: "LEARN CREATIVE AI",
  headlineBase: "SET YOUR IDEAS IN MOTION",
  support:
    "IGNITE YOUR VISION WITH CINEMATIC STORYTELLING.",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand-mark" href="#top" aria-label="Nessie Melendez home">
          <span>NESSIE MELENDEZ</span>
          <small>CREATIVE STUDIO</small>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#top" aria-current="page">
            Home
          </a>
          <a href="#services">Services</a>
          <a href="/about">About</a>
          <a href="/start">Start</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-media" aria-label="Nessie Melendez demo reel preview">
          <HeroReel />
        </div>

        <div className="hero-copy">
          <h1 className="hero-headline">
            <span className="hero-headline-accent">
              {heroPositioning.headlineAccent}
            </span>
            <span>{heroPositioning.headlineBase}</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-positioning-note">
              {heroPositioning.support}
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="button button-secondary" href="#services">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="motion-strip" aria-label="Portfolio positioning">
        <div className="marquee-track">
          {Array.from({ length: 2 * tickerRepeats }, (_, copy) =>
            tickerItems.map((item) => (
              <span key={`${copy}-${item}`}>{item}</span>
            )),
          )}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-intro section-intro-compact">
          <p className="eyebrow">Services</p>
          <h2>WAYS TO UPSKILL AND LEARN</h2>
        </div>
        <ServiceShowcase services={services} />
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Now booking</p>
        <h2>LET&apos;S KICK OFF YOUR VISION.</h2>
        <a className="button button-primary" href="/start">
          Start here
        </a>
      </section>
    </main>
  );
}
