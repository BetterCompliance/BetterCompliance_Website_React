const Footer = () => {
  const footerSections = {
    finance: {
      title: "Finance & Legal",
      links: [
        "Business Setup & Secretarial Support",
        "Bookkeeping & Compliance",
        "Allied Business (LAW) Services"
      ]
    },
    hr: {
      title: "Human Resource",
      links: [
        "Talent Acquisition",
        "Payroll Management",
        "Employer of Record (EOR)"
      ]
    },
    office: {
      title: "Office & Workforce",
      links: [
        "Insurance & Benefits",
        "WorkspaceSolutions",
        "Information Technology Infrastructure"
      ]
    },
    engagement: {
      title: "Engagement Suits",
      links: [
        "Compliant Global Centers",
        "Build Operate Comply",
        "Manage Compliant Teams"
      ]
    }
  }

  const bottomSections = {
    company: {
      title: "Company",
      links: ["About Us", "Career", "Contact Us"]
    },
    resources: {
      title: "Resources",
      links: ["Articles", "Community"]
    },
    socials: {
      title: "Socials",
      links: ["LinkedIn", "Instagram", "Facebook"]
    }
  }

  return (
    <div className="footer-wrapper">
      <div className="section-separator"></div>
      
      <div className="footer-content">
        {/* Top Section - 4 Columns */}
        <div className="footer-top">
          <div className="footer-column finance">
            <span className="footer-column-title">{footerSections.finance.title}</span>
            <div className="footer-links">
              {footerSections.finance.links.map((link, index) => (
                <div key={index} className="footer-link">
                  <a href="#" className="footer-link-text">{link}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-column hr">
            <span className="footer-column-title">{footerSections.hr.title}</span>
            <div className="footer-links">
              {footerSections.hr.links.map((link, index) => (
                <div key={index} className="footer-link">
                  <a href="#" className="footer-link-text">{link}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-column office">
            <span className="footer-column-title">{footerSections.office.title}</span>
            <div className="footer-links">
              {footerSections.office.links.map((link, index) => (
                <div key={index} className="footer-link">
                  <a href="#" className="footer-link-text">{link}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-column engagement">
            <span className="footer-column-title">{footerSections.engagement.title}</span>
            <div className="footer-links">
              {footerSections.engagement.links.map((link, index) => (
                <div key={index} className="footer-link">
                  <a href="#" className="footer-link-text">{link}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-company">
              <span className="footer-column-title">{bottomSections.company.title}</span>
              <div className="footer-links">
                {bottomSections.company.links.map((link, index) => (
                  <div key={index} className="footer-link">
                    <a href="#" className="footer-link-text">{link}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-resources">
              <span className="footer-column-title">{bottomSections.resources.title}</span>
              <div className="footer-links">
                {bottomSections.resources.links.map((link, index) => (
                  <div key={index} className="footer-link">
                    <a href="#" className="footer-link-text">{link}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-socials">
              <span className="footer-column-title">{bottomSections.socials.title}</span>
              <div className="footer-links">
                {bottomSections.socials.links.map((link, index) => (
                  <div key={index} className="footer-link">
                    <a href="#" className="footer-link-text">{link}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-brand">
            <span className="footer-brand-text">
              Expand to India, Hassle-Free<br />
              — We've Got Your Back.
            </span>
            <div className="footer-logo">
              <img src="/assets/Images/logo_white.png" alt="YourBrand Logo" />
            </div>
            <span className="footer-copyright">
              © 2025 BetterCompliance<br />
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
