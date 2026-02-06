import '../App.css';
import cse from '../assets/cse.jpg';

function Certifications() {
  return (
    <>
      {/* Certifications Section */}
      <section className="portfolio-section" id="certifications">
        <div className="container">
          <div className="section-header">
            <span className="section-label">CERTIFICATIONS</span>
            <h2 className="section-title">Certificate of Achievement: Empowering Creativity</h2>
            <p className="section-description">
              These certifications represent my commitment to continuous learning and professional development in web development and related technologies.
            </p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src={cse} alt="Digital Transformation Advisors" className="portfolio-image-placeholder" />
              <div className="portfolio-info">
                <h4>Digital Transformation Advisors</h4>
                <p>Web Design</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={cse} alt="Personal Portfolio" className="portfolio-image-placeholder" />
              <div className="portfolio-info">
                <h4>Personal Portfolio</h4>
                <p>UI/UX Design</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={cse} alt="Website for a Model" className="portfolio-image-placeholder" />
              <div className="portfolio-info">
                <h4>Website for a Model</h4>
                <p>Branding</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={cse} alt="E-commerce Platform" className="portfolio-image-placeholder" />
              <div className="portfolio-info">
                <h4>E-commerce Platform</h4>
                <p>Web Development</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={cse} alt="React.js Certification" className="portfolio-image-placeholder" />
              <div className="portfolio-info">
                <h4>React.js Certification</h4>
                <p>Frontend Development</p>
              </div>
            </div>
            <div className="portfolio-item">
              <img src={cse} alt="JavaScript Mastery" className="portfolio-image-placeholder" />
              <div className="portfolio-info">
                <h4>JavaScript Mastery</h4>
                <p>Programming</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certifications;
