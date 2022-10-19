import { useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_2g7sa2n',
                'template_44ydq4x',
                refForm.current,
                'HOdtkDGgJsj_8ElPt'
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
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p style={{color: 'white', fontSize: '14px'}}>
                    I am interested in startup opportunities and new project ideas! Please send me a message if you have any questions or comments.  
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Name'
                                    required 
                                />
                            </li>
                            <li className='half'>
                                <input 
                                    type='email'
                                    name='email' 
                                    placeholder='Email' 
                                    required 
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="subject" 
                                    type='text' 
                                    name='subject' 
                                    required 
                                /> 
                            </li>
                            <li>
                                <textarea 
                                    placeholder='Message' 
                                    name='message' 
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
    </>
  )
}

export default Contact
