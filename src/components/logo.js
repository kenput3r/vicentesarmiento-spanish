import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  let styles = {
    maxWidth: 300,
    height: "auto",
  }
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mayor-sarmiento.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.logo.childImageSharp.fluid}
      {...styles}
      alt="text reading: Vicente Sarmiento For Mayor"
    />
  )
}

export default Logo
