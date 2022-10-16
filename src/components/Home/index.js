import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/t-logo.png'
import './index.scss'

const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hi, I'm <br /> 
        <img src={Logo} alt='dev' />
         eddy
        <br />
        computer science undergrad
        </h1>
        <h2>Fullstack Developer</h2>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home
