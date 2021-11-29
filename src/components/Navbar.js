import { Link } from "gatsby"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query Test {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `)
  return (
    <nav>
      <h1>{data.site.siteMetadata.title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
