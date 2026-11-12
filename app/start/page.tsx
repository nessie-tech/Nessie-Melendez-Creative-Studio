const budgetRanges = [
  "Under $5K",
  "$5K-$10K",
  "$10K-$25K",
  "$25K-$50K",
  "$50K+",
  "Not sure yet",
];

const timelineRanges = [
  "Select a timeline",
  "As soon as possible",
  "Next 2-4 weeks",
  "Next 1-3 months",
  "3+ months out",
  "Not sure yet",
];

export default function StartPage() {
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
          <a href="/about">About</a>
          <a href="/start" aria-current="page">
            Start
          </a>
        </nav>
      </header>

      <section className="intake-hero">
        <div className="intake-intro">
          <p className="eyebrow">Start here</p>
          <h1>TELL US ABOUT YOUR LEARNING JOURNEY.</h1>
          <p>Ready to learn the AI tools to tell your story?</p>
        </div>

        <form
          className="intake-form"
          action="mailto:nessie@nessiemelendez.com"
          aria-label="Project inquiry form"
          encType="text/plain"
          method="post"
        >
          <div className="form-row">
            <label>
              <span>Name</span>
              <input name="name" type="text" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
          </div>

          <label>
            <span>Brand or business <small>optional</small></span>
            <input name="brand" type="text" autoComplete="organization" />
          </label>

          <label>
            <span>What do you need?</span>
            <textarea name="needs" rows={5} />
          </label>

          <div className="form-row">
            <label>
              <span>Timeline</span>
              <select name="timeline" defaultValue={timelineRanges[0]}>
                {timelineRanges.map((range) => (
                  <option disabled={range === timelineRanges[0]} key={range}>
                    {range}
                  </option>
                ))}
              </select>
            </label>
            <fieldset className="need-fieldset budget-fieldset">
              <legend>Budget</legend>
              <div className="need-pill-grid budget-pill-grid">
                {budgetRanges.map((range) => (
                  <label className="need-pill" key={range}>
                    <input name="budget" type="radio" value={range} />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="intake-actions">
            <button className="button button-primary" type="submit">
              Submit
            </button>
          </div>
        </form>

        <aside className="intake-note" aria-label="Email option">
          <p className="eyebrow">Prefer email?</p>
          <h2>WRITE DIRECTLY.</h2>
          <p>
            Send a note to{" "}
            <a href="mailto:nessie@nessiemelendez.com">
              nessie@nessiemelendez.com
            </a>{" "}
            with your questions, and we will get back to you as soon as
            possible.
          </p>
        </aside>
      </section>
    </main>
  );
}
