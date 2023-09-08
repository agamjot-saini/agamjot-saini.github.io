import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import Agam from '../../assets/images/agam.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faListAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={Agam} alt="logo" /> */}

            <img className='agam' src={Agam} alt="agam-logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
{/* 
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faListAlt} color='#4d4d4e'/>
            </NavLink> */}

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>

        </nav>

        <ul>

            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/agamjot-saini'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>


            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/agamjot-saini/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>




        </ul>

    </div>
)

export default Sidebar