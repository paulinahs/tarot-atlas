import "../styles/pages/About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <span className="about-badge">
          ✨ About Tarot Atlas
        </span>

        <h1>
          Tarot for Reflection,
          Growth & Curiosity
        </h1>

        <p className="about-lead">
          Tarot Atlas combines traditional tarot wisdom with a
          modern digital experience. Our mission is to create a
          welcoming space where reflection, learning, and personal
          discovery come together.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h2>🌙 Our Story</h2>
            <p>
              Tarot Atlas began as a shared vision to make tarot
              more approachable through thoughtful design,
              accessibility, and modern technology.
            </p>
          </div>

          <div className="about-card">
            <h2>🔮 Our Mission</h2>
            <p>
              We aim to create a space that encourages reflection,
              self-discovery, and meaningful exploration of tarot.
            </p>
          </div>

          <div className="about-card">
            <h2>📚 Learn</h2>
            <p>
              Explore detailed card meanings, symbolism, and
              interpretations at your own pace.
            </p>
          </div>

          <div className="about-card">
            <h2>📝 Journal</h2>
            <p>
              Save readings and reflections to build a personal
              archive of insights and growth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;