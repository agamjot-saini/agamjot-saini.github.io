import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
    
    
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_mwgasen', 'template_u29s8te', refForm.current, 'xC0czizm_fpDR1_kd')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
    

    return (

        <>
        <div class="flex-container">
            <div class="flex-child">
                
            <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>

                <div className='cont'>

                    <div className='top'>
                        <h1>
                            <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                            idx={15}/>
                        </h1>
                        <p>Please reach out to me for development opportunities. You can contact me using the form below. 
                            Please provide your Name, Email, Subject Title, and Message.</p>
                        <p></p>
                    </div>

                    {/* <div className='buffer'></div> */}

                    {/* <div className='under'> */}
                        {/* <p>dfdf</p> */}
                        <form ref={refForm} onSubmit={sendEmail} >
                        <div className="li">
                            <div className='half'>
                                <input placeholder="Your Name" type="text" name="name" required />
                            </div>
                        
                            <div className='half'>
                                <input
                                    placeholder="Your Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="li">
                            <input
                                placeholder="Subject Title"
                                type="text"
                                name="subject"
                                required
                            />
                        </div>
                        <div className="li" >
                            <textarea
                                placeholder="Your Message"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <div className="li send">
                            <div className='btn'>
                            <input type="submit" value="SUBMIT" />
                            </div>
                        </div>
                        </form>
                    </div>
                    {/* </div> */}
            </div>
            
            <div className="conttwo flex-child">
                    <div id="container">
                        <div id="spooky">
                            <div id="body">
                                {/* <div id='gutti'></div> */}
                                <div id="eyes"></div>
                                <div id="mouth"></div>
                                <div id="feet">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div id="shadow"></div>
                    </div>

            </div>

        </div>

            <Loader type='ball-clip-rotate-pulse' className='lo'></Loader>
        </>
    )

}

export default Contact