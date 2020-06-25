import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"
import Footer from "./footer"
import LanguageToggle from "./LanguageToggle"

const Main = styled.main`
  :after {
    display: table;
    content: " ";
  }
`
const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor:"#fff",
          margin: `0 auto`
        }}
      >
        <Main>{children}</Main>
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
