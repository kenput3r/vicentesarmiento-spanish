import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"
import Donate from "./donate"
import MobileHeader from "./MobileHeader"
import MobileDrawer from "./MobileDrawer"

const DesktopHeader = styled.nav`
  display: table;
  margin: 0 auto;
  padding: 1rem 1.0875rem;
  position: relative;
  width: 100%;
  z-index: 2;

  @media (max-width: 767px) {
    display: none;
  }
`

const PageHeader = () => {

  const [logoWidth, setLogoWidth] = useState(400)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

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
      <DesktopHeader role="navigation">
        <div style={{display:"table-cell", width:"30%"}}>
          <h1 style={{ margin: 0, maxWidth: logoWidth }}>
            <a href="/" title="Vicente Sarmiento for Mayor"><Logo /></a>
          </h1>
        </div>
        <div style={{display:"table-cell", width:"70%", textAlign:"right", verticalAlign:"middle"}}>
          <div className="desktop-link"><Link to="/">Home</Link></div>
          <div className="desktop-link"><Link to="/contact/">Contact</Link></div>
          <div className="desktop-link"><Link to="/gallery/">Media</Link></div>
          <Donate inverted={true} />
        </div>
      </DesktopHeader>
      <MobileHeader drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <MobileDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </header>
  )
}

export default PageHeader
