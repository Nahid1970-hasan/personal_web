import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import { 
  FaTwitter, 
  FaInstagram, 
  FaDribbble, 
  FaFacebook,
  FaLinkedin,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGift,
  FaGit
} from 'react-icons/fa';
import { 
  HiMail
} from 'react-icons/hi';
import { 
  BsArrowRight
} from 'react-icons/bs';

function Layout({ children }) {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const certificationsSection = document.getElementById('certifications');
      if (certificationsSection) {
        certificationsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home page, let the Link handle navigation normally
  };

  const handleServiceClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const serviceSection = document.getElementById('service');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home page, let the Link handle navigation normally
  };

  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home page, let the Link handle navigation normally
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">NH</span>
            <span className="logo-text">Nahid Hasan</span>
          </div>
          <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link 
              to="/service" 
              className={location.pathname === '/service' ? 'active' : ''}
              onClick={handleServiceClick}
            >
              Service
            </Link>
            <Link to="/project" className={location.pathname === '/project' ? 'active' : ''}>Projects</Link>
            <Link 
              to="/certifications" 
              className={location.pathname === '/certifications' ? 'active' : ''}
              onClick={handleBlogClick}
            >
              Certifications
            </Link>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={handleContactClick}
            >
              Contact
            </Link>
          </nav>
          <div className="header-actions">
            <div className="social-icons">
              <a href="#"><FaTwitter /></a>
              {/* <a href="#"><FaInstagram /></a> */}
              <a href="https://github.com/Nahid1970-hasan"><FaGit /></a>
              <a href="#"><FaFacebook/></a>
              <a href="https://www.linkedin.com/in/nahidh70/"><FaLinkedin/></a>
            </div>
            <button className="pink-button"> <a href="https://drive.google.com/file/d/1iemZnDwbZ1WxKpWeLQNnl3oOWH3OguQH/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download CV</a></button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="logo">
                <span className="logo-icon">NH</span>
                <span className="logo-text">Nahid Hasan</span>
              </div>
              <p className="tagline">Get Ready To Create Great</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button className="newsletter-btn">
                  <BsArrowRight />
                </button>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Link</h4>
                <Link to="/about">About Us</Link>
                <a href="#service">Service</a>
                <a href="#portfolio">Projects</a>
                {/* <a href="#blog">Blog Post</a> */}
              </div>
              <div className="footer-column">
                <h4>Contact</h4>
                <p><FaEnvelope /> 19nh70@gmail.com</p>
                <p><FaMapMarkerAlt /> Savar, Dhaka, Bangladesh</p>
                <p><FaPhone /> +8801515234341</p>
                <div className="footer-social">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaDribbble /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Nahid Hasan. All rights reserved.</p>
            <div className="footer-links-bottom">
              <a href="#">Terms & Condition</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
}

export default Layout;
