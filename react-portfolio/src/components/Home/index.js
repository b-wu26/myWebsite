import LogoB from '../../assets/images/logo-b.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['r', 'e', 'n', 'd', 'e', 'n']
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r',' ', '/',' ', 'U', 'n','i','v','e','r','s','i','t','y',' ','S','t','u','d','e','n','t']
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
      }, []) 
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoB} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21}/>
                </h1>
                <h2>Backend Developer / Devops Engineer / Cloud Enthusiast</h2>
                <Link to="/contact"  className='flat-button'>Contact me</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home