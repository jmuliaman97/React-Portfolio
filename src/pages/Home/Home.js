import React from 'react'
import './Home.css'
import Footer from '../../components/Footer'
import About from '../../components/About'

const Home = () => {
  return (
    <div className="home">
      <About />
      <Footer />
    </div>
  )
}

export default Home