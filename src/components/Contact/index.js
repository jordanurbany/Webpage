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
            I am interested in startup opportunities and new project ideas! Some
            things that interest me are new battery technologies, blockchain,
            DevOps, and AI. Please feel free to reach out send me a message if
            you have any questions or comments.
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
          McKinleyville, CA
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
