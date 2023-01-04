import './index.scss'
import LogoB from '../../../assets/images/logo-b.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial'
const Logo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(()=> {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(
            solidLogoRef.current, 
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 7,
                duration: 4,

            }

        )

        gsap.fromTo(
            outlineLogoRef.current,
            {
                opacity:1,
            },
            {
                opacity: 0,
                delay: 8,
                duration: 2,
            }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoB} alt="B"/>
            <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="529.000000pt" 
                height="765.000000pt" 
                viewBox="0 0 529.000000 765.000000">
                    <g 
                        className='svg-container'
                        transform="translate(0,765) scale(0.1,-0.1)"
                        fill="#000000">
                            <path ref={outlineLogoRef}
                            d="M236 7258 c-14 -20 -16 -369 -16 -3503 0 -3134 2 -3483 16 -3503 l15
-22 1602 0 c1488 0 1604 1 1627 17 125 85 1323 973 1348 999 l32 34 0 924 c0
702 -3 931 -12 952 -7 16 -155 136 -376 306 -241 186 -362 286 -360 296 2 9
165 141 362 293 198 153 365 288 372 301 19 33 19 1862 1 1895 -11 19 -1321
993 -1374 1022 -16 8 -437 11 -1622 11 l-1600 0 -15 -22z m3238 -33 c50 -34
86 -60 187 -135 92 -68 251 -186 413 -305 52 -38 138 -101 191 -140 52 -38
126 -93 163 -121 37 -28 101 -75 143 -105 42 -30 106 -76 142 -104 35 -27 74
-57 86 -65 l21 -14 0 -943 c0 -776 -2 -943 -13 -943 -11 0 -74 -44 -142 -98
-5 -4 -25 -19 -44 -32 -19 -14 -42 -32 -52 -40 -39 -33 -49 -40 -58 -40 -6 0
-15 -9 -21 -20 -6 -11 -17 -20 -24 -20 -8 0 -16 -7 -20 -15 -3 -8 -12 -15 -20
-15 -8 0 -19 -6 -23 -14 -9 -15 -89 -81 -179 -148 -189 -140 -213 -167 -161
-187 12 -5 36 -23 52 -40 17 -17 36 -31 43 -31 6 0 12 -4 12 -9 0 -5 10 -13
21 -16 12 -4 37 -21 56 -39 51 -46 68 -60 85 -71 49 -32 119 -84 157 -117 24
-21 67 -53 95 -73 28 -19 76 -55 106 -80 30 -25 72 -57 93 -71 l37 -27 0 -936
-1 -936 -35 -25 c-19 -14 -87 -63 -150 -110 -63 -47 -157 -116 -210 -155 -149
-109 -275 -203 -400 -295 -63 -47 -157 -116 -210 -155 -52 -38 -135 -99 -182
-135 -48 -36 -112 -82 -142 -103 l-55 -37 -1584 2 -1584 3 -1 3488 c-1 1919 1
3491 3 3493 2 2 716 4 1586 4 l1582 0 37 -25z"/>

                    </g>

            </svg>
        </div>

    )
}

export default Logo