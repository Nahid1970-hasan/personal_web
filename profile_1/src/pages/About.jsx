import { Link } from 'react-router-dom';
import '../App.css';
import img1 from '../assets/img_1.png';
import {
    FaCheck
} from 'react-icons/fa';
import {
    HiLightBulb,
    HiPencil
} from 'react-icons/hi';
import {
    FiGrid
} from 'react-icons/fi';
import {
    BsArrowRight
} from 'react-icons/bs';

function About() {
    return (
        <>
            {/* About Hero Section */}
            <section className="about-hero-section">
                <div className="container">
                    <h1 className="about-title">About</h1>
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> <span className="breadcrumb-separator">&gt;</span> <span className="breadcrumb-current">About</span>
                    </div>
                </div>
            </section>

            {/* Service Cards Section */}
            {/* <section className="about-services-section">
        <div className="container">
          <div className="about-services-grid">
            <div className="about-service-card">
              <div className="about-service-icon">
                <HiPencil />
              </div>
              <h3>Web Design</h3>
              <p>120+ Projects</p>
            </div>
            <div className="about-service-card">
              <div className="about-service-icon">
                <FiGrid />
              </div>
              <h3>UI/UX Design</h3>
              <p>250+ Projects</p>
            </div>
            <div className="about-service-card">
              <div className="about-service-icon">
                <HiLightBulb />
              </div>
              <h3>Web Research</h3>
              <p>395+ Projects</p>
            </div>
            <div className="about-service-card">
              <div className="about-service-icon">
                <HiLightBulb />
              </div>
              <h3>Marketing</h3>
              <p>395+ Projects</p>
            </div>
          </div>
        </div>
      </section> */}

            {/* Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <div className="skills-grid">
                        <div className="skills-column">
                            <h3 className="skills-title">Development Skill</h3>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>HTML</span>
                                    <span>95%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>CSS</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>JavaScript</span>
                                    <span>85%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>React.js</span>
                                    <span>80%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>Tailwind CSS</span>
                                    <span>70%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>Next.js</span>
                                    <span>60%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skills-column">
                            <h3 className="skills-title">Others Skills</h3>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>MySQL</span>
                                    <span>60%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>Python</span>
                                    <span>70%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>Power BI</span>
                                    <span>80%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>Git & Github</span>
                                    <span>60%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>TypeScript</span>
                                    <span>60%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <span>ERP Knowledge</span>
                                    <span>60%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience/Stats Section */}
            <section className="about-stats-section">
                <div className="container">
                    <div className="about-stats-content">
                        <div className="about-stats-left">
                            <div className="about-years-badge">
                                <span className="about-years-number">2+</span>
                                <span className="about-years-text">Years Of Experience</span>
                            </div>
                            <p className="about-stats-description">
                            I specialize in creating dynamic and scalable web applications using React and modern JavaScript technologies.
                            I have 2+ years of experience in software development and problem-solving.
                            I have worked on a variety of projects, including web applications, mobile applications, and desktop applications.
                            </p>
                        </div>
                        <div className="about-stats-right">
                            <div className="about-stat-card">
                                <div className="about-stat-number">5+</div>
                                <div className="about-stat-label">Our Project Complete</div>
                            </div>
                            <div className="about-stat-card">
                                <div className="about-stat-number">1</div>
                                <div className="about-stat-label">World Bank Projects</div>
                            </div>
                            <div className="about-stat-card">
                                <div className="about-stat-number">4+</div>
                                <div className="about-stat-label">Clients Reviews</div>
                            </div>
                            <div className="about-stat-card">
                                <div className="about-stat-number">All</div>
                                <div className="about-stat-label">Trusted by clients from all sectors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education/Experiences Section */}
            <section className="about-education-section">
                <div className="container">
                    <div className="about-education-content">
                        <div className="about-education-left">
                            <h3 className="about-education-title">Education</h3>
                            <div className="about-education-list">
                                <div className="about-education-item">
                                    <h4>BSc in CSE</h4>
                                    <p className="about-education-date">2017-2021</p>
                                    <p className="about-education-description">
                                        I successfully completed my Bachelor's degree in Computer Science and Engineering from Daffodil International University, gaining a strong foundation in software development and problem-solving.                  </p>
                                </div>
                                <div className="about-education-item">
                                    <h4>HSC</h4>
                                    <p className="about-education-date">2015-2016</p>
                                    <p className="about-education-description">
                                        Completed my Higher Secondary School Certificate (HSC) from Sristy College of Tangail in the Science department in my hometown.                  </p>
                                </div>
                                <div className="about-education-item">
                                    <h4>SSC</h4>
                                    <p className="about-education-date">2015-2016</p>
                                    <p className="about-education-description">
                                        Completed my Secondary School Certificate (SSC) from Bindubasini Government Boys' High School in the Science department in my hometown.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="about-education-right">
                            <h3 className="about-education-title">Experiences</h3>
                            <div className="about-education-list">
                                <div className="about-education-item">
                                    <h4>Software Engineer</h4>
                                    <p className="about-education-date">Dec 2025 - Present</p>
                                    <p className="about-education-description">
                                    I am working as a Software Engineer at Dekko ISHO Group. I build responsive and high-performance web applications using React.js, PrimeReact, Tailwind CSS, HTML5, CSS3, and JavaScript. I contribute to an EBS 365 software–based ERP project, assisting in system implementation, data management, and enhancing enterprise-wide reporting and operational efficiency.
                                    </p>
                                </div>
                                <div className="about-education-item">
                                    <h4>Software Engineer</h4>
                                    <p className="about-education-date">Feb 2022 - Nov 2025</p>
                                    <p className="about-education-description">
                                    I worked as a Software Engineer at King Digital Recharge Ltd. I developed responsive and high-performance web applications using React.js, Redux, PrimeReact, Tailwind CSS, HTML5, CSS3, and JavaScript. I delivered multiple projects, including enterprise-grade applications for King Digital Recharge Ltd, a digital platform for Biz360 Expo, and an Online Tenderer Database System. Additionally, I contributed to a World Bank–funded BMD project, modernizing weather data visualization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Service/Price Plan Section */}
            {/* <section className="about-price-plan-section">
                <div className="container">
                    <div className="about-price-plan-content">
                        <div className="about-price-plan-image">
                            <div className="about-price-plan-wrapper">
                                <div className="about-price-black-circle"></div>
                                <img src={img1} alt="Service" className="about-price-person" />
                                <div className="about-price-pink-shapes">
                                    <div className="about-price-pink-square"></div>
                                    <div className="about-price-pink-triangle"></div>
                                    <div className="about-price-pink-quarter"></div>
                                    <div className="about-price-pink-circle-5"></div>
                                </div>
                            </div>
                        </div>
                        <div className="about-price-plan-text">
                            <span className="section-label">MY PRICE PLAN</span>
                            <h2 className="section-title">Enhancing Collaboration between Remote</h2>
                            <div className="about-price-service-list">
                                <div className="about-price-service-item about-price-service-first">
                                    <span className="about-price-service-number">01</span>
                                    <div>
                                        <h3>A Portal of Creativity</h3>
                                        <p>Business consulting consultants provide expert advice and guidance to businesses to help them improve their performance.</p>
                                    </div>
                                </div>
                                <div className="about-price-service-item about-price-service-middle">
                                    <span className="about-price-service-number">02</span>
                                    <div>
                                        <h3>My Portfolio of Innovation</h3>
                                        <p>My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses.</p>
                                    </div>
                                </div>
                                <div className="about-price-service-item about-price-service-last">
                                    <span className="about-price-service-number">03</span>
                                    <div>
                                        <h3>A Showcase of My Projects</h3>
                                        <p>In this portfolio, you'll find a curated selection of projects that highlight my skills in responsive web design.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

     

            {/* Contact Section */}
            <section className="about-contact-section" id="contact">
                <div className="container">
                    <div className="about-contact-content">
                        <div className="about-contact-info">
                            <span className="section-label">GET IN TOUCH</span>
                            <p className="about-contact-description">
                            As a front-end developer, I provide expert solutions to help organizations build efficient, responsive, and high-performance web applications, improving user experience, interface design, and overall digital performance.
                            </p>
                        </div>
                        <div className="about-contact-form-wrapper">
                            <form className="about-contact-form">
                                <div className="about-form-row">
                                    <div className="about-form-col">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="email" placeholder="Your Email" />
                                        <textarea placeholder="Your Message" rows="5"></textarea>
                                    </div>
                                    <div className="about-form-col">
                                        <input type="tel" placeholder="Phone number" />
                                        <input type="text" placeholder="Subject" />
                                    </div>
                                </div>
                                <button type="submit" className="about-submit-btn">
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

export default About;
