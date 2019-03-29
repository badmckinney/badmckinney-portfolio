import { Link } from "gatsby"
import React from "react"

const Nav = () => (
  <nav>
    <ul className="nav"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        marginBottom: `50px`,
        marginLeft: 0,
        background: '#424242'
      }}>
      <Link to="/"><li className="nav-item">Home</li></Link>
      <Link to="/legend"><li className="nav-item">The Legend</li></Link>
      <Link to="/work"><li className="nav-item">Work</li></Link>
      <Link to="blog"><li className="nav-item">Blog</li></Link>
      <a href="mailto:brad@badmckinney.dev"><li className="nav-item">Contact</li></a>
    </ul>
  </nav>
)

export default Nav
