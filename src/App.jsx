import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles/main.css'
import './styles/header.css'
import './styles/footer.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import HeroSection3 from './components/HeroSection3'
import LaunchSection from './components/LaunchSection'
import ScaleSection from './components/ScaleSection'
import KnowledgeSection from './components/KnowledgeSection'
import SplideCarousel from './components/SplideCarousel'
import Testimonials from './components/Testimonials'
import SectionSeparator from './components/SectionSeparator'
import Footer from './components/Footer'
import useSmoothScroll from './hooks/useSmoothScroll'

function App() {
  // Initialize smooth scrolling
  useSmoothScroll()

  useEffect(() => {
    // Professional page refresh behavior - smooth scroll to top
    const handlePageLoad = () => {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, 100)
    }

    // Handle both initial load and refresh
    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
    }

    // Also handle browser back/forward navigation
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        // Page was loaded from cache (back/forward button)
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    })

    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
      delay: 0,
    })

    // Cleanup
    return () => {
      window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <HeroSection3 />
      <LaunchSection />
      <ScaleSection />
      <KnowledgeSection />
      <SplideCarousel />
      <Testimonials />
      <SectionSeparator />
      <Footer />
    </>
  )
}

export default App
