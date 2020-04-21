import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Hero from "./hero"
import Badge from "./badge"

const buttonStyles = {
  backgroundColor: "#224289",
  color: "#fff",
  display: "inline-block",
  padding: 15,
  textDecoration: "none",
  verticalAlign: "top"
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `#f2f2f2`,
      paddingBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        position: `absolute`,
        width: `100%`,
        zIndex: 2
      }}
    >
      <div style={{display:"inline-block", width:"50%"}}>
        <h1 style={{ margin: 0, maxWidth: 400 }}>
          <Logo />
        </h1>
      </div>
      <div style={{display:"inline-block", width:"50%", textAlign:"right", verticalAlign:"top"}}>
        <a style={buttonStyles} href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">DONATE</a>
      </div>
    </div>
    <div>
      <Hero />
    </div>
    <div style={{textAlign:"center"}}>
      <div style={{maxWidth:300, margin:"0 auto"}}>
        <Badge />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
