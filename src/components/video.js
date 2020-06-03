import React from "react"

const Video = ({src, title}) => {
  return (
    <div className="videoWrapper">
      <iframe title={title} width="560" height="315" src={src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Video