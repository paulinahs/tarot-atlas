import "../styles/pages/SignIn.css";

function SignIn() {
  return (
    <main className="signin-page">
      <div className="signin-card">
        <h1>Welcome Back</h1>

        <p>
          Continue your tarot journey, revisit past readings,
          and access your personal journal.
        </p>

        <form className="signin-form">
          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Sign In
          </button>
        </form>

        <div className="signin-divider">
          <span>or</span>
        </div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <a href="#"> Create one</a>
        </p>
      </div>
    </main>
  );
}

export default SignIn;