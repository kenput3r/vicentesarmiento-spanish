import React from "react"
import PropTypes from "prop-types"

const Donate = ({ inverted }) => {
  const primary = !inverted ? "#224289" : "#fff"
  const secondary = !inverted ? "#fff" : "#224289"
  const buttonStyles = {
    backgroundColor: primary,
    borderRadius: 3,
    color: secondary,
    display: "inline-block",
    padding: 15,
    textDecoration: "none",
    verticalAlign: "top"
  }

  return (
    <a className="button" style={buttonStyles} href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">DONATE</a>
  )
}
Donate.propTypes = {
  inverted: PropTypes.bool
}
Donate.defaultProps = {
  inverted: false
}
export default Donate