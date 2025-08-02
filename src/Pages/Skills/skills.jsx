import React from 'react'
import './skills.css';


const skills = [
  {
    name: 'HTML5',
    icon: 'fa-html5',
    color: '#f16529',
    level: '90%',
  },
  {
    name: 'CSS3',
    icon: 'fa-css3-alt',
    color: '#2965f1',
    level: '85%',
  },
  {
    name: 'JavaScript',
    icon: 'fa-js-square',
    color: '#f0db4f',
    level: '80%',
  },
  {
    name: 'React',
    icon: 'fa-react',
    color: '#61DBFB',
    level: '80%',
  },
  {
    name: 'Node.js',
    icon: 'fa-node-js',
    color: '#3C873A',
    level: '78%',
  },
  {
    name: 'Express.js',
    img: '/img/icons8-server-64.png', // Assuming you have an Express.js icon
    color: '#28a745',
    level: '75%',
  },
  {
    name: 'MongoDB',
    img: '/img/icons8-database-50.png',
    color: '#4DB33D',
    level: '77%',
  },
  {
    name: 'Figma',
    icon: 'fa-figma',
    color: '#a259ff',
    level: '70%',
  },
  {
    name: 'Git',
    icon: 'fa-git-alt',
    color: '#f77b00',
    level: '70%',
  },
  {
    name: 'Next.js',
    img: '/img/icons8-nextjs-48.png',
    color: '#000',
    level: '70%',
  },
  {
    name: 'TypeScript',
    img: '/img/icons8-typescript-48.png',
    color: '#0088f7',
    level: '70%',
  },
  {
    name: 'GitHub',
    img: '/img/icons8-github-50.png',
    color: '#000',
    level: '70%',
  },
];

const Skills = () => {
  return (
      <div className="home-skills" id="services">
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
      </div>
  )
}

export default Skills