import React, { useState } from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

const Container = styled.div`
  position: relative;
  top: 125px;
  &:after {
    content: " ";
    display: table;
    margin-bottom: 125px;
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
const HeroContainer = styled.div`
  position: relative;
  width: 100%;

  .gatsby-image-wrapper {
    min-height: 300px;
  }
`
const HeadingContainer = styled.div`
  color: #fff;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const H1 = styled.h1`
  width: 100%;

  small {
    font-weight: normal;
    font-size: 16px;
  }
`
const Table = styled.div`
  display: table;
  border-bottom: 1px solid #cccccc;
  margin: 0 auto;
  max-width: 1040px;
`
const Row = styled.div`
  display: table-row;
`
const Cell = styled.div`
  display: table-cell;
  padding: 0 20px;
  width: 50%;

  &.valign-center {
    vertical-align: middle;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`
const Data = styled.div`
  border-left: 1px solid #cccccc;
  padding-left: 20px;

  @media (max-width: 767px) {
    border-left: 0;
    border-top: 1px solid #cccccc;
    padding-left: 0;
    padding-top: 20px;
  }

  a {
    color: rgb(34, 66, 137);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`
const Form = styled.form`
  max-width: 420px;
  margin: 20px auto;
`
const Input = styled.input`
  color: rgb(34, 66, 137);
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid rgb(34, 66, 137);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;

  :focus {
    border: 2px solid #f1c80f;
  }

  &[type="submit"] {
    width: 100%;
    background:rgb(34, 66, 137);
    border-radius:5px;
    border:0;
    cursor:pointer;
    color:white;
    font-size:24px;
    padding-top:10px;
    padding-bottom:10px;
    transition: all 0.3s;
    margin-top:-4px;
    font-weight:700;

    :hover {
      background:rgba(34, 66, 137, 0.8);
    }
  }
`
const Select = styled.select`
  color: rgb(34, 66, 137);
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid rgb(34, 66, 137);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;

  :focus {
    border: 2px solid #f1c80f;
  }
`
const TextArea = styled.textarea`
  height: 150px;
  line-height: 150%;
  resize: vertical;
  color: rgb(34, 66, 137);
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border:2px solid rgb(34, 66, 137);
  transition: all 0.3s;
  padding: 13px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;

  :focus {
    border: 2px solid #f1c80f;
  }
`
const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    :checked ~ span {
      background-color: rgb(34, 66, 137);

      :after {
        display: block;
      }
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    :after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "get-involved.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.heroImage.childImageSharp.fluid} alt="Vicente Samrmiento and team working a food bank" />
}

const postContact = async (event, email) => {
  try {
    event.preventDefault()
    const response = await fetch('/.netlify/functions/create-contact', {
      method: 'POST',
      body: JSON.stringify({email: email})
    })
    if(!response.error) {
      const contact_form = document.getElementById('ContactForm')
      contact_form.submit()
    }else{
      console.log(response.error)
    }
  }catch(error) {
    console.log(error)
  }
}

const Contact = () => {
  const [email, setEmail] = useState('')
  return (
    <Layout>
      <PageHeader />
      <SEO title="Contact Vicente Sarmiento" />
      <Container>
        <HeroContainer>
          <HeadingContainer>
            <H1 className="page-title">
              Get Involved <br />
              <small>learn how you can make a difference</small>
            </H1>
          </HeadingContainer>
          <Hero />
        </HeroContainer>
        <Table>
          <Row>
            <Cell>
              <h2 style={{maxWidth: 420, margin:"0 auto"}}>Send a message</h2>
              <Form id="ContactForm" data-netlify="true">
                <Input name="fName" type="text" placeholder="* First Name" />
                <Input name="lName" type="text" placeholder="* Last Name" />
                <Input name="email" type="email" placeholder="* Email" onChange={event => setEmail(event.target.value)} />
                <Input name="phone" type="tel" placeholder="Phone Number" />
                <Select>
                  <option default={true} disabled={true}>
                    I would like to...
                  </option>
                  <option value="Learn more about Councilmember Sarmiento">
                    Learn more about Councilmember Sarmiento
                  </option>
                  <option value="Volunteer">
                    Volunteer
                  </option>
                  <option value="Get a yard sign">
                    Get a yard sign
                  </option>
                  <option value="Make a donation">
                    Make a donation
                  </option>
                  <option value="Be contacted by a campaign team member">
                    Be contacted by a campaign team member
                  </option>
                </Select>
                <TextArea name="text" placeholder="Message"></TextArea>
                <Label>
                  <input type="checkbox" checked />
                  <span></span>
                  <small>sign me up to receive campaign update emails</small>
                </Label>
                <Input type="submit" value="SUBMIT" onClick={event => postContact(event, email)} />
              </Form>
            </Cell>
            <Cell className="valign-center">
              <Data>
                <h3>Other ways to get connected</h3>
                <p><strong>Write us at:</strong> <br />
                  Sarmiento for Mayor <br />
                  PO Box 10162 <br />
                  Santa Ana, CA 92711
                </p>
                <p>
                  <strong>Email us at:</strong> <a href="mailto:info@sarmientoformayor.com">info@sarmientoformayor.com</a>
                </p>
                <p><strong>Follow us on:</strong></p>
                <ul>
                  <li>Facebook <a href="https://facebook.com/sarmientoformayor">@sarmientoformayor</a></li>
                  <li>Instagram <a href="https://instagram.com/sarmientoformayor">@sarmientoformayor</a></li>
                  <li>Twitter <a href="https://twitter.com/sarmiento4mayor">@sarmiento4mayor</a></li>
                </ul>
              </Data>
            </Cell>
          </Row>
        </Table>
      </Container>
    </Layout>
  )
}

export default Contact
