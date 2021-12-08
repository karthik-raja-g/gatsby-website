import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/pageTemplate.module.css"

const PageTemplate = ({ data }) => {
  const { html } = data.markdownRemark
  const { date, stack, title, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          {<GatsbyImage image={getImage(featuredImg)} alt={title}/>}
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        date
        stack
        title
      }
    }
  }
`
