import { HeroReel } from "./HeroReel";
import { ServiceShowcase } from "./ServiceShowcase";

const services = [
  {
    label: "Service 01",
    title: "Brand Strategy and Storytelling",
    titleLines: ["Brand Strategy", "and Storytelling"],
    caption:
      "Visual identity, brand world creation, cinematic storytelling, brand campaigns, digital activations.",
    mediaSrc: "/nessie-demo-reel.mp4",
    focalPoint: "50% 46%",
    posterLabel: "Brand world reel",
    posterTime: 1.2,
  },
  {
    label: "Service 02",
    title: "Social Content",
    titleLines: ["Social Content"],
    caption:
      "Customized content packs, carousel sequences, video and animation concepts, kinetic graphics.",
    mediaSrc: "/tsa-social-demo.mp4",
    focalPoint: "42% 50%",
    posterLabel: "Social content reel",
    posterTime: 0.4,
  },
  {
    label: "Service 03",
    title: "Web Design",
    titleLines: ["Web Design"],
    caption: "Brand websites built at speed.",
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

const heroPositioning = {
  headlineAccent: "AI-POWERED CREATIVE",
  headlineBase: "FOR BRANDS IN MOTION",
  support:
    "IGNITE YOUR BUSINESS WITH DYNAMIC STORYTELLING POWERED BY 18+ YEARS OF BRAND-BUILDING EXPERIENCE AND DESIGN INNOVATION.",
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
              <a className="button button-secondary" href="/start">
                Start a project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="motion-strip" aria-label="Portfolio positioning">
        <div className="marquee-track">
          <span>Social content</span>
          <span>Brand campaigns</span>
          <span>Cinematic storytelling</span>
          <span>Visual identity</span>
          <span>Brand systems</span>
          <span>Vibe-coded websites</span>
          <span>Creative consulting</span>
          <span>Social content</span>
          <span>Brand campaigns</span>
          <span>Cinematic storytelling</span>
          <span>Visual identity</span>
          <span>Brand systems</span>
          <span>Vibe-coded websites</span>
          <span>Creative consulting</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-intro section-intro-compact">
          <p className="eyebrow">Services</p>
          <h2>WAYS TO COLLABORATE</h2>
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
