import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "vicente-sarmiento-for-mayor-logo.png" }) {
        childImageSharp {
          fixed(height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.logo.childImageSharp.fixed} alt="text reading: Vicente Sarmiento For Mayor" />
}

export default Logo
