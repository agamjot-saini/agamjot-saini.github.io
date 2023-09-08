import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders'

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
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>

                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['W','h','o',' ','a','m',' ','I','?']}
                        idx={15}
                        />
                    </h1>

                    <p>            
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['I am an Honours Bachelor of Science graduate from the University of Toronto who is very passionate about technology. I am looking to gain more experience in the IT industry and work on meaningful projects using the latest technologies.']}
                        idx={15}
                        />
                        
                    </p>

                    <p>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['I have experience working with Python (Django, Flask), Java, C, R, SQL, HTML/CSS, JavaScript (JQuery, React), and Shopify (Liquid).']}
                        idx={15}/>
                    </p>


                    <p>         
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['The people that know me best would describe me as being very resilient, disciplined and grounded.']}
                        idx={15}/>

                    </p>

                    {/* <p>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['I love to play and watch sports. I support Arsenal, Toronto Blue Jays, Toronto Maple Leafs, and Toronto Raptors. I am also a huge Track and Field fan, and try to keep up with the latest track meet results.']}
                        idx={15}/>

                    </p> */}


                </div>

                <div className='stage-cube-cont'>
                    <div className='contthree'>
                        <div className='cubespinner'> 
                        <div className='face1'>
                            <FontAwesomeIcon icon={faPython} color='#2596be'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJava} color='#ea2d2e'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                        </div>
                        {/* <div className='face7'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div> */}

                        </div>

                    </div>
                </div>
                
            </div>

            <Loader type='ball-clip-rotate-pulse' className='lo'/>
        </>
    )
}

export default About