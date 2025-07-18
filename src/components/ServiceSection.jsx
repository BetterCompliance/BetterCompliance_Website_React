import React from 'react'

/**
 * ServiceSection - a flexible section for hero/launch/scale/knowledge
 * @param {string} sectionType - e.g. 'hero', 'launch', 'scale', 'knowledge'
 * @param {string} title - Main title (can include <br />)
 * @param {string} subtitle - Subtitle (can include <br />)
 * @param {string} description - Section description
 * @param {Array} serviceCards - Array of {title, subtitle, delay}
 * @param {string} imageSrc - Image path
 * @param {string} imageAlt - Image alt text
 * @param {string} imagePosition - 'left' or 'right'
 * @param {object} containerStyle - Optional extra style
 */
const ServiceSection = ({
  sectionType = '',
  title = '',
  subtitle = '',
  description = '',
  serviceCards = [],
  imageSrc = '',
  imageAlt = '',
  imagePosition = 'right',
  containerStyle = {},
}) => {
  // Section and container class names
  const sectionClass = `service-section service-section--${sectionType}`
  const containerClass = `service-container service-container--${sectionType}`
  const leftContent = (
    <div className="service-left" data-aos="fade-right" data-aos-duration="500">
      <img src={imageSrc} alt={imageAlt} className="service-main-image" />
    </div>
  )
  const rightContent = (
    <div className="service-right">
      <div className="service-texts" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
        <span className="service-title-block">
          <span dangerouslySetInnerHTML={{ __html: title }} />
          <br />
          <span dangerouslySetInnerHTML={{ __html: subtitle }} />
        </span>
        <span className="service-subtitle">{description}</span>
      </div>
      <div className="service-cards">
        {serviceCards.map((card, idx) => (
          <div key={idx} className="service-card" data-aos="zoom-in" data-aos-delay={card.delay}>
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
  )
  return (
    <div className={sectionClass} style={containerStyle} data-type={sectionType}>
      <div className={containerClass}>
        {imagePosition === 'left' ? leftContent : rightContent}
        {imagePosition === 'left' ? rightContent : leftContent}
      </div>
    </div>
  )
}

export default ServiceSection 