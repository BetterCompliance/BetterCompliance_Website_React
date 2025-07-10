import { useState, useEffect } from 'react'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setActiveDropdown(null)
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Overlay */}
      {activeDropdown && (
        <div 
          className="mega-menu-overlay active"
          onClick={() => setActiveDropdown(null)}
        />
      )}
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo" onClick={handleLogoClick}>
            <img 
              src="/assets/Images/Component 2.svg" 
              alt="YourBrand Logo" 
              style={{ width: '244.95px', height: '23.5px' }}
            />
          </div>
          
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
                    <h4 className="mega-menu-category">HUMAN RESOURCE</h4>
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
