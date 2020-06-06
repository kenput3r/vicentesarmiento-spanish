import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Container = styled.div`
  background-color: #f2f2f2;
  box-sizing: border-box;
  padding-top: 30px;
`
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`
const InlineBlock = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 25%;
  padding: 10px;
  vertical-align: text-top;
`
const Icon = styled.div`
  margin: 0 auto 5px;
  width: 80%;
`
const Title = styled.h3`
  padding-top: 15px;
  display: none;
`
const Excerpt = styled.p`
  text-align: justify;

  a {
    color: rgb(34, 66, 137);
    font-weight: bold;
    text-decoration: none;
  }
`
const Platform = () => {
  const Images = useStaticQuery(graphql`
  query {
    affordableHousing: file(relativePath: { eq: "affordable-housing_round.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    educationFirst: file(relativePath: { eq: "education-first_round.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reducingHomelessness: file(relativePath: { eq: "reducing-homelessness_round.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saferNeighborhoods: file(relativePath: { eq: "safer-neighborhoods_round.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    affordableHousing_square: file(relativePath: { eq: "affordable-housing_square.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    educationFirst_square: file(relativePath: { eq: "education-first_square.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reducingHomelessness_square: file(relativePath: { eq: "reducing-homelessness_square.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saferNeighborhoods_square: file(relativePath: { eq: "safer-neighborhoods_square.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    affordableHousing_op0: file(relativePath: { eq: "affordable-housing_op0.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    educationFirst_op0: file(relativePath: { eq: "education-first_op0.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reducingHomelessness_op0: file(relativePath: { eq: "reducing-homelessness_op0.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saferNeighborhoods_op0: file(relativePath: { eq: "safer-neighborhoods_op0.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    affordableHousing_op0b: file(relativePath: { eq: "affordable-housing_op0b.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    educationFirst_op0b: file(relativePath: { eq: "education-first_op0b.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reducingHomelessness_op0b: file(relativePath: { eq: "reducing-homelessness_op0b.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saferNeighborhoods_op0b: file(relativePath: { eq: "safer-neighborhoods_op0b.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)
  return (
    <Container>
      <Wrapper>
        <h2>Vicente's Priorities</h2>
        <InlineBlock>
          <Icon><Img fluid={Images.affordableHousing_op0b.childImageSharp.fluid} /></Icon>
          <Title>Affordable Houseing</Title>
          <Excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <Link to="/" title="Read more about Vicente's plans for affordable housing in Santa Ana">Read More</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={Images.educationFirst_op0b.childImageSharp.fluid} /></Icon>
          <Title>Education <br />First</Title>
          <Excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <Link to="/" title="Read more about Vicente's plans for education in Santa Ana">Read More</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={Images.reducingHomelessness_op0b.childImageSharp.fluid} /></Icon>
          <Title>Reducing Homelessness</Title>
          <Excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <Link to="/" title="Read more about Vicente's plans for reducing homelessness in Santa Ana">Read More</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={Images.saferNeighborhoods_op0b.childImageSharp.fluid} /></Icon>
          <Title>Safer Neighborhoods</Title>
          <Excerpt>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> <Link to="/" title="Read more about Vicente's plans for promoting safer neighborhoods in Santa Ana">Read More</Link></Excerpt>
        </InlineBlock>
      </Wrapper>
    </Container>
  )
}

export default Platform