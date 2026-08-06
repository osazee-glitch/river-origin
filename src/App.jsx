import "./App.css";
import logo from "./assets/river origin logo.jpeg";
import Hero from "./components/Hero";
import backgroundVideo from "./assets/background.mp4";
import printer from "./assets/a1.jpeg";
function App() {
  return (
    <div className="app">
      <video
  className="background-video"
  autoPlay
  loop
  muted
  playsInline
>
  <source src={backgroundVideo} type="video/mp4" />
</video>
      <div className="background-glow"></div>

      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            alt="River Origin Logo"
            className="logo-icon"
          />
          <h2>RIVER ORIGIN</h2>
        </div>
        <div className="header-feature">
  <div className="header-feature-text">
    <span>DRINK WITH CONFIDENCE</span>
    <p>Committed to Safe Drinking Water</p>
  </div>

  <img
    src={printer}
    alt="3D Printer"
    className="header-printer"
  />
</div>
      </nav>

      <Hero />
    </div>
  );
}

export default App;