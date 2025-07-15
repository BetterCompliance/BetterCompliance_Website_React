import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import '@splidejs/react-splide/css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --- Hero Section ---
const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-title">
          <span className="highlight">
            The Back Office that moves <br /> like a Frontline Team
          </span>
        </div>
        <div className="hero-description">
          We simplify Global Capability Center (GCC) <br /> setups in India, handling the groundwork so you can scale faster.
        </div>
        <div className="hero-buttons">
          <button className="btn btn-primary" id="cta-button">
            Let's Talk to Expert
          </button>
        </div>
      </div>
    </div>
  </section>
)

// --- Marquee Section ---
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
              {logos.map((logo, index) => (
                <img key={`first-${index}`} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              ))}
              {logos.map((logo, index) => (
                <img key={`second-${index}`} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Hero Section 3 ---
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
          <div className="herosec-texts" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
            <span className="herosec-text24">
              <span>Everything You Need,</span>
              <br />
              <span>In One Place</span>
            </span>
            <span className="herosec-text28">
              Forget the patchwork. We handle setup, hiring, compliance, and offices — so you can build boldly in India without looking back.
            </span>
          </div>
          <div className="herosec-service-cards">
            {serviceCards.map((card, index) => (
              <div key={index} className="service-card" data-aos="zoom-in" data-aos-delay={card.delay}>
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
        <div className="herosec-right-content" data-aos="fade-left" data-aos-duration="500">
          <img src="/assets/Images/imgcntnr.svg" alt="Business woman working" className="herosec-main-image" />
        </div>
      </div>
    </div>
  )
}

// --- Launch Section ---
const LaunchSection = () => {
  const serviceCards = [
    { title: "Compliant", subtitle: "Global Centers", delay: 50 },
    { title: "Build Operate", subtitle: "Comply", delay: 100 },
    { title: "Manage", subtitle: "Compliant Team", delay: 150 },
  ]
  return (
    <div className="launch-section">
      <div className="launch-container">
        <div className="launch-left" data-aos="fade-right" data-aos-duration="500">
          <img src="/assets/Images/imgcntnr (1).svg" alt="Business team meeting" className="launch-main-image" />
        </div>
        <div className="launch-right">
          <div className="launch-texts" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
            <span className="launch-title">
              <span>Launch Faster.</span>
              <br />
              <span>Grow Smarter.</span>
            </span>
            <span className="launch-subtitle">
              Our engagement models get your Global Capability Center up and running quickly — with less risk, fewer delays, and full compliance.
            </span>
          </div>
          <div className="launch-service-cards">
            {serviceCards.map((card, index) => (
              <div key={index} className="service-card" data-aos="zoom-in" data-aos-delay={card.delay}>
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

// --- Scale Section ---
const ScaleSection = () => (
  <div className="scale-section">
    <div className="scale-container">
      <div className="scale-left">
        <div className="scale-texts" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
          <span className="scale-title">
            <span>Start Small,</span>
            <br />
            <span>Scale Big</span>
          </span>
          <span className="scale-subtitle">
            Whether you're hiring your first employee in India or relocating an expat, we take care of your compliance and ensure your India operations scale smoothly.
          </span>
        </div>
        <div className="scale-service-cards">
          <div className="service-card" data-aos="zoom-in" data-aos-delay="50">
            <div className="service-title">
              <span className="service-title-content">Read<br />Articles</span>
            </div>
            <i className="fas fa-arrow-right service-arrow"></i>
          </div>
        </div>
      </div>
      <div className="scale-right" data-aos="fade-left" data-aos-duration="500">
        <img src="/assets/Images/imgcntnr (2).svg" alt="Business women working" className="scale-main-image" />
      </div>
    </div>
  </div>
)

// --- Knowledge Section (with animated text tied to trigger) ---

const KnowledgeSection = () => {
  const sectionRef = useRef(null)
  return (
    <div className="knowledge-section" ref={sectionRef} style={{ position: 'relative' }}>
      <div className="knowledge-container">
        <div className="knowledge-left" data-aos="fade-right" data-aos-duration="500">
          <img src="/assets/Images/imgcntnr (3).svg" alt="Business team meeting" className="knowledge-main-image" />
        </div>
        <div className="knowledge-right">
          <div className="knowledge-texts" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="800">
            <span className="knowledge-title">
              <span>Local Knowledge.</span>
              <br />
              <span>Global Excellence.</span>
            </span>
            <span className="knowledge-subtitle">
              We combine deep understanding of Indian regulations with world-class service standards — ensuring your business stays compliant, competitive, and confident.
            </span>
          </div>
          <div className="knowledge-service-cards">
            <div className="service-card" data-aos="zoom-in" data-aos-delay="50">
              <div className="service-title">
                <span className="service-title-content">Meet Our <br />Experts</span>
              </div>
              <i className="fas fa-arrow-right service-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Splide Carousel Section ---
import { Splide, SplideSlide } from '@splidejs/react-splide'
const SplideCarousel = () => {
  const slides = [
    { id: 1, image: "/assets/Images/imgcntnr.svg", alt: "Health Care", number: "001", category: "Health\nCare" },
    { id: 2, image: "/assets/Images/imgcntnr (1).svg", alt: "Finance", number: "002", category: "Finance" },
    { id: 3, image: "/assets/Images/imgcntnr (2).svg", alt: "Office", number: "003", category: "Office" },
    { id: 4, image: "/assets/Images/imgcntnr (3).svg", alt: "Workforce", number: "004", category: "Workforce" }
  ]
  const splideOptions = {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    gap: '24px',
    padding: { left: '22%', right: '10%' },
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 10000,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: false,
    breakpoints: {
      1024: { perPage: 2, padding: { left: '5%', right: '5%' } },
      600: { perPage: 1, padding: { left: '10%', right: '10%' } }
    }
  }
  return (
    <section className="splide-section" role="group" aria-label="Splide Basic HTML Example">
      <div className="carousel-header-container">
        <div className="carousel-title">
          <h1>Where we can <br />make a difference.</h1>
        </div>
        <div className="carousel-description">
          <p>We partner with future-focused businesses across diverse industries—streamlining operations, enhancing compliance, and unlocking growth.</p>
        </div>
      </div>
      <div className="carousel-container">
        <Splide options={splideOptions}>
          {slides.map((slide) => (
            <SplideSlide key={slide.id}>
              <div className="slider-card">
                <img src={slide.image} alt={slide.alt} className="slider-card-img" />
                <div className="slider-card-overlay"></div>
                <div className="slider-card-content">
                  <div className="slider-card-number">{slide.number}</div>
                  <div className="slider-card-category">
                    {slide.category.split('\n').map((line, index) => (
                      <span key={index}>{line}{index < slide.category.split('\n').length - 1 && <br />}</span>
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

// --- Testimonials Section ---
const Testimonials = () => {
  const trackRef = useRef(null)
  const testimonials = [
    { id: 1, content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.", author: { name: "Ernesto Yost", title: "Anderson - Labadie", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" } },
    { id: 2, content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.", author: { name: "Sarah Johnson", title: "Tech Solutions Inc.", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" } },
    { id: 3, content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.", author: { name: "Michael Chen", title: "Global Enterprises", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" } },
    { id: 4, content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.", author: { name: "Lisa Rodriguez", title: "Innovation Labs", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" } }
  ]
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const handleMouseEnter = () => { track.style.animationPlayState = 'paused' }
    const handleMouseLeave = () => { track.style.animationPlayState = 'running' }
    track.addEventListener('mouseenter', handleMouseEnter)
    track.addEventListener('mouseleave', handleMouseLeave)
    const cards = track.querySelectorAll('.testimonial-card')
    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter)
      card.addEventListener('mouseleave', handleMouseLeave)
    })
    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter)
      track.removeEventListener('mouseleave', handleMouseLeave)
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter)
        card.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])
  const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
  const TestimonialCard = ({ testimonial }) => (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p>{testimonial.content}</p>
      </div>
      <div className="testimonial-author">
        <img src={testimonial.author.avatar} alt={testimonial.author.name} className="author-avatar" />
        <div className="author-info">
          <div className="author-name">{testimonial.author.name}</div>
          <div className="author-title">{testimonial.author.title}</div>
        </div>
        <a href="#" className="linkedin-link" aria-label="LinkedIn profile">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Success, In Their Own Words</h2>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-track" ref={trackRef}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} />
            ))}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Section Separator ---
const SectionSeparator = () => (
  <section className="section-separator-content">
    <div className="section-separator-container">
      <div className="section-separator-h1">
        Let's make it <br /> simple.
      </div>
      <div className="section-separator-btn">
        <span className="cta-btn-small">
          <button>Let's Talk to Expert</button>
        </span>
      </div>
    </div>
  </section>
)

// --- MainContent Component ---
const MainContent = () => {
  useEffect(() => { AOS.init({ duration: 800, once: false, offset: 120, delay: 0 }) }, [])
  return (
    <>
      {/* Main site content follows */}
      <Hero />
      <Marquee />
      <HeroSection3 />
      <LaunchSection />
      <ScaleSection />
      <KnowledgeSection />
      <SplideCarousel />
      <Testimonials />
      <SectionSeparator />
    </>
  )
}

export default MainContent 