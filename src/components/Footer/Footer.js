import React from 'react'
import './Footer.css'
import {
  Navbar,
  NavbarBrand,
  Container,
  Col
} from 'reactstrap'

const Footer = () => {
  return (
    <Container>
      <Col>
        <Navbar className="footer">
          <NavbarBrand>
            Copyright © Jordan Muliaman 2020
          </NavbarBrand>
        </Navbar>
      </Col>
    </Container>
  )
}

export default Footer
