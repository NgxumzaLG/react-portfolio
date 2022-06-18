import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
   return (
      <div className='header_socials'>
         <a href='https://www.linkedin.com/in/lusanda-ngxumza-5121991bb' target='-_blank'>
            <BsLinkedin />
         </a>
         <a href='https://github.com/NgxumzaLG' target='-_blank'>
            <FaGithub />
         </a>
         <a href='https://www.instagram.com/ngxumza_lsa' target='-_blank'>
            <FaInstagram />
         </a>
      </div>
   );
};

export default HeaderSocials;
