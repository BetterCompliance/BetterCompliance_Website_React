const KnowledgeSection = () => {
  return (
    <div className="knowledge-section">
      <div className="knowledge-container">
        <div 
          className="knowledge-left" 
          data-aos="fade-right" 
          data-aos-duration="500"
        >
          <img 
            src="/assets/Images/imgcntnr (3).svg" 
            alt="Business team meeting" 
            className="knowledge-main-image"
          />
        </div>
        <div className="knowledge-right">
          <div 
            className="knowledge-texts" 
            data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" 
            data-aos-duration="800"
          >
            <span className="knowledge-title">
              <span>Local Knowledge.</span>
              <br />
              <span>Global Excellence.</span>
            </span>
            <span className="knowledge-subtitle">
              We combine deep understanding of Indian regulations with world-class service
              standards — ensuring your business stays compliant, competitive, and confident.
            </span>
          </div>
          <div className="knowledge-service-cards">
            <div 
              className="service-card" 
              data-aos="zoom-in" 
              data-aos-delay="50"
            >
              <div className="service-title">
                <span className="service-title-content">
                  Meet Our <br />Experts
                </span>
              </div>
              <i className="fas fa-arrow-right service-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeSection
