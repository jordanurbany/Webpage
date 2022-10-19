import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faGitAlt, faJsSquare, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
        <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','M','e']}
                    idx={15}   
                />
                <p>
                    My name is Teddy Horvath and I am dedicated to writing effective and impactful code.
                </p>
                <p>
                    I am a 21 year old from Orange County, CA currently attending Cal Poly Humboldt.  I have been programming ever since I joined college in 2019 and I absolutely love it. My goal is to change as many people\'s lives as I can with software.
                </p>
                <p>
                    Besides my adoration for all things technology, I also love swimming in the cold ocean, hiking in thick forests, and connecting with friends through a good conversation.
                </p>
            </h1>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faPython} color='#4B8BBE' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faAws} color='#FF9900' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faNode} color='#6cc24a' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#F1502F' />
                </div>
            </div>
        </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default About

