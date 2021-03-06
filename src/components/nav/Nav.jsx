import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { BsFolderCheck } from 'react-icons/bs';
import { RiStackLine } from 'react-icons/ri';
import './nav.css';

const Nav = () => {
   const [activeNav, setActiveNav] = useState('#header');

   return (
      <nav>
         <a
            href='#header'
            onClick={() => setActiveNav('#header')}
            className={activeNav === '#header' ? 'active' : ''}
         >
            <AiOutlineHome />
         </a>
         <a
            href='#about'
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' : ''}
         >
            <AiOutlineUser />
         </a>
         <a
            href='#experience'
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' : ''}
         >
            <RiStackLine />
         </a>
         <a
            href='#projects'
            onClick={() => setActiveNav('#projects')}
            className={activeNav === '#projects' ? 'active' : ''}
         >
            <BsFolderCheck />
         </a>
         <a
            href='#contact'
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active' : ''}
         >
            <RiKakaoTalkLine />
         </a>
      </nav>
   );
};

export default Nav;
