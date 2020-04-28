import React, { useEffect } from "react"

const Contact = () => {

  const form_styles = {
    maxWidth: 600,
    margin: "30px auto",
    paddingBottom: 30
  }

  useEffect(() => {
    if (typeof window !== 'undefined')
      window._ctct_m = "236ab3f5001288a34f7143956ce8948b"
    const signup_script = document.createElement("script")
    signup_script.src = "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js"
    signup_script.async = true
    signup_script.defer = true
    const ContactContainer = document.getElementById("ContactContainer")
    ContactContainer.appendChild(signup_script)
  })
  return (
    <div id="ContactContainer" style={{margin:30}}>
      <div className="ctct-inline-form" data-form-id="58e2aa1b-8910-4502-9e19-1440c20c3575" style={form_styles}></div>
    </div>
  )
}

export default Contact