/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Footer from "./footer"
import LanguageToggle from "./LanguageToggle"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor:"#fff",
          margin: `0 auto`
        }}
      >
        <main>{children}</main>
        <Footer />
        <LanguageToggle />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
