import "../styles/pages/Readings.css";

function Readings() {
  return (
    <main className="readings-page">

      <section className="readings-hero">
        <h1>Choose Your Reading</h1>
        <p>
          Every journey begins with a question. Select a spread and
          uncover the insights waiting for you.
        </p>
      </section>

      <section className="reading-spreads">
        <h2>Tarot Spreads</h2>

        <div className="spread-grid">

          <div className="spread-card">
            <h3>Daily Draw</h3>
            <p>
              A single card offering guidance, reflection, and focus
              for the day ahead.
            </p>
            <span>1 Card • 2 Minutes</span>
            <button>Start Reading</button>
          </div>

          <div className="spread-card">
            <h3>Past • Present • Future</h3>
            <p>
              Explore the connections between past influences,
              current energies, and future possibilities.
            </p>
            <span>3 Cards • 5 Minutes</span>
            <button>Start Reading</button>
          </div>

          <div className="spread-card">
            <h3>Relationship Reading</h3>
            <p>
              Gain insight into dynamics, communication, and
              emotional connections.
            </p>
            <span>5 Cards • 7 Minutes</span>
            <button>Start Reading</button>
          </div>

          <div className="spread-card">
            <h3>Celtic Cross</h3>
            <p>
              A deeper reading designed to reveal patterns,
              challenges, opportunities and growth.
            </p>
            <span>10 Cards • 15 Minutes</span>
            <button>Start Reading</button>
          </div>

        </div>
      </section>

      <section className="reading-process">
        <h2>How It Works</h2>

        <div className="process-grid">
          <div className="process-card">
            <span>01</span>
            <h3>Set Your Intention</h3>
            <p>Focus on a question or area of life.</p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h3>Choose Your Spread</h3>
            <p>Select the reading that suits your needs.</p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h3>Draw Your Cards</h3>
            <p>Reveal the cards and their symbolism.</p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h3>Reflect & Journal</h3>
            <p>Save insights and continue your journey.</p>
          </div>
        </div>
      </section>

      <section className="journal-cta">
        <h2>Continue Your Reflection</h2>
        <p>
          Save your readings, track recurring themes, and revisit
          your personal journey over time.
        </p>
        <button>Visit Journal</button>
      </section>

    </main>
  );
}

export default Readings;