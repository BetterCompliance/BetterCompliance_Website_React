import { useEffect, useRef } from 'react'

const Testimonials = () => {
  const trackRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.",
      author: {
        name: "Ernesto Yost",
        title: "Anderson - Labadie",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 2,
      content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.",
      author: {
        name: "Sarah Johnson",
        title: "Tech Solutions Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.",
      author: {
        name: "Michael Chen",
        title: "Global Enterprises",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      }
    },
    {
      id: 4,
      content: "Quo cado curatio undique cubo. Itaque tantillus armarium somniculosus avantia exercitationem pecto. Eum canis assumenda adhuc adfectus cras certe suggero brevis absorbo.",
      author: {
        name: "Lisa Rodriguez",
        title: "Innovation Labs",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      }
    }
  ]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused'
    }

    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running'
    }

    // Add hover listeners to the track
    track.addEventListener('mouseenter', handleMouseEnter)
    track.addEventListener('mouseleave', handleMouseLeave)

    // Add hover listeners to individual cards
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
        <img 
          src={testimonial.author.avatar} 
          alt={testimonial.author.name} 
          className="author-avatar"
        />
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
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`first-${testimonial.id}`} testimonial={testimonial} />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <TestimonialCard key={`second-${testimonial.id}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
