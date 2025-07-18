import { useState, useEffect } from 'react'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [isNavbarBlack, setIsNavbarBlack] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setActiveDropdown(null)
      }
      if (!e.target.closest('.mobile-menu') && !e.target.closest('.hamburger')) {
        setMobileMenuOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    // Listen for navbar-black class changes
    const navbar = document.querySelector('.navbar')
    const checkNavbarBlack = () => {
      if (navbar && navbar.classList.contains('navbar-black')) {
        setIsNavbarBlack(true)
      } else {
        setIsNavbarBlack(false)
      }
    }
    window.addEventListener('scroll', checkNavbarBlack)
    // Initial check
    checkNavbarBlack()

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', checkNavbarBlack)
    }
  }, [])

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleMobileDropdownToggle = (dropdownName) => {
    setMobileDropdown(mobileDropdown === dropdownName ? null : dropdownName)
  }

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleHamburgerClick = (e) => {
    e.stopPropagation()
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <>
      {/* Overlay */}
      {(activeDropdown || mobileMenuOpen) && (
        <div 
          className="mega-menu-overlay active"
          onClick={() => {
            setActiveDropdown(null)
            setMobileMenuOpen(false)
          }}
        />
      )}
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={handleLogoClick}>
            <img 
              src={isNavbarBlack ? "/assets/Images/Component 2 (1).svg" : "/assets/Images/Component 2.svg"}
              alt="YourBrand Logo" 
              style={{ width: '244.95px', height: '23.5px' }}
            />
          </div>

          {/* Hamburger Icon */}
          <div className={`hamburger${mobileMenuOpen ? ' open' : ''}`} onClick={handleHamburgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Desktop Nav */}
          <ul className="nav-menu">
            <li className={`nav-item dropdown ${activeDropdown === 'solutions' ? 'active' : ''}`}>
              <a 
                href="#" 
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault()
                  handleDropdownToggle('solutions')
                }}
              >
                Solutions
                <i className="fas fa-chevron-down dropdown-arrow"></i>
              </a>
              
              <div className={`mega-menu ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                <div className="mega-menu-container">
                  {/* Finance & Legal Column */}
                  <div className="mega-menu-column">
                    <h4 className="mega-menu-category">FINANCE & LEGAL</h4>
                    <div className="mega-menu-items">
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-briefcase"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Business Setup & Secretarial Support</span>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-calculator"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Bookkeeping & Compliance</span>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-gavel"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Allied Business (LAW) Services</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Human Resource Column 1 */}
                  <div className="mega-menu-column">
                    <h4 className="mega-menu-category">HUMAN RESOURCE</h4>
                    <div className="mega-menu-items">
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Talent Acquisition</span>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-money-check-alt"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Payroll Management</span>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-award"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Employer of Record (EOR)</span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Human Resource Column 2 */}
                  <div className="mega-menu-column">
                    <h4 className="mega-menu-category">OFFICE & BENEFITS</h4>
                    <div className="mega-menu-items">
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Insurance & Benefits</span>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-laptop"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Workspace Solutions</span>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-icon">
                          <i className="fas fa-server"></i>
                        </div>
                        <div className="menu-item-content">
                          <span className="menu-item-title">Information Technology Infrastructure</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li className={`nav-item dropdown ${activeDropdown === 'engagement' ? 'active' : ''}`}>
              <a 
                href="#" 
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault()
                  handleDropdownToggle('engagement')
                }}
              >
                Engagement Suits
                <i className="fas fa-chevron-down dropdown-arrow"></i>
              </a>
              
              <div className={`engagement-mega-menu ${activeDropdown === 'engagement' ? 'active' : ''}`}>
                <div className="mega-menu-container">
                  <div className="mega-menu-column">
                    <h4 className="mega-menu-category">ENGAGEMENT SUITS</h4>
                    <div className="mega-menu-items">
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-content">
                          <span className="eng-menu-item-title">Compliant <br />Global Centers</span>
                          <span className="menu-item-desc">Scalable, fully-owned operations in India with strict compliance — all on a pay-as-you-grow model.</span>
                          <i className="fas fa-arrow-right menu-item-arrow"></i>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-content">
                          <span className="eng-menu-item-title">Build Operate <br /> Comply</span>
                          <span className="menu-item-desc">We build, run, and hand over your India center — fully compliant from day one to transition.</span>
                          <i className="fas fa-arrow-right menu-item-arrow"></i>
                        </div>
                      </a>
                      <a href="#" className="mega-menu-item">
                        <div className="menu-item-content">
                          <span className="eng-menu-item-title">Manage Compliant <br /> Teams</span>
                          <span className="menu-item-desc">We hire, manage, and support your India team — fast, flexible, and always compliant.</span>
                          <i className="fas fa-arrow-right menu-item-arrow"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <a href="#about" className="nav-link">Industries</a>
            </li>
            
            <li className={`nav-item dropdown company-dropdown ${activeDropdown === 'company' ? 'active' : ''}`}>
              <a 
                href="#" 
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault()
                  handleDropdownToggle('company')
                }}
              >
                Company
                <i className="fas fa-chevron-down dropdown-arrow"></i>
              </a>
              
              <div className="company-menu">
                <div className="company-menu-container">
                  <div className="company-menu-column">
                    <span className="company-menu-title">COMPANY</span>
                    <a href="#" className="company-menu-item">
                      About Us
                      <i className="fas fa-arrow-right company-menu-arrow"></i>
                    </a>
                    <a href="#" className="company-menu-item">
                      Careers
                      <i className="fas fa-arrow-right company-menu-arrow"></i>
                    </a>
                    <a href="#" className="company-menu-item">
                      Contact
                      <i className="fas fa-arrow-right company-menu-arrow"></i>
                    </a>
                  </div>
                  <div className="company-menu-column">
                    <span className="company-menu-title">RESOURCES</span>
                    <a href="#" className="company-menu-item">
                      Articles
                      <i className="fas fa-arrow-right company-menu-arrow"></i>
                    </a>
                    <a href="#" className="company-menu-item">
                      Community
                      <i className="fas fa-arrow-right company-menu-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
            <ul className="mobile-nav-list">
              <li className={`nav-item dropdown ${mobileDropdown === 'solutions' ? 'active' : ''}`}> 
                <a 
                  href="#" 
                  className="nav-link dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('solutions')
                  }}
                >
                  Solutions
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </a>
                {mobileDropdown === 'solutions' && (
                  <div className="mobile-dropdown-menu">
                    <a href="#" className="mobile-dropdown-item">Business Setup & Secretarial Support</a>
                    <a href="#" className="mobile-dropdown-item">Bookkeeping & Compliance</a>
                    <a href="#" className="mobile-dropdown-item">Allied Business (LAW) Services</a>
                    <a href="#" className="mobile-dropdown-item">Talent Acquisition</a>
                    <a href="#" className="mobile-dropdown-item">Payroll Management</a>
                    <a href="#" className="mobile-dropdown-item">Employer of Record (EOR)</a>
                    <a href="#" className="mobile-dropdown-item">Insurance & Benefits</a>
                    <a href="#" className="mobile-dropdown-item">Workspace Solutions</a>
                    <a href="#" className="mobile-dropdown-item">Information Technology Infrastructure</a>
                  </div>
                )}
              </li>
              <li className={`nav-item dropdown ${mobileDropdown === 'engagement' ? 'active' : ''}`}> 
                <a 
                  href="#" 
                  className="nav-link dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('engagement')
                  }}
                >
                  Engagement Suits
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </a>
                {mobileDropdown === 'engagement' && (
                  <div className="mobile-dropdown-menu">
                    <a href="#" className="mobile-dropdown-item">Compliant Global Centers</a>
                    <a href="#" className="mobile-dropdown-item">Build Operate Comply</a>
                    <a href="#" className="mobile-dropdown-item">Manage Compliant Teams</a>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">Industries</a>
              </li>
              <li className={`nav-item dropdown company-dropdown ${mobileDropdown === 'company' ? 'active' : ''}`}> 
                <a 
                  href="#" 
                  className="nav-link dropdown-toggle"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMobileDropdownToggle('company')
                  }}
                >
                  Company
                  <i className="fas fa-chevron-down dropdown-arrow"></i>
                </a>
                {mobileDropdown === 'company' && (
                  <div className="mobile-dropdown-menu">
                    <a href="#" className="mobile-dropdown-item">About Us</a>
                    <a href="#" className="mobile-dropdown-item">Careers</a>
                    <a href="#" className="mobile-dropdown-item">Contact</a>
                    <a href="#" className="mobile-dropdown-item">Articles</a>
                    <a href="#" className="mobile-dropdown-item">Community</a>
                  </div>
                )}
              </li>
              <li className="nav-item mobile-contact">
                <button className="mobile-cta">Let's Talk to Expert</button>
              </li>
              <li className="nav-item mobile-language">
                <select>
                  <option value="English">En</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="nav-contact">
            <span className="cta-btn-small">
              <button>Let's Talk to Expert</button>
            </span>
            <span className="language-toggle">
              <select>
                <option value="English">En</option>
              </select>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
