import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faJsSquare,
  faNode,
  faPython,
  faReact,
  faJava,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              style={{ color: '#000' }}
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
            <p style={{ fontSize: '20px', color: '#000' }}>
            Welcome! I'm Jordan Urbany. With a BS in Computer 
            Science from Cal Poly Humboldt, my career has been 
            dedicated to Product Development and Program Data Management. 
            I've cultivated a global perspective on product management 
            during my time in Singapore and refined my skills in 
            data-centric program leadership as a Program Data Manager 
            in San Francisco. These roles, underpinned by my technical 
            skills in software development, cloud computing, and database 
            management, enable me to build impactful, innovative solutions. I am committed to creating world-class solutions, especially for community-focused projects.
            </p>
            <p style={{ fontSize: '20px', color: '#000' }}>
              When im not programming my other hobbies include, surfing, playing
              music, photography, traveling. Im thrilled to share my journey with you and
              showcase the projects and experiences that define me as a person
              and professional.
            </p>
          </h1>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#1565C0" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#6cc24a" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default About
