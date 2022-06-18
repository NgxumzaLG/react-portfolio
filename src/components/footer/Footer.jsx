import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import './footer.css';

const Footer = () => {
   return (
      <footer id='footer'>
         <a
            href='https://www.linkedin.com/in/lusanda-ngxumza-5121991bb'
            className='footer_logo'
            target='_blank'
         >
            NgxumzaLG
         </a>

         <ul className='permalinks'>
            <li>
               <a href='#home'>Home</a>
            </li>
            <li>
               <a href='#about'>About</a>
            </li>
            <li>
               <a href='#experience'>Experience</a>
            </li>
            <li>
               <a href='#projects'>Projects</a>
            </li>
            <li>
               <a href='#contacts'>Contacts</a>
            </li>
         </ul>

         <div className='footer_socials'>
            <a href='https://www.facebook.com/lusanda.ngxumza.g6ix' target='_blank'>
               <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/ngxumza_lsa' target='_blank'>
               <FiInstagram />
            </a>
            <a href='https://twitter.com/Ngxumza_lsa' target='_blank'>
               <IoLogoTwitter />
            </a>
         </div>

         <div className='footer_copyright'>
            <small>&copy; NgxumzaLG. All rights reserved.</small>
         </div>
      </footer>
   );
};

export default Footer;
