import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/teddy-logo.png'

const Home = () => {
  return (
    <div className='container home-page'>
      <div>
        <h1>Hi, <br /> I'm
        <img src={Logo} alt='dev' />
        teddy
        <br />
        computer science undergrad
        </h1>
        <h2>Fullstack Developer | Freelancer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
