const LaunchSection = () => {
  const serviceCards = [
    { title: "Compliant", subtitle: "Global Centers", delay: 50 },
    { title: "Build Operate", subtitle: "Comply", delay: 100 },
    { title: "Manage", subtitle: "Compliant Team", delay: 150 },
  ]

  return (
    <div className="launch-section">
      <div className="launch-container">
        <div 
          className="launch-left" 
          data-aos="fade-right" 
          data-aos-duration="500"
        >
          <img 
            src="/assets/Images/imgcntnr (1).svg" 
            alt="Business team meeting" 
            className="launch-main-image"
          />
        </div>
        <div className="launch-right">
          <div 
            className="launch-texts" 
            data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" 
            data-aos-duration="800"
          >
            <span className="launch-title">
              <span>Launch Faster.</span>
              <br />
              <span>Grow Smarter.</span>
            </span>
            <span className="launch-subtitle">
              Our engagement models get your Global Capability Center up and running quickly
              — with less risk, fewer delays, and full compliance.
            </span>
          </div>
          <div className="launch-service-cards">
            {serviceCards.map((card, index) => (
              <div 
                key={index}
                className="service-card" 
                data-aos="zoom-in" 
                data-aos-delay={card.delay}
              >
                <div className="service-title">
                  <span className="service-title-content">
                    {card.title} <br /> {card.subtitle}
                  </span>
                </div>
                <i className="fas fa-arrow-right service-arrow"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchSection
