import React from "react"
import styled from "styled-components"

import backgroundImage from "../images/vicente-sarmiento-for-mayor-background.jpg"

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: right;
  height: 100vh;

  @media (max-width: 767px) {
    display: table-cell;
    vertical-align: bottom;
  }
`
const Title = styled.div`
  color: #273884;
  font-weight: bold;
  margin-left: 100px;
  max-width: 60vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  position: sticky;
  position: -webkit-sticky;
  top: 30vh;

  @media (max-width: 767px) {
    background-color: #f1c80f;
    display: table-cell;
    margin-left: 0;
    max-width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    position: relative;
    top: 0;
  }
`
const Heading1 = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
  text-transform: uppercase;
`
const Heading2 = styled.div`
  color: #ffffff;
  line-height: 2.5rem;
  margin-bottom: 5px;
  font-size: 2.5rem;
  text-transform: uppercase;
`
const Parallax = () => {

  return (
    <Container>
      <Title>
        <Heading1>Leadership</Heading1>
        <Heading2>SANTA ANA</Heading2>
        <Heading1>CAN TRUST</Heading1>
        <Heading2>FOR A BRIGHT FUTURE</Heading2>
      </Title>
    </Container>
  )
}

export default Parallax