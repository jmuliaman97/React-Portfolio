import React from 'react'
import './About.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const About = () => {
  return (
    <Container>
      <div>
        <img className="image" src={require('./jordan-muliaman.JPG')} />
        <h1 className="text">
          Jordan Benedict Muliaman
        </h1>
        <p className="text">
          Hello! My name is Jordan and I'm an American based full stack web developer specialized in frontend and backend development.
        </p>
      </div>
    </Container>
  )
}

export default About