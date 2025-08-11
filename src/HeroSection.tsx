import { useState } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [showGreetingGif, setShowGreetingGif] = useState(false);
  const [showProfileGif, setShowProfileGif] = useState(false);

  const handleScrollToPortfolio = () => {
    const portfolioSection = document.querySelector('#portfolio-section');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero-section">
      <div className="hero-container" data-aos="fade">
        <div className="hero-text">
          <h1
            className="hero-greeting"
            onMouseEnter={() => setShowGreetingGif(true)}
            onMouseLeave={() => setShowGreetingGif(false)}
          >
            Hi! My name is Sasha <br/>
            I am Frontend Developer
          </h1>

          <p className="hero-description">
            I build responsive, accessible interfaces using React, TypeScript, and modern CSS. 
            Passionate about clean code, component-based architecture, and creating meaningful user experiences.
            I work with Tailwind CSS, Flexbox, Grid, and modern build tools to create fast, scalable applications.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="hero-cta-buttons">
            <button className="cta-button primary" onClick={handleScrollToPortfolio}>
              View My Work
            </button>
            <button className="cta-button secondary" onClick={handleScrollToContact}>
              Get In Touch
            </button>
          </div>

          {/* Social Media Links */}
          <div className="hero-social-links">
            <a href="https://github.com/sashashreyder" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sashashreider" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:sashashreiderbr@gmail.com" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Technology Icons Divider */}
        <div className="hero-icons-divider">
          <img src="https://i.postimg.cc/Qt7DbbfK/HTML5-sh.jpg" alt="HTML" />
          <img src="https://i.postimg.cc/ZnFSkqtT/CSS3.jpg" alt="CSS" />
          <img src="https://i.postimg.cc/dQ9vWK0L/typescript-icon-icon-2048x2048-2rhh1z66.png" alt="TypeScript" />
          <img src="https://i.postimg.cc/5yMVkCr7/JS.jpg" alt="JavaScript" />
          <img src="https://i.postimg.cc/L62StjLh/react.jpg" alt="React" />
        </div>

        <div className="hero-image" data-aos="fade">
          <div 
            className="profile-picture"
            onMouseEnter={() => setShowProfileGif(true)}
            onMouseLeave={() => setShowProfileGif(false)}
          >
            <img 
              src="/1.jpg" 
              alt="Sasha Profile" 
              className="profile-image"
            />
          </div>
        </div>

        {showGreetingGif && (
          <div className="hero-gif greeting-gif">
            <img src="https://i.gifer.com/Ao.gif" alt="Greeting GIF" />
          </div>
        )}

        {showProfileGif && (
          <div className="hero-gif profile-gif">
            <img src="https://i.gifer.com/Idaz.gif" alt="Profile GIF" />
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={handleScrollToPortfolio}>
        <div className="scroll-arrow"></div>
        <span>Skip My Story 🥺</span>
      </div>
    </div>
  );
}

export default HeroSection;