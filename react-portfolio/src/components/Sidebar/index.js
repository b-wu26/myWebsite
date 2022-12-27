import { Link } from 'react-router-dom'
import './index.scss'
import LogoB from '../../assets/images/logo-b.png'
import LogoSubtitle from '../../assets/images/logo_bsub.png'

import LogoS from '../../assets/images/logo-s.png'
import LogoSSubtitle from '../../assets/images/logo_sub.png'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoB} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Brenden"/>
            {/* <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSSubtitle} alt="slobodan" /> */}
        </Link>
    </div>

)

export default Sidebar