const projectNeeds = [
  "Brand identity",
  "Social media content",
  "Brand refresh",
  "Images",
  "Not sure yet",
  "Website refresh",
  "New website from scratch",
  "Campaign storytelling",
];

const budgetRanges = [
  "Select a ballpark range",
  "Under $5K",
  "$5K-$10K",
  "$10K-$25K",
  "$25K-$50K",
  "$50K+",
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
          <h1>TELL US ABOUT YOUR PROJECT.</h1>
          <p>
            Share what you are building, where the brand needs momentum, and
            what kind of creative support would move it forward.
          </p>
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

          <fieldset className="need-fieldset">
            <legend>What do you need?</legend>
            <div className="need-pill-grid">
              {projectNeeds.map((need) => (
                <label className="need-pill" key={need}>
                  <input name="needs" type="checkbox" value={need} />
                  <span>{need}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label>
            <span>Ballpark budget range</span>
            <select name="budget" defaultValue={budgetRanges[0]}>
              {budgetRanges.map((range) => (
                <option disabled={range === budgetRanges[0]} key={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Project details</span>
            <textarea
              name="details"
              rows={7}
              placeholder="Tell us about your project, timeline, goals, or what feels unclear right now."
            />
          </label>

          <div className="intake-actions">
            <button className="button button-primary" type="submit">
              Start here
            </button>
            <p>
              Not sure what you need? Let&apos;s just chat. First call is always
              free.
            </p>
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
            with whatever you know so far.
          </p>
        </aside>
      </section>
    </main>
  );
}
