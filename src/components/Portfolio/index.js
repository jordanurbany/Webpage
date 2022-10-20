import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../data/portfolio.json'

import './index.scss'

const Portfolio = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  console.log(portfolioData)

  useEffect(() => {
    const timer = setTimeout(() => {
        setletterClass('text-animate-hover')
    }, 3000)

    return () => {
        clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {

    return (
        <div className='images-container'>
            {
                portfolio.map((port, idx) => {
                    return (
                        <div className='image-box'>
                            <img 
                                onMouseOver={event => event.target.play()}
                                onMouseOut={event => event.target.pause()}
                                src={port.cover}
                                className='portfolio-video'
                                alt='portfolio'
                            />
                            <div className='content'>
                                <h2 className='title'>{port.title}</h2>
                                <h3 className='description'>{port.description}</h3>
                                <h3 className='stack'>{port.stack}</h3>
                                <button className='btn' onClick={() => window.open(port.url)}>View Repository</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  return (
    <>
    <div className='container portfolio-page'>
      <h1 className='page-title'>
        <AnimatedLetters 
            letterClass={letterClass}
            strArray={'Check out a few of my projects'.split('')}
            idx={15}
        />
      </h1> 
      <div>
        {renderPortfolio(portfolioData.portfolio)}
      </div> 
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Portfolio

