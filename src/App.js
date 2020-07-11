import React, { Component } from 'react'
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import './App.css'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container, 
  Row, 
  Col
} from 'reactstrap'
import About from './components/About'
import Footer from './components/Footer'


class App extends Component {

  render() {

    return (
      <Router>
        
        <Navbar className="navbar" color="dark">
          <NavbarBrand>
            <Link to="/" className="navBrand">
              <img className="logo" src={require('./images/JM_logowhite.png')} />
            </Link>
          </NavbarBrand>
          <Nav>
            <NavItem>
              <Link to="/" className="navLinks">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" className="navLinks">
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="navLinks">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Navbar>

        <div className="app">
          <About />
          <Footer />
        </div>

        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

      </Router>
    )
  }
}

export default App
