import "../styles/pages/Journal.css";

function Journal() {
  return (
    <main className="journal-page">

      <section className="journal-hero">
        <h1>Your Tarot Journey</h1>
        <p>
          Record insights, revisit past readings, and uncover
          patterns across your personal growth journey.
        </p>

        <button>Start Writing</button>
      </section>

      <section className="journal-section">
        <h2>Recent Reflections</h2>

        <div className="journal-grid">
          <div className="journal-card">
            <h3>The Star</h3>
            <p>October 28, 2026</p>
            <p>
              A reminder that hope is often found after periods
              of uncertainty.
            </p>
          </div>

          <div className="journal-card">
            <h3>Three of Cups</h3>
            <p>October 25, 2026</p>
            <p>
              Reflection on connection, celebration,
              and shared energy.
            </p>
          </div>

          <div className="journal-card">
            <h3>The Hermit</h3>
            <p>October 22, 2026</p>
            <p>
              A period of introspection and inner guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="journal-section">
        <h2>Reflection Prompts</h2>

        <div className="prompt-grid">
          <div className="prompt-card">
            What message resonated most with you today?
          </div>

          <div className="prompt-card">
            What recurring patterns have appeared recently?
          </div>

          <div className="prompt-card">
            How can today's insight influence your next action?
          </div>
        </div>
      </section>

      <section className="journal-section">
        <h2>Track Your Journey</h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>27</h3>
            <p>Readings Saved</p>
          </div>

          <div className="stat-card">
            <h3>12</h3>
            <p>Journal Entries</p>
          </div>

          <div className="stat-card">
            <h3>5</h3>
            <p>Recurring Themes</p>
          </div>

          <div className="stat-card">
            <h3>84</h3>
            <p>Days Reflecting</p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Journal;
