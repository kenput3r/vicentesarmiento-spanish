import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Facebook from "./facebook"
import Twitter from "./twitter"
import YouTube from "./youtube"
import Instagram from "./instagram"
import Email from "./email"

const Container = styled.footer`
  border-top: 1px solid #ccc;
  display: table;
  font-size: 14px;
  padding: 40px 70px;
  position: relative;
  width: 100%;
  @media (max-width: 767px) {
    display: block;
    padding: 20px 35px;
  }
  a {
    color: rgb(34, 66, 137);
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`
const Left = styled.div`
  display: table-cell;
  width: 50%;
  vertical-align: top;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
  }
`
const Right = styled.div`
  display: table-cell;
  width: 50%;
  text-align: right;
  @media (max-width: 767px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`
const Form = styled.form`
  width: 400px;
  max-width: 100%;
  input {
    height: 60px;
    border: 1px solid rgb(34, 66, 137);
    padding: 18px 20px;

    &[type="email"] {
      width: 100%;
    }

    &[type="tel"] {
      width: 70%;
      @media (max-width: 767px) {
        width: 65%;
      }
    }

    &[type="submit"] {
      background-color: rgb(34, 66, 137);
      color: #ffffff;
      float: right;
      :hover {
        cursor: pointer;
      }
    }
  }
`
const FieldSet = styled.div`
  padding: 0 5px;
  margin: 0 0 5px;

  .label {
    font-size: 15px;
    margin: 0 0 6px;
  }
`
const List = styled.ul`
  list-style-type: none;
  margin-left: 5px;
  margin-right: 30px;
`
const Links = styled.div`
  display: table;

  div {
    display: table-cell;
    @media (max-width: 767px) {
      display: block;
      width: 100%;
    }
  }

  a {
    color: rgb(34, 66, 137);
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`
const Social = styled.div`
  a {
    display: inline-block;
    padding: 5px;
    margin-left: 49px;
    :nth-of-type(1) {
      margin-left: 0;
    }
    :hover {
      opacity: 0.8;
    }
    @media (max-width: 767px) {
      margin-left: 24px;
    }
  }
`
const Disclaimers = styled.div`
  padding-top: 30px;
  margin-left: auto;
  width: 435px;
  max-width: 100%;
  span {
    border: 1px solid;
    padding: 17px 24px;
    text-transfor: uppercase;
    @media (max-width: 767px) {
      display: block;
    }
  }
`


const postContact = async (event, email, phone, callBack) => {
  event.preventDefault()
  const body = {email: email, phone: phone}
  if(email !== '' || phone !== '') {
    try {
      const response = await fetch('/.netlify/functions/create-contact', {
        method: 'POST',
        body: JSON.stringify(body)
      })
      if(!response.error) {
        console.log('no errors')
        callBack('THANKS!')
        setTimeout(() => {
          callBack('JOIN US')
        }, 3000)
      }else{
        console.log(response.error)
      }
    }catch(error) {
      console.log(error)
    }
  }
}


const Footer = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitText, setSubmitText] = useState('JOIN US')
  return (
    <Container>
      <Left>
        <Form>
          <FieldSet>
            <div className="label">
              <label>Email Address</label>
            </div>
            <div className="input">
              <input type="email" onChange={e => setEmail(e.target.value)} />
            </div>
          </FieldSet>
          <FieldSet>
            <div className="label">
              <label>Phone Number</label>
            </div>
            <div className="input">
              <input type="tel" onChange={e => setPhone(e.target.value)} />
              <input type="submit" value={submitText} onClick={e => postContact(e, email, phone, setSubmitText)} />
            </div>
          </FieldSet>
        </Form>
        <Links>
          <div>
            <List>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about/">About Vicente</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
              <li><Link to="/gallery/">Media</Link></li>
            </List>
          </div>
          <div>
            <List>
              <li><Link to="/issues/affordable-housing-in-santa-ana/">Affordable Housing</Link></li>
              <li><Link to="/issues/homelessness-in-santa-ana/">Reducing Homelessness</Link></li>
              <li><Link to="/issues/investing-in-santa-ana-youth/">Invest In Youth</Link></li>
              <li><Link to="/issues/public-health/">Public Health</Link></li>
              <li><Link to="/issues/safer-neighborhoods-in-santa-ana/">Safer Neighborhoods</Link></li>
            </List>
          </div>
        </Links>
      </Left>
      <Right>
        <Social>
          <a href="https://www.facebook.com/SarmientoForMayor/" title="Vicente Sarmiento on Facebook" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/sarmientoformayor/" title="Viente Sarmiento on Instagram" target="_blank">
            <Instagram />
          </a>
          <a href="https://twitter.com/sarmiento4mayor" title="Vicente Sarmiento on Twitter" target="_blank">
            <Twitter />
          </a>
          <a href="https://www.youtube.com/channel/UCzsCsW3YJZwkyVwTuqRe6ew" title="Vicente Sarmiento on YouTube" target="_blank">
            <YouTube />
          </a>
          <a href="mailto:info@sarmientoformayor.com" title="Email Vicente Sarmiento" target="_blank">
            <Email />
          </a>
        </Social>
        <Disclaimers>
          <p><span>Paid for by Sarmiento for Mayor 2020 #1425828</span></p>
          <p>Support our mayoral campaign to elect Vicente Sarmiento by signing up to <Link to="/contact/">volunteer</Link> or by making a <a href="https://www.efundraisingconnections.com/c/VicenteSarmiento/">donation online</a>.</p>
          <p>&copy; 2020. All rights reserved. </p>
        </Disclaimers>
      </Right>
    </Container>
  )

}

export default Footer