import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <h1>Tarot Atlas</h1>

        <p>
          Discover guidance through custom tarot readings and
          explore the meanings behind every card.
        </p>

        <button>Begin Reading</button>
      </main>
    </>
  );
}

export default Home;