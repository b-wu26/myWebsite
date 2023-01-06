import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import resume from '../../assets/images/resume.png';


const Resume = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
    }, []) 

    return (
        <>
            <div className="container resume-page">
                <div className='text-zone'>
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Resume".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Here is my most up to date resume! Or view it here<a href="https://github.com/b-wu26/myWebsite/blob/main/react-portfolio/src/assets/images/resume.pdf" color="#ffd700"> resume.pdf </a>
                    </p>
                </div>
                <div className="page-resume">
                    <img src={resume} alt="Resume"  width="589px" height="864px" />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Resume;