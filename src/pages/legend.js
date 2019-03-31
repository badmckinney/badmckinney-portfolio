import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import portrait from "../images/legend.jpg"

const Legend = () => (
  <Layout>
    <SEO title="The Legend" />
    <div className="legend">
      <h1>Brad McKinney</h1>
      <hr className="yellow"></hr>
      <div className="legend__body">
        <img src={portrait} alt="tan dude with a big smile" />
        <p>I know. It seems pretentious to refer to myself as a legend, but that is what graduates from DevLeague, a local coding bootcamp, are called. A quick introduction to me: I was born and raised on Oahu, Hawaii where I currently reside. I am a software engineer with a background in graphic arts and digital design and am currently looking a great team or company to join. Outside of work, I have an incredible wife and our first baby on the way. When I'm not slinging code, I enjoy surfing, skating, and exploring the world. Although, I've been doing a lot more coding than anything else lately.</p>
      </div>
    </div>
    <div className="education">
      <h2>Education</h2>
      <hr className="yellow"></hr>
      <div className="education__item first">
        <h3 className="education__title">Full Stack JavaScript Web Engineering</h3>
        <h4 className="education__institution">DevLeague – Technical Bootcamp</h4>
        <p>Completed 800+ hours of immersive technical training where I gained hands-on experience with both front-end and back-end web technologies such as HTML, CSS, JavaScript, Node.js, Docker, React, AWS, Angular, PostgreSQL, Git, and more.</p>
      </div>
      <div className="education__item">
        <h3 className="education__title">Communication Arts</h3>
        <h4 className="education__institution">Honolulu Community College</h4>
        <p>Studied foundations and core concepts of visual design and digital art.</p>
      </div>
    </div>
    <div className="skills">
      <h2>Skills</h2>
      <hr className="yellow"></hr>
      <div className="icons">
        <div className="icon"><i className="fab fa-js-square" style={{ color: '#fbde00', backgroundColor: '#000', lineHeight: '29px', borderRadius: '3px' }}></i></div>
        <div className="icon"><i className="fab fa-react" style={{ color: '#0df' }}></i></div>
        <div className="icon"><i className="fab fa-node-js" style={{ color: '#53a25c' }}></i></div>
        <div className="icon"><i className="fab fa-aws" style={{ color: '#ff8f00' }}></i></div>
        <div className="icon"><i className="fab fa-docker" style={{ color: '#1071B4' }}></i></div>
        <div className="icon"><i className="fab fa-github" style={{ color: '#000' }}></i></div>
        <div className="icon"><i className="fab fa-angular" style={{ color: '#DB0B37' }}></i></div>
        <div className="icon"><i className="fab fa-python" style={{ color: '#FED451' }}></i></div>
        <div className="icon"><i className="fab fa-sass" style={{ color: '#de5b9c' }}></i></div>
        <div className="icon"><i className="fas fa-database" style={{ color: '#3174B5' }}></i></div>
      </div>
      <div className="skills__list">
        <div className="skill">&bull; JavaScript</div>
        <div className="skill">&bull; React.js</div>
        <div className="skill">&bull; Docker</div>
        <div className="skill">&bull; AWS</div>
        <div className="skill">&bull; Node.js</div>
        <div className="skill">&bull; Redux</div>
        <div className="skill">&bull; HTML5</div>
        <div className="skill">&bull; CSS3</div>
        <div className="skill">&bull; Python</div>
        <div className="skill">&bull; PostgreSQL</div>
        <div className="skill">&bull; Databases</div>
        <div className="skill">&bull; ORM</div>
        <div className="skill">&bull; Angular</div>
        <div className="skill">&bull; UI/UX</div>
        <div className="skill">&bull; Git</div>
        <div className="skill">&bull; Agile Development</div>
        <div className="skill">&bull; OOP</div>
        <div className="skill">&bull; Rest API's</div>
        <div className="skill">&bull; MVC</div>
        <div className="skill">&bull; Testing</div>
      </div>
      <div className="learning"> Currently learning: React Native, Gatsbyjs, Python</div>
    </div>
    <hr></hr>
    <div className="contact">
      <h3>Interested in working together?</h3>
      <a href="mailto:brad@badmckinney.dev" id="contact-button"><div>Email me</div></a>
    </div>
    <hr></hr>
  </Layout >
)

export default Legend
