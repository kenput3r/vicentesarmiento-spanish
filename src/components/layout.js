/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

import Facebook from "./facebook"
import Instagram from "./instagram"
import Twitter from "./twitter"
import YouTube from "./youtube"
import Email from "./email"

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
        <footer style={{backgroundColor:"#ffffff", padding:20}}>
          <div className="paid-for-by">
            Paid for by Sarmiento for Mayor 2020 #1425828
          </div>
          <div className="social">
            <a href="https://www.facebook.com/SarmientoForMayor/" title="Vicente Sarmiento on Facebook">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/sarmientoformayor/" title="Viente Sarmiento on Instagram">
              <Instagram />
            </a>
            <a href="https://twitter.com/sarmiento4mayor" title="Vicente Sarmiento on Twitter">
             <Twitter />
            </a>
            <a href="https://www.youtube.com/channel/UCzsCsW3YJZwkyVwTuqRe6ew" title="Vicente Sarmiento on YouTube">
              <YouTube />
            </a>
            <a href="mailto:info@sarmientoformayor.com" title="Email Vicente Sarmiento">
              <Email />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
