import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo_bsub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faFile } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoB} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Brenden"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brenden-wu-294777192/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/b-wu26">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

        </ul>
    </div>

)

export default Sidebar