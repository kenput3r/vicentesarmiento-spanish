import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  display: none;
  flex-direction: column;
  justify-content: center;
  background: #224289;
  height: 90vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ drawerOpen }) => drawerOpen ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: 767px) {
    display: flex;
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #f1c80f;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 767px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

const MobileDrawer = ({drawerOpen}) => {

  return (
    <StyledMenu drawerOpen={drawerOpen}>
      <Link to="/">HOME</Link>
      <Link to="/about/">Meet Vicente</Link>
      <Link to="/contact/">CONTACT</Link>
      <Link to="/gallery">Media</Link>
    </StyledMenu>
  )
}

export default MobileDrawer