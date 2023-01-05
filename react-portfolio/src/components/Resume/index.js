import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import resume from '../../assets/images/resume.pdf';

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
                        Here is my most up to date resume!
                    </p>
                </div>
                <div className="page-resume">
                    <embed src={resume} width="810px" height="700px" />
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Resume;