import '../App.css';
import bmd from '../assets/bmd.PNG';
import kdrl from '../assets/kdrl.PNG';
import ebs from '../assets/ebs.png';
import otds from '../assets/otds.PNG';
import realestate from '../assets/real.PNG';
import videoStreaming from '../assets/online.jpg';
import biz360expo from '../assets/expo.PNG';
import hedOtds from '../assets/hots.png';

function Project() {
  return (
    <>
      {/* Projects Section */}
      <section className="project-section" id="projects-section">
        <div className="container">
          <div className="project-section-header">
            <h1 className="project-big-title">Projects</h1>
            <h2 className="project-section-title">Our Projects</h2>
            <p className="project-section-description">
              Successfully contributed to several impactful web applications, including a real-time weather
              data visualization platform for the Bangladesh Meteorological Department (World Bank-funded), a
              digital recharge system at King Digital Recharge Ltd, and the Biz360 Expo event management
              portal. Developed and maintained secure platforms such as the Online Tenderer Database System
              (OTDS) for public procurement and its customized version for the Health Education Department.
              Additional projects include a real estate listing platform and a video streaming system for live
              TV and digital content delivery — all focused on usability, performance, and scalable
              architecture. Currently working at DEKKO ISHO Group on ERP system EBS 365
              , building and enhancing enterprise-level modules to improve business processes and data-driven
              operations.
            </p>
          </div>
          <div className="project-grid">
            <div className="project-item-large">
              <div className="project-image-container" style={{ backgroundImage: `url(${kdrl})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://kingdigital.com.bd/" target="_blank" rel="noopener noreferrer">KDRL</a>
                  </h3>
                  <span className="project-description">At King Digital Recharge Ltd., I developed responsive React.js web apps and optimized
                    system performance.
                    Contributed to tech-driven solutions across data systems, connectivity, and digital
                    services.</span>
                </div>
              </div>
            </div>
            <div className="project-item-wide">
              <div className="project-image-container" style={{ backgroundImage: `url(${bmd})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="http://ais.bmd.gov.bd:48080" target="_blank" rel="noopener noreferrer">Bangladesh Meteorological Department</a>
                  </h3>
                  <span>Developed a real-time weather data visualization platform under a World Bank-funded
                    project to support disaster management and climate monitoring through accurate,
                    accessible meteorological data.</span>
                </div>
              </div>
            </div>
            <div className="project-item-wide">
              <div className="project-image-container" style={{ backgroundImage: `url(${ebs})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://mt.ebs365.com/#/login" target="_blank" rel="noopener noreferrer">EBS 365</a>
                  </h3>
                  <span>Developed and maintained the ERP system (EBS 365) at DEKKO ISHO Group, managing the
                    company's entire finance, operations, and reporting workflows through a centralized,
                    efficient, and high-performance web platform.</span>
                </div>
              </div>
            </div>
            <div className="project-item-large">
              <div className="project-image-container" style={{ backgroundImage: `url(${otds})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/Nahid1970-hasan/OTDS" target="_blank" rel="noopener noreferrer">Online Tenderer Database System</a>
                  </h3>
                  <span>Developed a secure platform to manage tenderer registration and evaluation for public
                    sector procurement, improving transparency and efficiency.</span>
                </div>
              </div>
            </div>
            <div className="project-item-large">
              <div className="project-image-container" style={{ backgroundImage: `url(${realestate})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/Nahid1970-hasan/real-state" target="_blank" rel="noopener noreferrer">RealEstate Web</a>
                  </h3>
                  <span>Designed and implemented a property listing and management platform with
                    dynamic filtering, location-based search, and admin tools.</span>
                </div>
              </div>
            </div>
            <div className="project-item-wide">
              <div className="project-image-container" style={{ backgroundImage: `url(${videoStreaming})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/Nahid1970-hasan/video-streaming" target="_blank" rel="noopener noreferrer">Video Streaming Management System (Client)</a>
                  </h3>
                  <span>Created a seamless web-based video streaming system for live TV and content
                    delivery with efficient media handling and responsive design.</span>
                </div>
              </div>
            </div>
            <div className="project-item-wide">
              <div className="project-image-container" style={{ backgroundImage: `url(${biz360expo})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://biz360expo.com/" target="_blank" rel="noopener noreferrer">Biz-360 Expo</a>
                  </h3>
                  <span>Built a responsive event and exhibition management portal showcasing businesses and
                    their services, featuring interactive components and real-time updates.</span>
                </div>
              </div>
            </div>
            <div className="project-item-large">
              <div className="project-image-container" style={{ backgroundImage: `url(${hedOtds})` }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3>
                    <a href="https://github.com/Nahid1970-hasan/hed_otds" target="_blank" rel="noopener noreferrer">Online Tenderer Database System – Health Education Department</a>
                  </h3>
                  <span>Customized version of OTDS for the Health Education Department, tailored to their specific procurement needs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
