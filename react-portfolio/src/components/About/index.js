import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faJava, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
      }, []) 
    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx= {15}
                        />

                        
                        <p>
                            I'm an open-minded software developer currently completing a Computer Engineering Degree at the University of Waterloo. I have had several opportunities to work at various tech companies in fields such as Quality Assurance and Devops/Platform Engineering, and am currently pursing an intership related to backend development or cloud computing operations/development. 
                        </p>
                        <p>
                            I am quietly confident, curious by nature and eager to learn about new technologies and the world around me.
                        </p>
                    </h1>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faJava} color="#5382a1" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faPython} color="#4584b6" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faC} color='#92000a' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faDatabase} color="#50C878" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faAws} color="#FF9900" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About