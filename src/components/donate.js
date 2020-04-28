import React from "react"

const Donate = () => {
  const buttonStyles = {
    backgroundColor: "#224289",
    borderRadius: 3,
    color: "#fff",
    display: "inline-block",
    padding: 15,
    textDecoration: "none",
    verticalAlign: "top"
  }

  return (
    <a className="button" style={buttonStyles} href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">DONATE</a>
  )
}

export default Donate