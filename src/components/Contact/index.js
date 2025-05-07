import { useState, useRef, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_leqmg3v',
        'template_44ydq4x',
        refForm.current,
        'WgR5ZJLCftlVR3_mv'
      )
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ color: 'black', fontSize: '14px', fontWeight: '700' }}>
          Interested in startup opportunities and new projects! 
          My core focus involves N8N, data insights, AI agent development, 
          and leveraging my MCP skillset. I also keep a close eye on new 
          battery technologies, blockchain, and DevOps. 
          If you have questions, comments, or an idea to collaborate on, 
          please reach out.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="full">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className="full">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jordan Urbany,
          <br />
          Uluwatu, Indonesia
          <br />
          <span>jordanurbany@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-8.8232, 115.0894]} zoom={6}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-8.8232, 115.0894]}>
              <Popup>Im currently living in Uluwatu (Bali) Indonesia</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Contact
