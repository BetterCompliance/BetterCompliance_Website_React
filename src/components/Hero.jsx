const Hero = () => {
  const handleCTAClick = () => {
    // Add CTA functionality here
    console.log('CTA button clicked')
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
            <span className="highlight">
              The Back Office that moves <br />
              like a Frontline Team
            </span>
          </div>
          <div className="hero-description">
            We simplify Global Capability Center (GCC) <br />
            setups in India, handling the groundwork so you can scale faster.
          </div>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              id="cta-button"
              onClick={handleCTAClick}
            >
              Let's Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
