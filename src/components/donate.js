import React from "react"
import PropTypes from "prop-types"

const Donate = ({ inverted }) => {
  const primary = !inverted ? "#f1c80f" : "#f1c80f"
  const secondary = !inverted ? "#224289" : "#224289"
  const buttonStyles = {
    backgroundColor: primary,
    border: "2px solid #f1c80f",
    borderRadius: 3,
    color: secondary,
    display: "inline-block",
    padding: 13,
    textDecoration: "none",
    verticalAlign: "top"
  }

  return (
    <a className="button" style={buttonStyles} href="https://www.efundraisingconnections.com/c/VicenteSarmiento/" target="_blank">DONATE</a>
  )
}
Donate.propTypes = {
  inverted: PropTypes.bool
}
Donate.defaultProps = {
  inverted: false
}
export default Donate