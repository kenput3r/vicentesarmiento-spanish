import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import PageHeader from "../../components/PageHeader"
import SEO from "../../components/seo"

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
const H3 = styled.h3`
  color: rgb(34, 66, 137);
  font-size: 2rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  max-width: 100%;
`
const Content = styled.div`
  margin-bottom: 30px;
`
const Wrapper = styled.div`
  max-width: 1140px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`
const Table = styled.div`
  display: table;
  margin: 50px 0;
  padding: 50px 0;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
    &.yellow {
      flex-direction: column;
    }
  }

  &.yellow {
    background-color: #f2c811;
  }

  &.slanted {
    &:before,
    &:after {
      background: inherit;
      content: '';
      display: block;
      height: 50%;
      left: 0;
      position: absolute;
      right: 0;
      z-index: -1;
      -webkit-backface-visibility: hidden;
    }
  }

  &.sltr {
    &:before {
      top: 0;
      transform: skewY(1.5deg);
      transform-origin: 100% 0;
    }
    
    &:after {
      bottom: 0;
      transform: skewY(-1.5deg);
      transform-origin: 100%;
    }
  }
`
const TableCell = styled.div`
  display: table-cell;
  padding: 50px;
  width: 50%;
  vertical-align: middle;

  @media (max-width: 767px) {
    display: block;
    padding: 10px;
    width: 100%;
  }
`
const Page = () => {
  const Images = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "homelessness-in-santa-ana1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reducingHomelessness_op0: file(relativePath: { eq: "reducing-homelessness_op0c.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      one: file(relativePath: { eq: "homelessness-support-services.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "homelessness-work-placement.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "homelessness-supportive-housing.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "homelessness-shelter-expansion.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <PageHeader />
      <SEO title="Reducing Homelessness In Santa Ana" />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              Reduce Homelessness In Santa Ana
            </H1>
          </HeadingContainer>
          <Img fluid={Images.heroImage.childImageSharp.fluid} alt="Vicente Samrmiento and team working a food bank" />
        </HeroContainer>
        <Content>
          <Wrapper>
            <div style={{textAlign: "center", maxWidth: 300, margin:"30px auto"}}>
              <Img fluid={Images.reducingHomelessness_op0.childImageSharp.fluid} alt="Vicente Samrmiento and team working a food bank" />
            </div>
            <h2 style={{textAlign: "center"}}>Our community must come together to combat the disproportionate impacts of the homelessness crisis.</h2>
          </Wrapper>
          <Table className="yellow slanted sltr">
            <TableCell>
            <Img fluid={Images.one.childImageSharp.fluid} alt="Health items being prepared for distribution" />
            </TableCell>
            <TableCell>
              <H3>
                Take legal action to revise the County’s jail release procedures and to ensure that homeless support services are equitably distributed across the County.
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                Work with the business community, educational institutions, and community organizations to provide work placement services for homelessness resulting from lost jobs. 
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.two.childImageSharp.fluid} alt="A man on a job interview" />
            </TableCell>
          </Table>
          <Table className="yellow slanted sltr">
            <TableCell>
              <Img fluid={Images.three.childImageSharp.fluid} alt="People in a health center" />
            </TableCell>
            <TableCell>
              <H3>
                Push the State and County to reopen the Fairview Development Center as a permanent supportive housing option for mentally ill homeless individuals.
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                Refuse to expand local shelters until the County builds proportionate shelter space in the ‘South Service Planning Area.’
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.four.childImageSharp.fluid} alt="A man supervising construction" />
            </TableCell>
          </Table>
        </Content>
      </Container>
    </Layout>
  )
}

export default Page