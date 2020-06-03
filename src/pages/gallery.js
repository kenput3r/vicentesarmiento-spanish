import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"
import Video from "../components/video"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Dialog } from "@reach/dialog"
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

import video1 from "../videos/Vicente-Sarmiento-Announces-Santa-Ana-Mayoral-Campaign.mp4"
import video2 from "../videos/California-Moratorium-on-Evictions-and-Foreclosures.mp4"
import video3 from "../videos/SarmientoHealth-Message-English.mp4"
import video4 from "../videos/Sarmiento-Health-Message-Spanish.mp4"
import video5 from "../videos/Sarmiento-Water District-Health-Message-English.mp4"
import video6 from "../videos/Sarmiento-Water-District-Health-Message-Spanish.mp4"

const videos = [
  {download: video1, embed: "https://www.youtube.com/embed/031kkVNVm5Y", title: "Vicente Sarmiento Announces Santa Ana Mayoral Campaign"},
  {download: video2, embed: "https://www.youtube.com/embed/Riu2-ytGg5c", title: "Update: California Moratorium on Evictions and Foreclosures 4/1/20"},
  {download: video3, embed: "https://www.youtube.com/embed/_e5dMzqlrfw", title: "Sarmiento Health Message - English"},
  {download: video4, embed: "https://www.youtube.com/embed/BhFNnes2t20", title: "Sarmiento Health Message - Spanish"},
  {download: video5, embed: "https://www.youtube.com/embed/5Ni2wrR3vUw", title: "Sarmiento Water District Health Message - English"},

  {download: video6, embed: "https://www.youtube.com/embed/ULfPC5iR5IQ", title: "Sarmiento Water District Health Message - Spanish"}
]

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
const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #cccccc;
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
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
  const [showVideo, setShowVideo] = useState(false)
  const [activeImage, setActiveImage] = useState(false)
  const [activeImageAlt, setActiveImageAlt] = useState("Vicente Sarmiento")
  const [activeVideo, setActiveVideo] = useState(false)
  const [embedUrl, setEmbedUrl] = useState(false)
  const [activeVideoTitle, setActiveVideoTitle] = useState(false)
  const open = (src, alt) => {
    setActiveImage(src)
    setActiveImageAlt(alt)
    setShowDialog(true)
  }
  const close = () => {
    setShowDialog(false)
  }
  const openVideo = (embedUrl, downloadUrl, title) => {
    setEmbedUrl(embedUrl)
    setActiveVideo(downloadUrl)
    setActiveVideoTitle(title)
    setShowVideo(true)
  }
  return (
  <Layout>
    <PageHeader />
    <SEO title="Downloadable Media With Vicente Sarmiento" />
    <Container className="content">
      <h1 className="page-title">Media</h1>
      <Wrapper>
        {videos.map((video, index) => (
          <a href="#" key={`thumb-${index}`} className="gallery-image" onClick={() => openVideo(video.embed, video.download, video.title)}>
              <Img fluid={data[`video${index+1}`].childImageSharp.fluid} alt={image_alts[index]} />
          </a>
        ))}
        {images.map((image, index) => (
            <a href="#" key={`thumb-${index}`} className="gallery-image" onClick={() => open(image, image_alts[index])}>
              <Img fluid={data[`img${index+1}`].childImageSharp.fluid} alt={image_alts[index]} />
            </a>
        ))}
      </Wrapper>
    </Container>
    <Dialog  isOpen={showDialog} onDismiss={close} aria-label="a picture" style={{zIndex: 101}}>
      <div>
        {activeImage ? <img src={activeImage} alt={activeImageAlt} /> : ''}
        <p>
          <span><a href="#" onClick={close} style={{color: "#224289", cursor: "pointer"}}>&times; close</a></span> 
          <span><a href={activeImage} download style={{textDecoration: "none", color: "#224289", float: "right"}}>&darr; download</a></span>
        </p>
      </div>
    </Dialog>
    <Dialog isOpen={showVideo} onDismiss={() => setShowVideo(false)} aria-label="a video" style={{zIndex: 101}}>
      <div>
        {activeVideo ? <Video src={embedUrl} title={activeVideoTitle} /> : ''}
        <p>{activeVideoTitle}</p>
        <p>
          <span><a href="#" onClick={() => setShowVideo(false)} style={{color: "#224289", cursor: "pointer"}}>&times; close</a></span> 
          <span><a href={activeVideo} download style={{textDecoration: "none", color: "#224289", float: "right"}}>&darr; download</a></span>
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
  video1: file(relativePath: { eq: "gallery/video1-poster.png" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  video2: file(relativePath: { eq: "gallery/video2-poster.png" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  video3: file(relativePath: { eq: "gallery/video3-poster.png" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  video4: file(relativePath: { eq: "gallery/video4-poster.png" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  video5: file(relativePath: { eq: "gallery/video5-poster.png" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  video6: file(relativePath: { eq: "gallery/video6-poster.png" }) {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


export default Gallery
