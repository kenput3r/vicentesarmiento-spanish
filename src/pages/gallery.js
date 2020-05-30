import React from "react"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"


const Gallery = ({ data }) => {
  return (
  <Layout>
    <PageHeader />
    <SEO title="Photos Of Vicente Sarmiento" />
    <div className="content" style={{marginTop:191}}>
      <h1 className="page-title">Gallery</h1>
      <div style={{textAlign: "center"}}>
        <div className="gallery-image">
          <Img fluid={data.img1.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img2.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img3.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img4.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img5.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img6.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img7.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img8.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img9.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
        <Img fluid={data.img10.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img11.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img12.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img13.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img14.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img15.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img16.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img17.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img18.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img19.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img20.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">
          <Img fluid={data.img21.childImageSharp.fluid} />
        </div>
        <div className="gallery-image">    
          <Img fluid={data.img22.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  </Layout>
  )
}

export const Images = graphql`
query {
  img1: file(relativePath: { eq: "gallery/vicente-sarmiento-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img2: file(relativePath: { eq: "gallery/vicente-sarmiento-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img3: file(relativePath: { eq: "gallery/vicente-sarmiento-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img4: file(relativePath: { eq: "gallery/vicente-sarmiento-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img5: file(relativePath: { eq: "gallery/vicente-sarmiento-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img6: file(relativePath: { eq: "gallery/vicente-sarmiento-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img7: file(relativePath: { eq: "gallery/vicente-sarmiento-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img8: file(relativePath: { eq: "gallery/vicente-sarmiento-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img9: file(relativePath: { eq: "gallery/vicente-sarmiento-9.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img10: file(relativePath: { eq: "gallery/vicente-sarmiento-10.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img11: file(relativePath: { eq: "gallery/vicente-sarmiento-11.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img12: file(relativePath: { eq: "gallery/vicente-sarmiento-12.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img13: file(relativePath: { eq: "gallery/vicente-sarmiento-13.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img14: file(relativePath: { eq: "gallery/vicente-sarmiento-14.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img15: file(relativePath: { eq: "gallery/vicente-sarmiento-15.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img16: file(relativePath: { eq: "gallery/vicente-sarmiento-16.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img17: file(relativePath: { eq: "gallery/vicente-sarmiento-17.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img18: file(relativePath: { eq: "gallery/vicente-sarmiento-18.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img19: file(relativePath: { eq: "gallery/vicente-sarmiento-19.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img20: file(relativePath: { eq: "gallery/vicente-sarmiento-20.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img21: file(relativePath: { eq: "gallery/vicente-sarmiento-21.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img22: file(relativePath: { eq: "gallery/vicente-sarmiento-22.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


export default Gallery
