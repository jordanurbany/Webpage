import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import ParticleBackground from '../ParticleBackground'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 2600)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="boat home-page">
        <ParticleBackground />
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={' Jordan Urbany,'.split('')}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'A Software Engineer'.split()}
              idx={20}
            />
          </h1>
          <h2>Software Programmer | Front-end Developer | New Graduate</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
          <a
            style={{ textAlign: 'center' }}
            className="flat-button"
            href="https://drive.google.com/file/d/1Nkv3nbdn8nbyjm1_uCT8hWLN4u7xs5Q5/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Home
