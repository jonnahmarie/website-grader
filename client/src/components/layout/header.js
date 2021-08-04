import React, {useState, useEffect} from 'react';
import logoFM from '../../images/FerociousMEDIALogo_H-01.png';

const Header = () => {
    const desktop = '30%';
    const mobile = '70%'

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const logoSize = windowWidth >=650 ? desktop : mobile;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    return (
        <div className='secondary-bar'>
            <img src={logoFM} alt='Ferocious Media' style={{width:`${logoSize}`, float:'right'}}/>
        </div>
    )
}

export default Header;