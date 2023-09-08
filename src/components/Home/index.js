import { Link } from 'react-router-dom';
import AgamPortrait from '../../assets/images/Agam_Portrait_BR.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import {Loader} from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A','g','a','m','j','o','t']
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r']
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    

    return (

        <>
        
        <div className="container home-page">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

            <div className="text-zone">
                <h1>
                    
                    <span className={letterClass}> H</span>
                    
                    <span className={`${letterClass} _11`}>i</span>

                    <br/> 

                    <span className={`${letterClass} _12`}> I</span>
                    
                    <span className={`${letterClass} _13`}>'</span>
                    
                    <span className={`${letterClass} _14`}>m </span>

                <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                </h1>

                <h2>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={15}/>
                </h2>

                <Link to="/contact" className='flat-button'>Contact Me</Link>
                {/* <div> */}
                {/* <div className='contthree'> */}

                <div className='contfour'>
                    <img className='portrait' src={AgamPortrait} alt='Portrait'></img>
                </div>
                {/* </div> */}
                {/* </div> */}

            </div>


        </div>

        <Loader type='ball-clip-rotate-pulse' className='lo'/>


        </>

    );

}


export default Home