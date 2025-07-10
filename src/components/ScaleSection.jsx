const ScaleSection = () => {
  return (
    <div className="scale-section">
      <div className="scale-container">
        <div className="scale-left">
          <div 
            className="scale-texts" 
            data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom" 
            data-aos-duration="800"
          >
            <span className="scale-title">
              <span>Start Small,</span>
              <br />
              <span>Scale Big</span>
            </span>
            <span className="scale-subtitle">
              Whether you're hiring your first employee in India or relocating an expat, we take care
              of your compliance and ensure your India operations scale smoothly.
            </span>
          </div>
          <div className="scale-service-cards">
            <div 
              className="service-card" 
              data-aos="zoom-in" 
              data-aos-delay="50"
            >
              <div className="service-title">
                <span className="service-title-content">
                  Read<br />Articles
                </span>
              </div>
              <i className="fas fa-arrow-right service-arrow"></i>
            </div>
          </div>
        </div>
        <div 
          className="scale-right" 
          data-aos="fade-left" 
          data-aos-duration="500"
        >
          <img 
            src="/assets/Images/imgcntnr (2).svg" 
            alt="Business women working" 
            className="scale-main-image"
          />
        </div>
      </div>
    </div>
  )
}

export default ScaleSection
