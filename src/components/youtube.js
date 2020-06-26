import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const YouTube = () => {
  const data = useStaticQuery(graphql`
    query {
      youtube: file(relativePath: { eq: "icon-youtube_small.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data.youtube.childImageSharp.fixed} alt="YouTube icon" />
}

export default YouTube
