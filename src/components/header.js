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
      <div style={{ color: '#000000' }} className="icon socicon-medium"></div>
      <div style={{ color: '#C13584' }} className="icon socicon-instagram"></div>
      <div style={{ color: '#4da7de' }} className="icon socicon-twitter"></div>
      <div style={{ color: '#3371b7' }} className="icon socicon-linkedin"></div>
      <div style={{ color: '#333333' }} className="icon socicon-github"></div>
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
