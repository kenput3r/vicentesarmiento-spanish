import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Logo from "./logo"
import Hero from "./hero"
import Badge from "./badge"
import Donate from "./donate"

const PageHeader = () => {

  const [badgeLift, setBadgeLift] = useState(0)
  const [logoWidth, setLogoWidth] = useState(400)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = (e) => {
    if(window.scrollY > lastScrollY) {
      setLastScrollY(window.scrollY)
      if(window.scrollY <= 250) {
        setLogoWidth(400 - window.scrollY)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="page-header"
      style={{
        backgroundColor: `#224289`,
        position: `fixed`,
        top: 0,
        width: `100%`,
        zIndex: 100
      }}
    >
      <div
        style={{
          display: `table`,
          margin: `0 auto`,
          padding: `1.45rem 1.0875rem`,
          position: `relative`,
          width: `100%`,
          zIndex: 2
        }}
      >
        <div style={{display:"inline-block", width:"50%"}}>
          <h1 style={{ margin: 0, maxWidth: logoWidth }}>
            <a href="/" title="Vicente Sarmiento for Mayor"><Logo /></a>
          </h1>
        </div>
        <div style={{display:"table-cell", width:"50%", textAlign:"right", verticalAlign:"middle"}}>
          <div className="desktop-link"><Link to="/">Home</Link></div>
          <div className="desktop-link"><Link to="/">Contact</Link></div>
          <div className="desktop-link"><Link to="/">Endorsements</Link></div>
          <div className="desktop-link"><Link to="/gallery/">Gallery</Link></div>
          <Donate inverted={true} />
        </div>
      </div>
    </header>
  )
}

export default PageHeader
