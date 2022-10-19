import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LogoT from '../../assets/images/teddy-logo2.png'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e','d','d','y']
  const jobArray = ['c','o','m','p','u','t','e','r',' ','s','c','i','e','n','c','e',' ','u','n','d','e','r','g','r','a','d']


  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoT} alt='dev' />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
          </h1>
          <h2>Fullstack Developer</h2>
          <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home
