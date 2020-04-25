import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
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

const Header = ({ siteTitle }) => {
  const [badgeLift, setBadgeLift] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', e => {
      if(window.scrollY > lastScrollY) {
        setLastScrollY(window.scrollY)
        if(window.scrollY <= 200) {
          setBadgeLift(window.scrollY * -1)
        }
      }
    })
  })

  return (
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
          <a className="button" style={buttonStyles} href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">DONATE</a>
        </div>
      </div>
      <div id="HeroContainer">
        <Hero />
      </div>
      {/* <div style={{textAlign:"center", marginTop:badgeLift}}>
        <div style={{maxWidth:300, margin:"0 auto"}}>
          <Badge />
        </div>
      </div> */}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
