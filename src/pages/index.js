import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Videos from "../components/videos"
import Hero from "../components/hero"
import Platform from "../components/platform"
import Parallax from "../components/parallax"

const HeroContainer = styled.div`
  @media (max-width: 767px) {
    margin-top: 91px;
  }
`

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Vicente Sarmiento" />
    <HeroContainer id="HeroContainer">
      <Hero />
    </HeroContainer>
    <Platform />
    <Parallax />
    <Videos />
  </Layout>
)

export default IndexPage
