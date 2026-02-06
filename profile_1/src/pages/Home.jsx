import { useState, useEffect } from 'react';
import '../App.css';
// import img1 from '../assets/h.png';
import img1 from '../assets/ha.png';
import {
    FaQuoteLeft
} from 'react-icons/fa';
import {
    FiGrid
} from 'react-icons/fi';

function Home() {
    const [heroTextIndex, setHeroTextIndex] = useState(0);

    const heroTexts = ['Software Engineer', 'Web Developer'];

    useEffect(() => {
        const interval = setInterval(() => {
            setHeroTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <span className="greeting">HELLO</span>
                            <h1>
                                <span className="intro">i'm Nahid Hasan a</span>
                                <span className="role">
                                    <span className="highlight">Web</span> Developer
                                </span>
                            </h1>
                            <p className="description">
                                I am a passionate React.js base Web developer with hands-on experience in building dynamic, responsive, and user-friendly web applications using modern JavaScript and React. I enjoy transforming complex problems into simple, elegant solutions and continuously strive to improve my skills through learning and real-world projects.              </p>
                            <button className="cta-button">Hire Me</button>
                        </div>
                        <div className="hero-image">
                            <div className="image-container">
                                <div className="hero-placeholder">
                                    <div className="hero-bg-text">
                                        <span className={`text-slide text-1 ${heroTextIndex === 0 ? 'active' : ''}`}>
                                            {heroTexts[0]}
                                        </span>
                                        <span className={`text-slide text-2 ${heroTextIndex === 1 ? 'active' : ''}`}>
                                            {heroTexts[1]}
                                        </span>
                                    </div>
                                    <img src={img1} alt="Nahid Hasan" className="hero-person" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-content">
                        <div className="stats-left">
                            <div className="years-badge">
                                <span className="years-number">2+</span>
                                <span className="years-text">Years Of Experience</span>
                            </div>
                            <p className="stats-description">
                                I specialize in creating dynamic and scalable web applications using React and modern JavaScript technologies.
                                I have worked on a variety of projects, including web applications, mobile applications, and desktop applications.              </p>
                        </div>
                        <div className="stats-right">
                            <div className="stat-card">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Our Project Complete</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">1</div>
                                <div className="stat-label">World Bank Projects</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">4+</div>
                                <div className="stat-label">Clients Reviews</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">All</div>
                                <div className="stat-label">Trusted by clients from all sectors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            {/* Latest Service Section */}
            <section className="latest-project-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">LATEST SERVICE</span>
                        <h2 className="section-title">Inspiring the Future with Every Project</h2>
                        <p className="section-description">
                            Front-End Web Development (React.js, JavaScript, Tailwind CSS, HTML, CSS)

                            <p>Data Visualization & Reporting (Power BI, Excel,Python)</p>

                            <p>Managing relational databases with MySQL, using Git & GitHub for version control, and applying ERP system knowledge.</p>
                        </p>
                    </div>
                    <div className="project-content">
                        <div className="project-list">
                            <div className="project-item project-item-first">
                                <span className="project-number">01</span>
                                <div>
                                    <h3>A Portfolio of Creativity</h3>
                                    <p>Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency.</p>
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
                                <img src={img1} alt="Project" className="project-person" />
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

            {/* Resume Section */}
            <section className="resume-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">MY RESUME</span>
                        <h2 className="section-title">Empowering Creativity through</h2>
                    </div>
                    <div className="resume-content">
                        <div className="resume-left">
                            <div className="resume-subsection">
                                <h3 className="resume-subtitle">Education</h3>
                                <div className="resume-grid">
                                    <div className="resume-card">
                                        <h4>Bachelor of Science</h4>
                                        <p className="resume-company">Daffodil International University</p>
                                        <p className="resume-date">2017-2021</p>
                                        <p className="resume-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="resume-card">
                                        <h4>Higher Secondary School Certificate</h4>
                                        <p className="resume-company">Sristy College of Tangail</p>
                                        <p className="resume-date">2015-2016</p>
                                        <p className="resume-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="resume-card">
                                        <h4>Secondary School Certificate</h4>
                                        <p className="resume-company">Bindubasini Government Boys' High School</p>
                                        <p className="resume-date">2012-2014</p>
                                        <p className="resume-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="resume-subsection">
                                <h3 className="resume-subtitle">Experiences</h3>
                                <div className="resume-grid">
                                    <div className="resume-card">
                                        <h4>Software Engineer</h4>
                                        <p className="resume-company">Dekko ISHO Group</p>
                                        <p className="resume-date">Dec 2025 - Present</p>
                                        <p className="resume-description">I am working as a Software Engineer at Dekko ISHO Group. I build responsive and high-performance web applications using React.js, PrimeReact, Tailwind CSS, HTML5, CSS3, and JavaScript. I contribute to an EBS 365 software–based ERP project, assisting in system implementation, data management, and enhancing enterprise-wide reporting and operational efficiency.</p>
                                    </div>
                                    <div className="resume-card">
                                        <h4>Software Engineer</h4>
                                        <p className="resume-company">King Digital Recharge Ltd</p>
                                        <p className="resume-date">Feb 2022 - Nov 2025</p>
                                        <p className="resume-description">I worked as a Software Engineer at King Digital Recharge Ltd. I developed responsive and high-performance web applications using React.js, Redux, PrimeReact, Tailwind CSS, HTML5, CSS3, and JavaScript. I delivered multiple projects, including enterprise-grade applications for King Digital Recharge Ltd, a digital platform for Biz360 Expo, and an Online Tenderer Database System. Additionally, I contributed to a World Bank–funded BMD project, modernizing weather data visualization.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="company-logos">
                        <div className="logo-item">Linear</div>
                        <div className="logo-item">Framer</div>
                        <div className="logo-item">Notion</div>
                        <div className="logo-item">Slack</div>
                        <div className="logo-item">Medium</div>
                        <div className="logo-item">Upwork</div>
                        <div className="logo-item">Amazon</div>
                        <div className="logo-item">Asana</div>
                    </div> */}
                </div>
            </section>

            {/* <section className="portfolio-section" id="certifications">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">CERTIFICATIONS</span>
                        <h2 className="section-title">Certificate of Achievement: Empowering Creativity</h2>
                    </div>
                    <div className="portfolio-grid">
                        <div className="portfolio-item">
                            <img src={img1} alt="Digital Transformation Advisors" className="portfolio-image-placeholder" />
                            <div className="portfolio-info">
                                <h4>Digital Transformation Advisors</h4>
                                <p>Web Design</p>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <img src={img1} alt="Personal Portfolio" className="portfolio-image-placeholder" />
                            <div className="portfolio-info">
                                <h4>Personal Portfolio</h4>
                                <p>UI/UX Design</p>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <img src={img1} alt="Website for a Model" className="portfolio-image-placeholder" />
                            <div className="portfolio-info">
                                <h4>Website for a Model</h4>
                                <p>Branding</p>
                            </div>
                        </div>
                        <div className="portfolio-item">
                            <img src={img1} alt="E-commerce Platform" className="portfolio-image-placeholder" />
                            <div className="portfolio-info">
                                <h4>E-commerce Platform</h4>
                                <p>Web Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Services Detail Section */}
            <section className="services-detail-section" id="service">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">MY SERVICES</span>
                        <h2 className="section-title">Elevated Designs Personalized the best Experiences</h2>
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
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-quote">
                                <FaQuoteLeft />
                            </div>
                            <p className="testimonial-text">
                                Working With Themespark Was An Absolute Pleasure! They Understood My Vision Immediately And Brought It To Life Even Better Than I'd Imagined.
                            </p>
                            <div className="testimonial-author">
                                <img src={img1} alt="Andrew Baker" className="testimonial-avatar" />
                                <div>
                                    <h4>Andrew Baker</h4>
                                    <p>CEO Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-quote">
                                <FaQuoteLeft />
                            </div>
                            <p className="testimonial-text">
                                Working With Themespark Was An Absolute Pleasure! They Understood My Vision Immediately And Brought It To Life Even Better Than I'd Imagined.
                            </p>
                            <div className="testimonial-author">
                                <img src={img1} alt="Sarah Johnson" className="testimonial-avatar" />
                                <div>
                                    <h4>Sarah Johnson</h4>
                                    <p>Creative Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Contact Section */}
            <section className="contact-section" id="contact">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <span className="section-label">GET IN TOUCH</span>
                            <h2 className="section-title">Elevate your brand with Me</h2>
                            <p className="contact-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="contact-form-wrapper">
                            <form className="contact-form">
                                <input type="text" placeholder="Your Name" />
                                <input type="tel" placeholder="Phone No" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Your Message" rows="5"></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}

export default Home;
