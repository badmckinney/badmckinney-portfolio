/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from './nav'
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            alignContent: 'center'
          }}
        >
          <main id="main">{children}</main>
          <footer style={{ textAlign: 'center', fontSize: '0.8em' }}>
            © Bad McKinney {new Date().getFullYear()}, All rights reserved
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
