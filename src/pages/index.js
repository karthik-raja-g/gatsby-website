import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <StaticImage src="../images/banner.png" alt="site banner" placeholder="blurred" />
        {/* <img src="./banner.png"  style={{ maxWidth: "100%" }} /> */}
      </section>
    </Layout>
  )
}
