import p1 from "../assets/p1.mp4";
import p2 from "../assets/p2.jpeg";
import image1 from "../assets/image 1.jpeg";
import photo1 from "../assets/photo 1.jpeg";
import photo2 from "../assets/photo 2.jpeg";
import photo3 from "../assets/photo 3.jpeg";
import photo4 from "../assets/photo 4.jpeg";
function Hero() {
  return (
    <>
      <section className="hero">

        <div className="left">

          <div className="image-row">

            <img
  src={photo1}
  className="image-card large"
  alt="Over 20 components engineered together"
/>

            <img
  src={photo2}
  className="image-card large"
  alt="Bluetooth-controlled safety lock"
/>

            <img
  src={photo3}
  className="image-card large"
  alt="Bluetooth-controlled Android safety lock"
/>

            <img
  src={photo4}
  className="image-card large"
  alt="Seal and leak protection"
/>

          </div>

          <p className="label">
           REGISTERED DESIGN PROTECTED BY THE UK INTELLECTUAL PROPERTY OFFICE
DESIGN REGISTRATION NO. 6525462
          </p>

          <h1>
            Experience the feel of our newest product
          </h1>

          <p className="description">
           Support our mission while experiencing a smarter bottle, designed for comfort and safety. Made with food grade materials suitable for contact with drinking water.
          </p>

         <div className="hero-buttons">
  <a
    href="https://ebay.io/m/xkvSt9"
    target="_blank"
    rel="noopener noreferrer"
    className="shop-btn"
  >
    Visit Shop
  </a>

  <button className="shop-btn android-btn" disabled>
   Download Android App
  </button>
</div>

        </div>

        <div className="right">

          <div className="future-card">

            <span>FUTURE PROJECT</span>

            <h3>OUR GOAL</h3>

            <p>
              Redefining the future of water bottles through innovative technology,
               atmospheric water generation, and aquatic remediation, engineered for a more sustainable future.
            </p>

            <div className="prototype">
              Prototype Preview
            </div>
            <div className="future-media">
  <video
  src={p1}
  className="image-card large"
  autoPlay
  loop
  muted
  playsInline
/>

  <img
  src={p2}
  className="image-card large"
  alt="River Origin"
/>

  <img
  src={image1}
  className="image-card large"
  alt="More Advanced Protection"
/>
</div>

          </div>

        </div>

      </section>

      <section className="about">

        <p className="about-label">ABOUT</p>

        <h2>Built for momentum.</h2>

        <p className="about-description">
          Get to know what River Origin is about: our present mission, future projects,
          who we are, and what we stand for.
        </p>
        <div className="about-cards">

  <div className="about-card">
  <span>01</span>
  <h3>Smart Bottle</h3>
  <p>
    We are creating a smart bottle that defines the true essence of
    creativity and features what you actually need for a healthy, safe sip
    while pioneering one of the world’s first bottles capable of creating its own water.
  </p>
</div>

<div className="about-card">
  <span>02</span>
  <h3>Atmospheric Water Generation</h3>
  <p>
    We are investing time, substantial innovation, and relentless research
    to create a future where water is never a difficult necessity, but a
    reliable resource available even in dry and arid regions.
  </p>
</div>

<div className="about-card">
  <span>03</span>
  <h3>Aquatic Remediation</h3>
  <p>
    Developing innovative technology and sustainable solutions to remove
    pollution, restore water quality, and protect aquatic ecosystems for
    future generations.
  </p>
</div>

</div>

      </section>
      <section className="mission">

  <p className="mission-label">OUR MISSION</p>

  <h2>Innovation with purpose.</h2>

  <p className="mission-text">
    At River Origin, our mission is to redefine access to clean water and provide
    greater confidence in the safety of what we drink through thoughtful
    innovation. We are building products and technologies that promote healthier
    living, safer hydration, personal security, environmental sustainability,
    and a future where clean water is more accessible to everyone giving people
    peace of mind with every sip.
  </p>

  <p className="mission-label vision">OUR VISION</p>

  <h2>A future everyone can trust.</h2>

  <p className="mission-text">
    We envision a world where advanced water technologies empower people
    everywhere from everyday users to communities facing water scarcity, water
    contamination, or water tampering. Our vision is to create a future where
    clean, safe drinking water is never out of reach, and where every person can
    trust their bottle to deliver a safe, refreshing sip with complete peace of
    mind.
  </p>

</section>
<section className="footer">
  <div className="footer-content">

    <div className="footer-brand">
      <h2>RIVER ORIGIN</h2>
      <p>
        Redefining the future of water through thoughtful innovation,
        sustainability, and trust.
      </p>
    </div>

    <div className="footer-links">
      <h4>Explore</h4>
      <a href="#">About</a>
      <a href="#">Mission</a>
      <a href="#">Vision</a>
      <a href="#">Shop</a>
    </div>

    <div className="footer-contact">
      <h4>Contact</h4>
      <p>hello@riverorigin.com</p>
      <p>United Kingdom</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 River Origin. All rights reserved.</p>
  </div>
</section>
    </>
  );
}

export default Hero;