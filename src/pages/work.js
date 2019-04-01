import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import PageTransition from "gatsby-plugin-page-transitions"
import highlightActiveLink from "../utils/highlight"

import ketchupjs from "../images/ketchupjs.png"
import shadowgab from "../images/shadowgab.png"
import edslist from "../images/edslist.png"

class Work extends Component {

  componentDidMount() {
    highlightActiveLink('work');
  }

  render() {
    return (
      // <PageTransition
      //   transitionTime={300}
      // >
      <Layout>
        <SEO title="Work" />
        <div className="work">

          <div className="project ketchupjs">
            <div className="project__header">
              <h2 className="project__name">KetchupJS</h2>
              <div className="tech-stack">
                <div className="tech">React</div>
                <div className="tech">Redux</div>
                <div className="tech">Node.js</div>
                <div className="tech">Redis</div>
                <div className="tech">Docker</div>
                <div className="tech">AWS</div>
                <div className="tech">PostgreSQL</div>
                <div className="tech">Chart.js</div>
              </div>
            </div>
            <hr className="yellow"></hr>
            <img src={ketchupjs} alt="website in a browser window" className="screenshot" />
            <div className="project__description">
              KetchupJS is a lightweight data tracking and analytics library that I published on npm with a couple of my cohort mates. The library utilizes a data pipeline that we configured on AWS to safely record and store data. We used Lambda Functions, Simple Queue Service, RDS, EC2, and S3 bucket services from Amazon. We also built a website to function as a front end interface for users to view and analyze their data. <br></br>Check out the website at <a href="https://www.ketchupjs.dev" target="_blank" rel="noopener noreferrer" className="status__link">ketchupjs.dev</a>
            </div>
          </div>

          <div className="project shadowgab">
            <div className="project__header">
              <h2 className="project__name">Shadow Gab</h2>
              <div className="tech-stack">
                <div className="tech">Web Sockets</div>
                <div className="tech">Node.js</div>
                <div className="tech">Express</div>
                <div className="tech">MongoDB</div>
                <div className="tech">Mongoose</div>
                <div className="tech">Mocha</div>
              </div>
            </div>
            <hr className="yellow"></hr>
            <img src={shadowgab} alt="web application in a browser window" className="screenshot" style={{ width: '900px' }} />
            <div className="project__description">
              Shadow Gab is a chat application that utilizes web sockets to allow real-time communication with a chatroom feature. Shadow Gab also pulls from a geolocation API to enable location sharing. The original idea behind Shadow Gab was to create a fully encrypted chat application that allows users to stay completely anonymous. The encryption feature is still being built.
            </div>
          </div>

          <div className="project edslist">
            <div className="project__header">
              <h2 className="project__name">Edslist</h2>
              <div className="tech-stack">
                <div className="tech">Node.js</div>
                <div className="tech">React</div>
                <div className="tech">Redux</div>
                <div className="tech">Redis</div>
                <div className="tech">AWS</div>
                <div className="tech">Docker</div>
                <div className="tech">PostgreSQL</div>
                <div className="tech">Sass</div>
              </div>
            </div>
            <hr className="yellow"></hr>
            <img src={edslist} alt="web application in a browser window" className="screenshot" />
            <div className="project__description">
              Edslist is a craigslist-inspired Content Management System (CMS). It was built with React and PostgreSQL inside of a Docker container, and deployed using AWS. Edslist was built with full user authentication, client-side and server-side session management, search filtering, and it also supports file upload and storage.
            </div>
          </div>

        </div>
        <hr></hr>
        <div className="contact">
          <h3>Interested in working together?</h3>
          <a href="mailto:brad@badmckinney.dev" id="contact-button"><div>Email me</div></a>
        </div>
        <hr></hr>
      </Layout >
      //</PageTransition>
    )
  }
}

export default Work
