import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <section className="content">{children}</section>
      <footer>Copyright 2021 Hakuna matata</footer>
    </div>
  )
}

export default Layout
