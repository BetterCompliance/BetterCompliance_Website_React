const SectionSeparator = () => {
  const handleCTAClick = () => {
    // Add CTA functionality here
    console.log('CTA button clicked')
  }

  return (
    <section className="section-separator-content">
      <div className="section-separator-container">
        <div className="section-separator-h1">
          Let's make it <br /> simple.
        </div>
        <div className="section-separator-btn">
          <span className="cta-btn-small">
            <button onClick={handleCTAClick}>Let's Talk to Expert</button>
          </span>
        </div>
      </div>
    </section>
  )
}

export default SectionSeparator
