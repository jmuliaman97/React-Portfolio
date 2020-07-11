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
          <Card color="dark" className="card">
            <CardImg className="cardImage" top width="100%" src={require('./images/pokemon.JPG')} alt="Pokemon Index" />
            <CardBody className="cardBody">
              <CardTitle>
                <Button className="button" href="https://alanhlee.github.io/PokemonIndex/" color="dark">
                  Pokémon Index
                </Button>
              </CardTitle>
              <CardText className="cardText">An application that shows the types, stats, weakness and strengths of the first 151 Pokémon.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6">
          <Card color="dark" className="card">
            <CardImg className="cardImage" top width="100%" src={require('./images/burger.JPG')} alt="Burger" />
            <CardBody className="cardBody">
              <CardTitle>
                <Button className="button" href="https://damp-hamlet-57978.herokuapp.com/" color="dark">
                  Eat Da Burger!
                </Button>
              </CardTitle>
              <CardText className="cardText">A restaurant app that lets users input the names of burgers they'd like to eat.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs='6'>
          <Card color="dark" className="card">
            <CardImg className="cardImage" top width="100%" src={require('./images/dealtracker.JPG')} alt="Deal Tracker" />
            <CardBody className="cardBody">
              <CardTitle>
                <Button className="button" href="https://deal-tracker-app.herokuapp.com/" color="dark">
                  Deal Tracker
                </Button>
              </CardTitle>
              <CardText className="cardText">An app that allows sales executives to create deals and move them through a visual pipeline at each stage in the sales process.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col xs='6'>
          <Card color="dark" className="card">
            <CardImg className="cardImage" top width="100%" src={require('./images/cache.JPG')} alt="CACHE" />
            <CardBody className="cardBody">
              <CardTitle>
                <Button className="button" href="https://uci-cache.herokuapp.com/" color="dark">
                  C A C H E
                </Button>
              </CardTitle>
              <CardText className="cardText">An online sales, auction and bartering app. It combines the auction and buy-it-now features of eBay along with the open offer features of Craigslist.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Project