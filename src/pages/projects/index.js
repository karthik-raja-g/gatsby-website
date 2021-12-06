import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portofio</h2>
        <h3>Projects and websites I've created</h3>
        <div className={styles.projects}>
          {projects &&
            projects.map(({ id, frontmatter }) => { 
              const image = getImage(frontmatter.thumb)
              return(
              <Link to={`/projects/${frontmatter.slug}`} key={id}>
                <div>
                  <GatsbyImage image={image} />
                  <h3>{frontmatter.title}</h3>
                  <p>{frontmatter.stack}</p>
                </div>
              </Link>
            )})}
        </div>
        <p>See what you see? For queries contact {contact} </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projects {
    projects: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
export default Projects
