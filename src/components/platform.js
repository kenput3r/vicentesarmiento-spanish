import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import language from "./language"
import platformText from "./platformText"

const Container = styled.div`
  background-color: #f2f2f2;
  box-sizing: border-box;
  padding-top: 30px;

  @media (min-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
`
const InlineBlock = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 33%;
  padding: 10px;
  vertical-align: text-top;

  @media (max-width: 767px) {
    width: 100%;
  }
`
const Icon = styled.div`
  margin: 0 auto 5px;
  width: 80%;
`
const Excerpt = styled.p`
  text-align: left;
  padding: 0 20px;

  a {
    color: rgb(34, 66, 137);
    font-weight: bold;
    text-decoration: none;
  }
`
const Platform = () => {
  const data = useStaticQuery(graphql`
  query {
    educationFirst_op0c: file(relativePath: { eq: "education-first_op0c.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reducingHomelessness_op0c: file(relativePath: { eq: "reducing-homelessness_op0c.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    saferNeighborhoods_op0c: file(relativePath: { eq: "safer-neighborhoods_op0c.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    investmentInYouth_op0c: file(relativePath: { eq: "investment-in-youth_op0c.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    publicHealth_op0c: file(relativePath: { eq: "public-health_op0c.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    affordableHousing_op0d: file(relativePath: { eq: "affordable-housing_op0d.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)
  const text = {
    ...platformText,
    vicentePriorities: {
      english: `Vicente's Priorities`,
      spanish: `Prioridades De Vicente`
    },
    readMore: {
      english: `Learn More`,
      spanish: `Aprende Más`
    }
  }
  return (
    <Container>
      <Wrapper>
        <h2>{text.vicentePriorities[language]}</h2>
        <InlineBlock>
          <Icon><Img fluid={data.affordableHousing_op0d.childImageSharp.fluid} alt={text.affordableHousing.label[language]} /></Icon>
          <Excerpt>{text.affordableHousing.excerpt[language]} <br /> <Link to="/issues/affordable-housing-in-santa-ana" title="Read more about Vicente's plans for affordable housing in Santa Ana">{text.readMore[language]}</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={data.investmentInYouth_op0c.childImageSharp.fluid} alt={text.investmentInYouth.label[language]} /></Icon>
          <Excerpt>{text.investmentInYouth.excerpt[language]} <br /> <Link to="/issues/investing-in-santa-ana-youth" title="Read more about Vicente's plans for education in Santa Ana">{text.readMore[language]}</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={data.reducingHomelessness_op0c.childImageSharp.fluid} alt={text.reducingHomelessness.label[language]} /></Icon>
          <Excerpt>{text.reducingHomelessness.excerpt[language]} <br /> <Link to="/issues/homelessness-in-santa-ana" title="Read more about Vicente's plans for reducing homelessness in Santa Ana">{text.readMore[language]}</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={data.saferNeighborhoods_op0c.childImageSharp.fluid} alt={text.saferNeighborhoods.label[language]} /></Icon>
          <Excerpt>{text.saferNeighborhoods.excerpt[language]} <br /> <Link to="/issues/safer-neighborhoods-in-santa-ana" title="Read more about Vicente's plans for promoting safer neighborhoods in Santa Ana">{text.readMore[language]}</Link></Excerpt>
        </InlineBlock>
        <InlineBlock>
          <Icon><Img fluid={data.publicHealth_op0c.childImageSharp.fluid} alt={text.publicHealth.label[language]} /></Icon>
          <Excerpt>{text.publicHealth.excerpt[language]} <br /> <Link to="/issues/public-health/" title="Read more about Vicente's plans for promoting safer neighborhoods in Santa Ana">{text.readMore[language]}</Link></Excerpt>
        </InlineBlock>
      </Wrapper>
    </Container>
  )
}

export default Platform