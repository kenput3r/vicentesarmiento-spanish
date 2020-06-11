import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

const Container = styled.div`
  position: relative;
  top: 125px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 125px;
  }
  @media (max-width: 767px) {
    top: 75px;
    &:after {
      content: " ";
      display: table;
      margin-bottom: 75px;
    }
  }
`
const HeroContainer = styled.div`
  position: relative;
  width: 100%;

  .gatsby-image-wrapper {
    min-height: 300px;
  }
`
const HeadingContainer = styled.div`
  color: #fff;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const H1 = styled.h1`
  width: 100%;

  small {
    font-weight: normal;
    font-size: 16px;
  }
`
const Content = styled.div`
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 10px;
`
const Page = () => {
  const Images = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "about-vicente-sarmiento.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      saferNeighborhoods_op0: file(relativePath: { eq: "vicente-con-la-gente.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <PageHeader />
      <SEO title="About Vicente Sarmiento" />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              Meet Vicente Sarmiento <br />
              <small>Father. Husband. Councilmember.</small>
            </H1>
          </HeadingContainer>
          <Img fluid={Images.heroImage.childImageSharp.fluid} alt="Vicente Samrmiento and his family" />
        </HeroContainer>
        <Content>
          <div style={{textAlign: "center", maxWidth: 300, margin:"30px auto"}}>
            <Img fluid={Images.saferNeighborhoods_op0.childImageSharp.fluid} alt="Santa Ana buildings with text around it reading Vicente Con La Gente, Sarmiento" />
          </div>
          <p>Vicente Sarmiento has proudly represented Ward 1 on the Santa Ana City Council since 2007.</p>
          <p>Councilmember Sarmiento is currently the President of the Orange County Water District Board of Directors.  He also served as the City Council’s Mayor Pro Tem, and was Chairman of the Oversight Board of the Successor Agency to the former Redevelopment Agency for the City of Santa Ana.  Councilmember Sarmiento chaired the City Council Committees for Development, Transportation, and Legislation.  He was also a member of the Finance, Economic Development & Technology Committee.</p>
          <p>
          Councilmember Sarmiento’s priorities are increasing park space, reducing homelessness, providing more affordable housing for our working families, investing in youth programs, and supporting efforts to make our neighborhoods safer.  He helped draft the Housing Opportunity Ordinance, ensured that a fiscal reserve fund was created in the aftermath of the 2008 Economic Recession, and lead the City Council’s adoption of public policies to protect the rights of all immigrants in Santa Ana.
          </p>
          <p>
          Councilmember Sarmiento graduated from the University of California, Berkeley with a Bachelor of Arts in Economics.  He received his Juris Doctorate from the University of California, Los Angeles School of Law.  More recently, he attended the Kennedy School of Government at Harvard University and successfully completed the Program for Senior Executives in State and Local Government.
          </p>
          <p>
          Councilmember Sarmiento, his wife, Eva, and their three children live in a 1929 historic home they restored, just three blocks from where he grew up.  Their family has lived in Santa Ana and Orange County since 1965.
          </p>
        </Content>
      </Container>
    </Layout>
  )
}

export default Page