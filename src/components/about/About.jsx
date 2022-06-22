import React from 'react';
import { FaAward } from 'react-icons/fa';
import { TbFileCertificate } from 'react-icons/tb';
import { BsFolderPlus } from 'react-icons/bs';
import MeAbout from '../../assets/me-about.jpg';
import './about.css';

const About = () => {
   return (
      <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>

         <div className='container about_container'>
            <div className='about_me'>
               <div className='about_me-image'>
                  <img src={MeAbout} alt='About Me' />
               </div>
            </div>

            <div className='about_content'>
               <div className='about_cards'>
                  <article className='about_card'>
                     <FaAward className='about_icon' />
                     <h5>Experience</h5>
                     <small>1+ Year Working</small>
                  </article>

                  <article className='about_card'>
                     <TbFileCertificate className='about_icon' />
                     <h5>Certifications</h5>
                     <small>4+ Online Certificate</small>
                  </article>

                  <article className='about_card'>
                     <BsFolderPlus className='about_icon' />
                     <h5>Projects</h5>
                     <small>40+ Github Repo</small>
                  </article>
               </div>

               <p>
                  I would describe myself as someone who is friendly, energetic,
                  cooperative, and with a bit of shyness which I usually treat as a
                  strength rather than a weakness. I hold a certificate for Agile Web
                  Developer that I obtained at Project CodeX year 2021. I'm currently
                  learning a front-end framework, ReactJs before entirely focusing on the
                  back-end side of things. You can send me a message on the form below if
                  you have any questions about me.
               </p>

               <a href='#contact' className='btn btn-primary'>
                  Let's Talk
               </a>
            </div>
         </div>
      </section>
   );
};

export default About;
