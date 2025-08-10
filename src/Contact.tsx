import './Contact.css';

function Contact() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div id="contact-section">
      <div className="contact-wrapper" data-aos="fade-up">
        <h1 className="contact-heading">Contact Me</h1>
        <div className="contact-list">

          {/* Email */}
          <div
            className="contact-item"
            onClick={() => handleCopy('sashashreiderbr@gmail.com')}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
            </svg>
            <span className="contact-text">sashashreiderbr@gmail.com</span>
          </div>

          {/* Phone */}
          <div
            className="contact-item"
            onClick={() => handleCopy('+55 (11) 96965-2319')}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.5-6.5l2.2-2.2c.2-.3.3-.7.2-1-.3-1.2-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.9 0 7 3.1 7 7z"/>
            </svg>
            <span className="contact-text">+55 (11) 96965-2319</span>
          </div>

          {/* Download CV */}
          <div
            className="contact-item download-cv"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="/Aleksandra Shreider CV 08:2025.pdf"
              download="Aleksandra-Shreider-CV.pdf"
              className="contact-link"
            >
              <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                <path d="M12 18l-4-4h3V8h2v6h3l-4 4z"/>
              </svg>
              <span className="contact-text">Download CV</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;

