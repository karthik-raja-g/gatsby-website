import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/pageTemplate.module.css'

const PageTemplate = () => {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          {/* <Img fluid={} /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
      </div>
    </Layout>
  )
}
 
export default PageTemplate