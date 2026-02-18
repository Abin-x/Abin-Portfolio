import About from '../About/about';
import Skills from '../Skills/skills';
import Projects from '../Projects/projects';
import Service from '../Service/service';
import Contact from '../Contact/contact';
import ContactTest from '../ContactTest/contactTest';
import './home.css';

// const skills = [
//   {
//     name: 'HTML5',
//     icon: 'fa-html5',
//     color: '#f16529',
//     level: '90%',
//   },
//   {
//     name: 'CSS3',
//     icon: 'fa-css3-alt',
//     color: '#2965f1',
//     level: '85%',
//   },
//   {
//     name: 'JavaScript',
//     icon: 'fa-js-square',
//     color: '#f0db4f',
//     level: '80%',
//   },
//   {
//     name: 'React',
//     icon: 'fa-react',
//     color: '#61DBFB',
//     level: '80%',
//   },
//   {
//     name: 'Node.js',
//     icon: 'fa-node-js',
//     color: '#3C873A',
//     level: '78%',
//   },
//   {
//     name: 'Express.js',
//     img: '/img/icons8-server-64.png', // Assuming you have an Express.js icon
//     color: '#28a745',
//     level: '75%',
//   },
//   {
//     name: 'MongoDB',
//     img: '/img/icons8-database-50.png',
//     color: '#4DB33D',
//     level: '77%',
//   },
//   {
//     name: 'Figma',
//     icon: 'fa-figma',
//     color: '#a259ff',
//     level: '70%',
//   },
//   {
//     name: 'Git',
//     icon: 'fa-git-alt',
//     color: '#f77b00',
//     level: '70%',
//   },
//   {
//     name: 'Next.js',
//     img: '/img/icons8-nextjs-48.png',
//     color: '#000',
//     level: '70%',
//   },
//   {
//     name: 'TypeScript',
//     img: '/img/icons8-typescript-48.png',
//     color: '#0088f7',
//     level: '70%',
//   },
//   {
//     name: 'GitHub',
//     img: '/img/icons8-github-50.png',
//     color: '#000',
//     level: '70%',
//   },
// ];

const Home = () => {
  return (
    <>
      <div className="home-container" id="home">
        <div className="home-banner">
          <div className="banner-text">
            <h1>
              Hi, I'm <span>Abin Y</span>
            </h1>
            <p className="domain">Full Stack Developer</p>
            <p className="bio">
              Hi, I'm Abin Y, a MERN Stack Full Stack Developer with a passion
              for building modern, responsive web applications. I specialize in
              MongoDB, Express.js, React, and Node.js.
            </p>
            <div className="home-btn">
              <button className="contact-btn">
                <a href="#contact">Hire Me</a>
              </button>
              <button className="download-btn">
                <a href="/img/Abin_Y_Resume.pdf" download>
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="profile-img">
            <img src="/img/IMG-20250905-WA0022.jpg " alt="Abin Y" />
          </div>
        </div>
      </div>

      {/* About Section */}
      {/* <div className="home-about-me" id="about">
        <div className="home-about-card">
          <div className="home-about-img">
            <img src="/img/IMG_20250609_115924~2.jpg" alt="" />
          </div>
          <div className="home-about-banner">
            <div className="home-about-text">
              <h1>About Me</h1>
            </div>
            <p>
              With a background in engineering and a passion for technology, I
              bring a unique perspective to web development. My technical
              expertise combined with design sensibility allows me to create
              solutions that are both functional and beautiful.
              <br />
              <br />I specialize in building robust web applications using
              modern JavaScript frameworks and designing intuitive user
              interfaces that enhance user experience.
            </p>
            <br />
          </div>
        </div>
      </div> */}
      <About />

      {/* Technical Skills */}
      {/* <div className="home-skills" id="services">
        <div className="home-skills-card">
          <h1>Technical Skills</h1>
          <p className="home-skills-sub">Technologies and tools I work with</p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill.icon ? (
                  <i
                    className={`fab ${skill.icon} skill-icon`}
                    style={{ color: skill.color }}
                  ></i>
                ) : (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{ width: '30px', height: '30px' }}
                    className="skill-icon-img "
                  />
                )}
                <p>{skill.name}</p>
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: skill.level,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                  <span className="progress-percent">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <Skills />

      {/* Projects Section */}
      {/* <div className="home-project" id="project">
        <div className="home-project-card-bg">
          <h2>My Projects</h2>

          <div className="home-project-grid">
            <div className="home-project-card">
              <img
                src="/img/Screenshot 2025-07-31 000726.png"
                alt="Project 1"
              />
              <p>
                I built a fully responsive and dynamic eCommerce website that
                allows users to browse products, manage their cart, securely log
                in, and complete payments. The platform includes features like
                product listings, user authentication, order management, and an
                admin dashboard for managing inventory and users. The project is
                developed using the MERN stack and follows modern web
                development practices.
                <br />
                <br /> Technologies Used: HTML, CSS, JavaScript, React.js,
                Node.js, Express.js, MongoDB, Mongoose, Axios, JWT, Bcrypt.js,
                Stripe
              </p>
            </div>

            <div className="home-project-card">
              <h1>Fitmate (Fitness Trainer Booking)</h1>
              <img
                src="/img/Screenshot 2025-07-31 001336.png"
                alt="Project 2"
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                placeat quis error deleniti! Quaerat harum minus, molestias
                eveniet sint ipsa numquam dolorum temporibus animi eaque dicta
                corporis magnam, deleniti optio maxime iusto veritatis
                asperiores quasi natus adipisci fuga. Nobis, quo dicta? Deleniti
                molestiae similique distinctio sint voluptatibus aliquid.
                Labore, dolor?
              </p>
            </div>

            <div className="home-project-card">
              <img src="/img/IMG_20250609_115927.jpg" alt="Project 3" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                placeat quis error deleniti! Quaerat harum minus, molestias
                eveniet sint ipsa numquam dolorum temporibus animi eaque dicta
                corporis magnam, deleniti optio maxime iusto veritatis
                asperiores quasi natus adipisci fuga. Nobis, quo dicta? Deleniti
                molestiae similique distinctio sint voluptatibus aliquid.
                Labore, dolor?
              </p>
            </div>

            <div className="home-project-card">
              <img src="/img/IMG_20250609_115924~2.jpg" alt="Project 4" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                placeat quis error deleniti! Quaerat harum minus, molestias
                eveniet sint ipsa numquam dolorum temporibus animi eaque dicta
                corporis magnam, deleniti optio maxime iusto veritatis
                asperiores quasi natus adipisci fuga. Nobis, quo dicta? Deleniti
                molestiae similique distinctio sint voluptatibus aliquid.
                Labore, dolor?
              </p>
              <div className="pro-btn">
                <button>View Project</button>
                <button>View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Service />
      <Projects />
      <Contact />
      {/* <ContactTest /> */}
    </>
  );
};

export default Home;
