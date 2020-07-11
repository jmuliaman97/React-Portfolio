import React from 'react'
import './About.css'
import {
  Container,
  Button
} from 'reactstrap'

const About = () => {
  return (
    <Container>
      <img className="image" src={require('./images/jordan-muliaman.JPG')} />
      <h1 className="textTitle">
        Jordan Benedict Muliaman
      </h1>
      <p className="text">
        Hello! My name is Jordan and I'm an American based full stack web developer specialized in frontend and backend development.
      </p>
      <div className="links">
        <Button className="buttonLink" href="https://github.com/jmuliaman97">
          <img className="linkImage" src={require('./images/github.png')} />
        </Button>
        <Button className="buttonLink" href="https://www.linkedin.com/in/jordan-muliaman/">
          <img className="linkImage" src={require('./images/linkedin.png')} />
        </Button>
        <Button className="buttonLink" href={require('./myresume.pdf')}>
          <img className="linkImage" src={require('./images/resumelogo.png')} />
        </Button>
      </div>
    </Container>
  )
}

export default About