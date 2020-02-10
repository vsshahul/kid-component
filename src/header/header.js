import React from 'react';
import './header.css'
import logo from './ideaa.png'
import bell from './bell.png';
const Header = (props) => {
    return(
    <header className="header">
       <img className='logo' src={logo} alt="Logo" target='_blank' />
       <div className='nav'>
         <a className='bell' href='./'> <img src={bell} alt='bell'/> </a> 
         <div className='userName' >Alejandro Martinez</div>
         <div className='userPicture'></div>
         </div>
    </header>
    );
};

export default Header;