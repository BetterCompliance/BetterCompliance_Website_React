import { useEffect } from 'react'

const useSmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll to top on page load
    const handleLoad = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    }

    // Set scroll position to top for next load
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0)
    }

    // Initialize smooth scrolling for anchor links
    const initSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            const offsetTop = target.offsetTop - 80 // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        })
      })
    }

    // Add event listeners
    window.addEventListener('load', handleLoad)
    window.addEventListener('beforeunload', handleBeforeUnload)
    
    // Initialize smooth scrolling
    initSmoothScrolling()

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  // Return smooth scroll function for programmatic use
  const smoothScrollTo = (elementId) => {
    const target = document.getElementById(elementId)
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const smoothScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return { smoothScrollTo, smoothScrollToTop }
}

export default useSmoothScroll
