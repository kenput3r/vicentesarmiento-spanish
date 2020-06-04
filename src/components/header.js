import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./logo"
import Badge from "./badge"
import Donate from "./donate"
import MobileHeader from "./MobileHeader"
import MobileDrawer from "./MobileDrawer"

const DesktopHeader = styled.div`
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

const Header = () => {

  //const [badgeLift, setBadgeLift] = useState(0)
  const [logoWidth, setLogoWidth] = useState(400)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [headerBackground, setHeaderBackground] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)

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

  const handleScroll = (e) => {
    if(window.scrollY > lastScrollY) {
      setLastScrollY(window.scrollY)
      if(window.scrollY <= 250) {
        setLogoWidth(400 - window.scrollY)
      }
      if(headerBackground < 1) {
        setHeaderBackground(window.scrollY * 0.005)
      }
    }
    if(window.scrollY === 0) {
      setHeaderBackground(0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      style={{
        backgroundColor: `rgba(34, 66, 137,${headerBackground})`,
        position: `fixed`,
        top: 0,
        width: `100%`,
        zIndex: 100
      }}
    >
      <DesktopHeader>
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
      {/* <div style={{textAlign:"center", marginTop:badgeLift}}>
        <div style={{maxWidth:300, margin:"0 auto"}}>
          <Badge />
        </div>
      </div> */}
    </header>
  )
}

export default Header
