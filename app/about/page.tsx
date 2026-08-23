import { AboutTypewriter } from "./AboutTypewriter";

const aboutIntro = [
  "With almost 18-plus years leading design innovation at a Fortune 50, I am now consulting independently, helping people, brands, and businesses tell their stories with creative AI.",
  "I'm taking early founding clients through December.",
  "Disclaimer: I am not able to take CPG collaborations at this time.",
  "If you're building, growing, or even just starting, let's connect. I'd love to get your creative story in motion.",
];

export default function AboutPage() {
  return (
    <main className="site-shell about-shell">
      <header className="site-header" aria-label="Main navigation">
        <a className="brand-mark" href="/" aria-label="Nessie Melendez home">
          <span>NESSIE MELENDEZ</span>
          <small>CREATIVE STUDIO</small>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="/#top">Home</a>
          <a href="/#services">Services</a>
          <a href="/about" aria-current="page">
            About
          </a>
          <a href="/start">Start</a>
        </nav>
      </header>

      <section className="about-hero">
        <p className="eyebrow">About</p>
        <div className="about-portrait-frame">
          <img
            alt="Nessie Melendez seated on a brown couch"
            src="/nessie-brown-couch.png"
          />
          <AboutTypewriter />
        </div>
        <div className="about-intro-panel">
          <div className="about-copy">
            {aboutIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="about-copy-action">
              <a className="button button-primary" href="/start">
                Start now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
