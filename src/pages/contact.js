import React, { useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import PageHeader from "../components/PageHeader"
import SEO from "../components/seo"

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
const Form = styled.form`
  max-width: 420px;
  margin: 50px auto;
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

const Contact = () => {

  return (
    <Layout>
      <PageHeader />
      <SEO title="Contact Vicente Sarmiento" />
      <Container>
        <h1 className="page-title">Get Involved</h1>
        <Form>
          <Input name="name" type="text" placeholder="Name" />
          <Input name="email" type="text" placeholder="Email" />
          <Select>
            <option default="true" disabled="true">
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
          <Input type="submit" value="SUBMIT" />
        </Form>
      </Container>
    </Layout>
  )
}

export default Contact
