import React from 'react'
import './projects.css';

const Projects = () => {
  return (
   <div className="home-project" id="project">
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
      </div>
  )
}

export default Projects