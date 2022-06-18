import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me-removebg.png';
import './header.css';

const Header = () => {
   return (
      <header id='header'>
         <div className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Lusanda Ngxumza</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className='me'>
               <img src={ME} alt='me' />
            </div>

            <a href='#footer' className='scroll_down'>
               Scroll Down
            </a>
         </div>
      </header>
   );
};

export default Header;
