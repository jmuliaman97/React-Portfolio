import React from 'react'
import './Info.css'
import {
  Container
} from 'reactstrap'

const Info = () => {
  return (
    <Container>
      <div>
        <h1 className="contactTitle">
          Contact Me
        </h1>
        <p className="contactText">
          I am actively seeking employment opportunities.
        </p>
        <p className="contactText">
          <i id="contactLogo" className="fa fa-envelope"></i>
          Irvine, CA
        </p>
        <p  className="contactText">
          <i id="contactLogo" className='fas fa-phone'></i>
          (949) 501-2781
        </p>
        <p className="contactText">
        <i id="contactLogo" className='fas fa-map-marker-alt'></i>
          jordan.muliaman@gmail.com
        </p>
      </div>

    </Container>

    
  )
}

export default Info