import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portofio</h2>
        <h3>Projects and websites I've created</h3>
        <div className={styles.projects}>
          {projects &&
            projects.map(({ id, frontmatter }) => (
              <Link to={`/projects/${frontmatter.slug}`} key={id}>
                <div>
                  <h3>{frontmatter.title}</h3>
                  <p>{frontmatter.stack}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query projects {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`
export default Projects
