import '../App.css';
import img1 from '../assets/img_1.png';
import { FiGrid } from 'react-icons/fi';

function Service() {
  return (
    <>
      {/* Service Hero Section */}
      <section className="hero" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <div className="hero-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gridTemplateColumns: '1fr', textAlign: 'center' }}>
            <div className="hero-text" style={{ maxWidth: '100%', margin: '0 auto' }}>
              <span className="greeting">MY SERVICES</span>
              <h1>
                <span className="intro">Professional</span>
                <span className="role">
                  <span className="highlight">Services</span> I Offer
                </span>
              </h1>
              <p className="description">
                I provide comprehensive web development, data analysis, and business intelligence solutions to help businesses grow and succeed in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="services-detail-section" id="service">
        <div className="container">
          <div className="section-header">
            <span className="section-label">MY SERVICES</span>
            <h2 className="section-title">Elevated Designs Personalized the best Experiences</h2>
            <p className="section-description">
              I offer a wide range of services to help you achieve your business goals. From web development to data analysis, I provide solutions tailored to your needs.
            </p>
          </div>
          <div className="services-detail-grid">
            <div className="service-detail-card active">
              <div className="service-detail-icon">
                <FiGrid />
              </div>
              <h3>Web Development</h3>
              <p>Front-End Web Development (React.js, JavaScript, Tailwind CSS, HTML, CSS)</p>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">
                <FiGrid />
              </div>
              <h3>Data Analysis</h3>
              <p>Experienced in data analysis using Python and its libraries (Pandas, NumPy, Matplotlib, Seaborn) along with Excel for data cleaning, visualization, and reporting</p>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">
                <FiGrid />
              </div>
              <h3>Power BI</h3>
              <p>Creating interactive dashboards, reports to visualize data and support business decisions.</p>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">
                <FiGrid />
              </div>
              <h3>Database Management</h3>
              <p>Managing relational databases with MySQL, ensuring data integrity, performance optimization, and efficient data retrieval.</p>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">
                <FiGrid />
              </div>
              <h3>Version Control</h3>
              <p>Using Git & GitHub for version control, collaborative development, and code management best practices.</p>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">
                <FiGrid />
              </div>
              <h3>ERP Systems</h3>
              <p>Applying ERP system knowledge to streamline business processes and improve operational efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Service Section */}
      <section className="latest-project-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">LATEST SERVICE</span>
            <h2 className="section-title">Inspiring the Future with Every Project</h2>
            <p className="section-description">
              Front-End Web Development (React.js, JavaScript, Tailwind CSS, HTML, CSS)
              <br />
              Data Visualization & Reporting (Power BI, Excel, Python)
              <br />
              Managing relational databases with MySQL, using Git & GitHub for version control, and applying ERP system knowledge.
            </p>
          </div>
          <div className="project-content">
            <div className="project-list">
              <div className="project-item project-item-first">
                <span className="project-number">01</span>
                <div>
                  <h3>A Portfolio of Creativity</h3>
                  <p>Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance and efficiency.</p>
                </div>
              </div>
              <div className="project-item project-item-middle">
                <span className="project-number">02</span>
                <div>
                  <h3>My Portfolio of Innovation</h3>
                  <p>My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses.</p>
                </div>
              </div>
              <div className="project-item project-item-last">
                <span className="project-number">03</span>
                <div>
                  <h3>A Showcase of My Projects</h3>
                  <p>In this portfolio, you'll find a curated selection of projects that highlight my skills in responsive web design.</p>
                </div>
              </div>
            </div>
            <div className="project-image">
              <div className="project-image-wrapper">
                <div className="project-black-circle"></div>
                <img src={img1} alt="Service" className="project-person" />
                <div className="project-pink-circle-1"></div>
                <div className="project-pink-circle-2"></div>
                <div className="project-pink-circle-3"></div>
                <div className="project-pink-circle-4"></div>
                <div className="project-pink-circle-5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
