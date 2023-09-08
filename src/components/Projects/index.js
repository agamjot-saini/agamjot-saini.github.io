import './index.scss'
import {Loader} from 'react-loaders'
import ImageSlider from '../ImageSlider'
import easychef from '../../assets/images/easychefpicture.png'
import covidl from '../../assets/images/covidlpicture.png'
import arrowhead from '../../assets/images/arrowheadpicture.png'
import checkout from '../../assets/images/checkoutpicture.png'



const Projects = () => {
    const slides = [
        { url: easychef, title: "easychef" },
        { url: covidl, title: "covidl" },
        { url: arrowhead, title: "arrowhead" },
        { url: checkout, title: "checkout" },
      ];
    //   const containerStyles = {
    //     width: "500px",
    //     height: "300px",
    //     margin: "auto",
    //   };
    
    
    return (
            <>
                <div className="container portfolio-page">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>

                    <div className="text-zone">

                        <div>
                            {/* <h1>Hello monsterlessons</h1> */}
                        <h1>Here are some of my projects</h1>

                            <div className='containerStyles'>
                                {/* <div style={containerStyles}> */}
                                    <ImageSlider slides={slides} parentWidth={900} />
                                {/* </div> */}
                            </div>
                            {/* <p></p>
                            <p>Please visit my LinkedIn Page to view all of these projects.</p> */}
                        </div>
                    </div>            
                </div>
                        
                <Loader type='ball-clip-rotate-pulse'/>

            </>
        )
}

export default Projects