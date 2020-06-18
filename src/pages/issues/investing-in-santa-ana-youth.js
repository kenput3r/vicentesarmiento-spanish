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
      heroImage: file(relativePath: { eq: "education-in-santa-ana.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      educationFirst_op0: file(relativePath: { eq: "investment-in-youth_op0c.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      one: file(relativePath: { eq: "invest-in-youth-afterschool.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "invest-in-youth-alternatives.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      three: file(relativePath: { eq: "invest-in-youth-scholarship.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      four: file(relativePath: { eq: "invest-in-youth-literacy.png" }) {
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
      <SEO title="Investing In Santa Ana's Youth" />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              Investing In Our Youth
            </H1>
          </HeadingContainer>
          <Img fluid={Images.heroImage.childImageSharp.fluid} alt="School campus in Santa Ana" />
        </HeroContainer>
        <Content>
          <Wrapper>
            <div style={{textAlign: "center", maxWidth: 300, margin:"30px auto"}}>
              <Img fluid={Images.educationFirst_op0.childImageSharp.fluid} alt="Investment In Youth" />
            </div>
            <h2 style={{textAlign: "center"}}>Santa Ana must champion policies and programs that invest in strengthening the next generation.</h2>
          </Wrapper>
          <Table className="yellow slanted sltr">
            <TableCell>
            <Img fluid={Images.one.childImageSharp.fluid} alt="Kids working on a project" />
            </TableCell>
            <TableCell>
              <H3>
                Partner with educational institutions to expand opportunities through joint use facilities and afterschool programs.
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                Offer alternatives to juvenile incarceration through evidenced based intervention programs. 
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.two.childImageSharp.fluid} alt="Youths learning new skills" />
            </TableCell>
          </Table>
          <Table className="yellow slanted sltr">
            <TableCell>
              <Img fluid={Images.three.childImageSharp.fluid} alt="Money going towards scholarships" />
            </TableCell>
            <TableCell>
              <H3>
                Develop the ‘Santa Ana Promise’ with private sector partners to ensure that paid internships, mentorship opportunities, and scholarships are available to all students. 
              </H3>
            </TableCell>
          </Table>
          <Table>
            <TableCell>
              <H3>
                Increase youth literacy by opening library branches and expanding library services. 
              </H3>
            </TableCell>
            <TableCell>
              <Img fluid={Images.four.childImageSharp.fluid} alt="Child sitting on books, reading a book" />
            </TableCell>
          </Table>
        </Content>
      </Container>
    </Layout>
  )
}

export default Page