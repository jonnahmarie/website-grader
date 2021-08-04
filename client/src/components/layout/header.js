import React from 'react';
import logoFM from '../../images/FerociousMEDIALogo_H-01.png';

const Header = () => {
    return (
        <div className='secondary-bar'>
            <img src={logoFM} alt='Ferocious Media' style={{width:'30%', float:'right'}}/>
        </div>
    )
}

export default Header;