import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `transparent`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '65px'
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, fontSize: 30 }}>
        <Link
          to="/"
          style={{
            color: `#424242`,
            textDecoration: `none`,
            fontSize: '1em',
            border: '3px solid #424242',
            padding: '0px 5px',
            maxHeight: '20px'
          }}
        >
          b.
        </Link>
      </h1>
    </div>
    <div
      style={{
        display: 'flex',
        padding: `1.45rem 1.0875rem`
      }}>
      <a href="https://medium.com/@badmckinney" target="_blank" rel="noopener noreferrer"><div style={{ color: '#000000' }} className="social-icon socicon-medium"></div></a>
      <a href="https://www.instagram.com/badmckinney/" target="_blank" rel="noopener noreferrer"><div style={{ color: '#C13584' }} className="social-icon socicon-instagram"></div></a>
      <a href="https://twitter.com/_badmckinney" target="_blank" rel="noopener noreferrer"><div style={{ color: '#4da7de' }} className="social-icon socicon-twitter"></div></a>
      <a href="https://www.linkedin.com/in/badmckinney/" target="_blank" rel="noopener noreferrer"><div style={{ color: '#3371b7' }} className="social-icon socicon-linkedin"></div></a>
      <a href="https://github.com/badmckinney" target="_blank" rel="noopener noreferrer"><div style={{ color: '#333333' }} className="social-icon socicon-github"></div></a>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
