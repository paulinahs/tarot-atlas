import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">

        <h1>Discover Your Inner Compass</h1>

        <p>
          Tarot Atlas combines intuition,
          symbolism and self-reflection in
          one digital sanctuary.
        </p>

        <button>Begin Your Journey</button>

      </section>

      <section className="features">

        <article className="feature-card">
          <h2>Daily Card</h2>
          <p>
            Draw a new card every day and
            reflect on its message.
          </p>
        </article>

        <article className="feature-card">
          <h2>Tarot Journal</h2>
          <p>
            Save spreads, thoughts and
            personal interpretations.
          </p>
        </article>

        <article className="feature-card">
          <h2>Learn Tarot</h2>
          <p>
            Explore meanings and symbolism
            for all 78 cards.
          </p>
        </article>

      </section>
    </>
  );
}

export default Home;