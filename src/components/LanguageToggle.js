import React from "react"
import styled from "styled-components"
import language from "./language"

const label = language === 'english' ? 'Español' : 'English'

const Container = styled.div`
  background-color: #f1c80f;
  border: 1px solid rgb(34, 66, 137);
  border-radius: 0 0 3px 3px;
  color: rgb(34, 66, 137);
  position: fixed;
  top: 50vh;
  transform: rotate(-90deg);
  margin-left: -20px;
  left: 0;
  padding: 10px;
  z-index: 100;
`

const LanguageToggle = () => {
  return (
    <Container>
      {label}
    </Container>
  )
}

export default LanguageToggle