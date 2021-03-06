import React, { Component } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
//import PageTransition from "gatsby-plugin-page-transitions"

import highlightActiveLink from "../utils/highlight"

import SEO from "../components/seo"

class IndexPage extends Component {

  componentDidMount() {
    highlightActiveLink('home');

    import("typer-js")
      .then((typer) => {
        typer.default('.typer')
          .cursor({ block: true, blink: 'hard', color: '#f9ca24' })
          .line('software engineer')
          .pause(2000)
          .back('all')
          .continue('code slinger')
          .pause(1000)
          .back('all')
          .continue('husband and father')
          .pause(1000)
          .back('all')
          .continue('story-teller')
          .pause(1000)
          .back('all')
          .continue('life-long learner')
          .pause(1000)
          .back('all')
          .continue('webhead')
          .pause(1000)
          .back('all')
          .continue('thalassophile')
          .pause(1000)
          .back('all')
          .continue('software engineer')

      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      // <PageTransition
      //   transitionTime={300}
      // >
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `resume`, `portfolio`, `hawaii`, `engineer`, `developer`, `dev`]} />
        <div className="intro">
          <h1 className="greeting">Aloha!</h1>
          <h1 style={{
            display: 'inline-block',
            verticalAlign: 'top',
          }} className="greeting">
            My name is Brad and I am a
            <span style={{
              display: 'inline-block',
              verticalAlign: 'top',
            }} className="typer" id="typer"></span>
          </h1>
          <h1 className="greeting">living in Honolulu, Hawaii.</h1>
        </div>
        <Image />
        <div className="status">
          <h2 className="status__label">Current Status:</h2>
          <div className="status__text">
            I am currently doing contract work for a startup based in Los Angeles and working as a Teaching Assistant at DevLeague, but am actively seeking new work opportunity. See previous work history and education on <a href="https://www.linkedin.com/in/badmckinney/" target="_blank" rel="noopener noreferrer" className="status__link">LinkedIn</a> or check out some actual projects I've built on <a href="https://github.com/badmckinney" target="_blank" rel="noopener noreferrer" className="status__link">GitHub</a>. If you have an opportunity for me or just want to grab a coffee and talk shop, don't hesitate to reach out. I love making new friends.
          </div>
        </div>
        <hr></hr>
        <div className="contact">
          <h3>Interested in working together?</h3>
          <a href="mailto:brad@badmckinney.dev" id="contact-button"><div>Email me</div></a>
        </div>
        <hr></hr>
      </Layout>
      //</PageTransition>
    )
  }
}

export default IndexPage
