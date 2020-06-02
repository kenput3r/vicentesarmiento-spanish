import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"

import image1 from "../images/gallery/vicente-sarmiento-1.jpg"
import image2 from "../images/gallery/vicente-sarmiento-2.jpg"
import image3 from "../images/gallery/vicente-sarmiento-3.jpg"
import image4 from "../images/gallery/vicente-sarmiento-4.jpg"
import image5 from "../images/gallery/vicente-sarmiento-5.jpg"
import image6 from "../images/gallery/vicente-sarmiento-6.jpg"
import image7 from "../images/gallery/vicente-sarmiento-7.jpg"
import image8 from "../images/gallery/vicente-sarmiento-8.jpg"
import image9 from "../images/gallery/vicente-sarmiento-9.jpg"
import image10 from "../images/gallery/vicente-sarmiento-10.jpg"
import image11 from "../images/gallery/vicente-sarmiento-11.jpg"
import image12 from "../images/gallery/vicente-sarmiento-12.jpg"
import image13 from "../images/gallery/vicente-sarmiento-13.jpg"
import image14 from "../images/gallery/vicente-sarmiento-14.jpg"
import image15 from "../images/gallery/vicente-sarmiento-15.jpg"
import image16 from "../images/gallery/vicente-sarmiento-16.jpg"
import image17 from "../images/gallery/vicente-sarmiento-17.jpg"
import image18 from "../images/gallery/vicente-sarmiento-18.jpg"
import image19 from "../images/gallery/vicente-sarmiento-19.jpg"
import image20 from "../images/gallery/vicente-sarmiento-20.jpg"
import image21 from "../images/gallery/vicente-sarmiento-21.jpg"
import image22 from "../images/gallery/vicente-sarmiento-22.jpg"

const Container = styled.div`
  position: relative;
  top: 191px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 191px;
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

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16,image17, image18, image19, image20, image21, image22]
const image_alts = []
image_alts[0] = ("Vicente Sarmiento")
image_alts[1] = ("Vicente Sarmiento")
image_alts[2] = ("Vicente Sarmiento")
image_alts[3] = ("Vicente Sarmiento")
image_alts[4] = ("Vicente Sarmiento")
image_alts[5] = ("Vicente Sarmiento")
image_alts[6] = ("Vicente Sarmiento")
image_alts[7] = ("Vicente Sarmiento")
image_alts[8] = ("Vicente Sarmiento")
image_alts[9] = ("Vicente Sarmiento")
image_alts[10] = ("Vicente Sarmiento")
image_alts[11] = ("Vicente Sarmiento")
image_alts[12] = ("Vicente Sarmiento")
image_alts[13] = ("Vicente Sarmiento")
image_alts[14] = ("Vicente Sarmiento")
image_alts[15] = ("Vicente Sarmiento")
image_alts[16] = ("Vicente Sarmiento")
image_alts[17] = ("Vicente Sarmiento")
image_alts[18] = ("Vicente Sarmiento")
image_alts[19] = ("Vicente Sarmiento")
image_alts[20] = ("Vicente Sarmiento")
image_alts[21] = ("Vicente Sarmiento")
image_alts[22] = ("Vicente Sarmiento")

const Gallery = ({ data }) => {
  const [showDialog, setShowDialog] = useState(false)
  const [activeImage, setActiveImage] = useState(false)
  const [activeImageAlt, setActiveImageAlt] = useState("Vicente Sarmiento")
  const open = (src, alt) => {
    setActiveImage(src)
    setActiveImageAlt(alt)
    setShowDialog(true)
  }
  const close = () => {
    setShowDialog(false)
  }
  return (
  <Layout>
    <PageHeader />
    <SEO title="Photos Of Vicente Sarmiento" />
    <Container className="content">
      <h1 className="page-title">Gallery</h1>
      <div style={{textAlign: "center"}}>
        {images.map((image, index) => (
            <div key={`thumb-${index}`} className="gallery-image" onClick={() => open(image, image_alts[index])}>
              <Img fluid={data[`img${index+1}`].childImageSharp.fluid} alt={image_alts[index]} />
            </div>
        ))}
      </div>
    </Container>
    <Dialog  isOpen={showDialog} onDismiss={close} aria-label="a picture" style={{zIndex: 101}}>
      <div>
        {activeImage ? <img src={activeImage} alt={activeImageAlt} /> : ''}
        <p>
          <span onClick={close} style={{color: "#224289", cursor: "pointer"}}>&times; close</span> 
          <span><a href={activeImage} download style={{textDecoration: "none", color: "#224289", float: "right"}}>&darr; download</a></span>
        </p>
      </div>
    </Dialog>
  </Layout>
  )
}

export const Images = graphql`
query {
  img1: file(relativePath: { eq: "gallery/vicente-sarmiento-1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img2: file(relativePath: { eq: "gallery/vicente-sarmiento-2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img3: file(relativePath: { eq: "gallery/vicente-sarmiento-3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img4: file(relativePath: { eq: "gallery/vicente-sarmiento-4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img5: file(relativePath: { eq: "gallery/vicente-sarmiento-5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img6: file(relativePath: { eq: "gallery/vicente-sarmiento-6.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img7: file(relativePath: { eq: "gallery/vicente-sarmiento-7.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img8: file(relativePath: { eq: "gallery/vicente-sarmiento-8.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img9: file(relativePath: { eq: "gallery/vicente-sarmiento-9.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img10: file(relativePath: { eq: "gallery/vicente-sarmiento-10.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img11: file(relativePath: { eq: "gallery/vicente-sarmiento-11.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img12: file(relativePath: { eq: "gallery/vicente-sarmiento-12.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img13: file(relativePath: { eq: "gallery/vicente-sarmiento-13.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img14: file(relativePath: { eq: "gallery/vicente-sarmiento-14.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img15: file(relativePath: { eq: "gallery/vicente-sarmiento-15.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img16: file(relativePath: { eq: "gallery/vicente-sarmiento-16.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img17: file(relativePath: { eq: "gallery/vicente-sarmiento-17.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img18: file(relativePath: { eq: "gallery/vicente-sarmiento-18.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img19: file(relativePath: { eq: "gallery/vicente-sarmiento-19.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img20: file(relativePath: { eq: "gallery/vicente-sarmiento-20.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img21: file(relativePath: { eq: "gallery/vicente-sarmiento-21.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img22: file(relativePath: { eq: "gallery/vicente-sarmiento-22.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


export default Gallery
