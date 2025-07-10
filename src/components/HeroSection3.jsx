const HeroSection3 = () => {
  const serviceCards = [
    { title: "Finance &", subtitle: "Legal", delay: 50 },
    { title: "Human", subtitle: "Resource", delay: 100 },
    { title: "Office &", subtitle: "Workforce", delay: 150 },
  ]

  return (
    <div className="herosec-hero3">
      <div className="herosec-maincntnr2">
        <div className="herosec-left-content">
          <div 
            className="herosec-texts" 
            data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" 
            data-aos-duration="800"
          >
            <span className="herosec-text24">
              <span>Everything You Need,</span>
              <br />
              <span>In One Place</span>
            </span>
            <span className="herosec-text28">
              Forget the patchwork. We handle setup, hiring, compliance, and
              offices — so you can build boldly in India without looking
              back.
            </span>
          </div>
          <div className="herosec-service-cards">
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
        <div 
          className="herosec-right-content" 
          data-aos="fade-left" 
          data-aos-duration="500"
        >
          <img 
            src="/assets/Images/imgcntnr.svg" 
            alt="Business woman working" 
            className="herosec-main-image"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection3
