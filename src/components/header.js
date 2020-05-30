import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import Hero from "./hero"
import Badge from "./badge"
import Donate from "./donate"

const Header = () => {

  const [badgeLift, setBadgeLift] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)

  // useEffect(() => {
  //   window.addEventListener('scroll', e => {
  //     if(window.scrollY > lastScrollY) {
  //       setLastScrollY(window.scrollY)
  //       if(window.scrollY <= 150) {
  //         setBadgeLift(window.scrollY * -1)
  //       }
  //     }
  //   })
  // })

  return (
    <header
      style={{
        backgroundColor: `#f2f2f2`,
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
            <a href="/" title="Vicente Sarmiento for Mayor"><Logo /></a>
          </h1>
        </div>
        <div style={{display:"inline-block", width:"50%", textAlign:"right", verticalAlign:"top"}}>
          <div className="desktop-link"><Link to="/">Home</Link></div>
          <div className="desktop-link"><Link to="/gallery/">Gallery</Link></div>
          <Donate />
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

export default Header
