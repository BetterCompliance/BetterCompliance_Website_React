const Marquee = () => {
  const logos = [
    { src: "/assets/Icons/Logo.svg", alt: "logo", width: "80", height: "56" },
    { src: "/assets/Icons/Logo (1).svg", alt: "logo", width: "122", height: "56" },
    { src: "/assets/Icons/Logo (2).svg", alt: "logo", width: "96", height: "56" },
    { src: "/assets/Icons/Logo (3).svg", alt: "logo", width: "110", height: "56" },
    { src: "/assets/Icons/Logo (4).svg", alt: "logo", width: "110", height: "56" },
    { src: "/assets/Icons/Logo (5).svg", alt: "logo", width: "110", height: "56" },
  ]

  return (
    <div className="marquee-wrapper">
      <div className="marquee-wrapper-content">
        <div className="marquee-text">
          <span>Trusted by companies expanding boldly into India.</span>
        </div>
        <div className="marquee-animation-area">
          <div className="marquee-content">
            <div className="logo-icon">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <img
                  key={`first-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <img
                  key={`second-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marquee
