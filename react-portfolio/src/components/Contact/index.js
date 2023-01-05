import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import profile from '../../assets/images/profile_pic.jpg';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
    }, []) 

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_zwseqaj',
            'template_rl106ke',
            refForm.current,
            'FVQodC6UsECVe9vH7'
        )
        .then(
            () =>{
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            (error) => {
                alert(`Failed to send due to ${error.text}, please try again`)
            }
        )
    }

    return (

        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass = {letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'] } idx={15}/>
                    </h1>
                    <p>
                        I am interested in any internships/opportunities and would love to hear any suggestions or ideas you may have. If you would like to contact me, please do not hesitate to conact me using this form!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='email' required/>
                                </li>
                                <li >
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea type="Message" name='message' required/>
                                </li>
                                <li >
                                    <input className='flat-button' type="submit" value="send"  />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
                <div className='pic-zone'>
                    <img src={profile} alt="Me"  width="540" height="810" />
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact