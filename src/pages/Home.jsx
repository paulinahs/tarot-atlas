import "./Home.css";
import {
  Sparkles,
  BookOpen,
  Sprout,
} from "lucide-react";

function Home() {
  return (
    <>
      <section className="hero">

        <h1>The Cards reveal</h1>
        <h2>You decide the path...</h2>

  <p>
  A modern tarot experience combining reflection,
journaling and intuitive exploration.
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

      <section className="featured-reading">
  <h2>Today's Inspiration</h2>

  <p>
    Every card tells a story.
    Explore a spread designed to encourage reflection,
    self-awareness and growth.
  </p>

  <button>View Reading</button>
</section>

<section className="how-it-works">
  <div className="step-card">
      <Sparkles size={40} />
<h3>Draw</h3>
<p>Select a spread or receive a daily card.</p>
  </div>



  <div className="step-card">
    <BookOpen size={40} />
<h3>Reflect</h3>
<p>Explore symbols and interpretations.</p>
  </div>

  <div className="step-card">
    <Sprout size={40} />
<h3>Grow</h3>
<p>Track insights through journaling.</p>
  </div>
</section>
    </>
  );
}

export default Home;