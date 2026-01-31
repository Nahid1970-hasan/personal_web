import '../App.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

function Contact() {
  return (
    <>
      {/* Contact Information Cards Section */}
      <section className="contact-info-cards-section">
        <div className="container">
          <div className="contact-info-cards-grid">
            {/* Address Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-info-title">Address</h3>
              <p className="contact-info-text">
                Savar, Dhaka,<br />
                Bangladesh
              </p>
            </div>

            {/* E-Mail Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <h3 className="contact-info-title">E-Mail</h3>
              <p className="contact-info-text">
                19nh70@gmail.com<br />
                nahidcse1970@gmail.com
              </p>
            </div>

            {/* Call Me Card */}
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <h3 className="contact-info-title">Call Me</h3>
              <p className="contact-info-text">
                +8801515234341<br />
                +8801321081989
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-content">
            {/* Left: Text Content */}
            <div className="contact-form-info">
              <span className="section-label">GET IN TOUCH</span>
              <h2 className="section-title">Elevate your brand with Me</h2>
              <p className="contact-form-description">
                ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted
              </p>
            </div>

            {/* Right: Form Fields */}
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="contact-form-row">
                  <input type="text" placeholder="Your Name" />
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="contact-form-row">
                  <input type="email" placeholder="Your Email" />
                  <input type="text" placeholder="Subject" />
                </div>
                <textarea placeholder="Your Message" rows="5"></textarea>
                <button type="submit" className="contact-submit-btn">
                  Appointment Now <BsArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
