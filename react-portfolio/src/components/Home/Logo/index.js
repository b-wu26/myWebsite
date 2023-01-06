import './index.scss'
import LogoB from '../../../assets/images/logo-b.png';
import { useEffect, useRef } from 'react';

const Logo = () => {

    const bgRef = useRef()
    const solidLogoRef = useRef()

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoB} alt="B"/>
        </div>

    )
}

export default Logo