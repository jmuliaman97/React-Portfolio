import React from 'react'
import './Project.css'
import {
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'

const Project = () => {
  return (
    <Container>
      <Row>
        <Col xs="6">
          <Card className="card">
            <CardImg className="cardImage" top width="100%" src={require('./pokemon.JPG')} alt="Pokemon Index" />
            <CardBody className="cardBody">
              <CardTitle>Pokémon Index</CardTitle>
              <CardText>An application that shows the types, stats, weakness and strengths of the first 151 Pokémon.</CardText>
              <Button href="https://alanhlee.github.io/PokemonIndex/" color="secondary">Link to application</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card className="card">
            <CardImg className="cardImage" top width="100%" src={require('./burger.JPG')} alt="Burger" />
            <CardBody className="cardBody">
              <CardTitle>Eat Da Burger!</CardTitle>
              <CardText>A restaurant app that lets users input the names of burgers they'd like to eat.</CardText>
              <Button href="https://damp-hamlet-57978.herokuapp.com/" color="secondary">Link to application</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='6'>
          <Card className="card">
            <CardImg className="cardImage" top width="100%" src={require('./dealtracker.JPG')} alt="Deal Tracker" />
            <CardBody className="cardBody">
              <CardTitle>Deal Tracker</CardTitle>
              <CardText>An app that allows sales executives to create deals and move them through a visual pipeline at each stage in the sales process.</CardText>
              <Button href="https://deal-tracker-app.herokuapp.com/" color="secondary">Link to application</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs='6'>
          <Card className="card">
            <CardImg className="cardImage" top width="100%" src={require('./comingsoon.JPG')} alt="Burger" />
            <CardBody className="cardBody">
              <CardTitle>Coming soon</CardTitle>
              <CardText>Coming soon</CardText>
              <Button href="google.com" color="secondary">Link to application</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Project