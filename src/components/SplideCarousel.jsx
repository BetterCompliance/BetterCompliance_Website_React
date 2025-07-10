import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const SplideCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/Images/imgcntnr.svg",
      alt: "Health Care",
      number: "001",
      category: "Health\nCare"
    },
    {
      id: 2,
      image: "/assets/Images/imgcntnr (1).svg",
      alt: "Finance",
      number: "002",
      category: "Finance"
    },
    {
      id: 3,
      image: "/assets/Images/imgcntnr (2).svg",
      alt: "Office",
      number: "003",
      category: "Office"
    },
    {
      id: 4,
      image: "/assets/Images/imgcntnr (3).svg",
      alt: "Workforce",
      number: "004",
      category: "Workforce"
    }
  ]

  const splideOptions = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '24px',
    padding: { left: '10%', right: '10%' },
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 10000,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: false,
    breakpoints: {
      1024: {
        perPage: 2,
        padding: { left: '5%', right: '5%' }
      },
      600: {
        perPage: 1,
        padding: { left: '10%', right: '10%' }
      }
    }
  }

  return (
    <section className="splide-section" role="group" aria-label="Splide Basic HTML Example">
      {/* Header content with custom class names */}
      <div className="carousel-header-container">
        <div className="carousel-title">
          <h1>
            Where we can <br />
            make a difference.
          </h1>
        </div>
        <div className="carousel-description">
          <p>
            We partner with future-focused businesses across diverse industries—
            streamlining operations, enhancing compliance, and unlocking growth.
          </p>
        </div>
      </div>

      {/* Splide carousel */}
      <div className="carousel-container">
        <Splide options={splideOptions}>
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="slider-card">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="slider-card-img"
                />
                <div className="slider-card-overlay"></div>
                <div className="slider-card-content">
                  <div className="slider-card-number">{slide.number}</div>
                  <div className="slider-card-category">
                    {slide.category.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < slide.category.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default SplideCarousel
