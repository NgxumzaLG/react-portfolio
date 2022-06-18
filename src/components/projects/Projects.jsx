import React from 'react';
import ImgShoeCatalogue from '../../assets/shoe-catalogue.png';
import ImgAvoShopper from '../../assets/avo-shopper.png';
import ImgWaiter from '../../assets/waiter-webapp.png';
import ImgExpenseMonitor from '../../assets/xpense-monitor.png';
import ImgYogaSaga from '../../assets/yoga-saga.png';
import ImgRegistration from '../../assets/registration-webapp.png';
import './projects.css';

const data = [
  {
    id: 1,
    title: 'Shoe Catalogue',
    image: ImgShoeCatalogue,
    github: 'https://github.com/NgxumzaLG/shoe_catalogue',
    link: 'https://ngxumzalg.github.io/shoe_catalogue/',
  },
  {
    id: 2,
    title: 'Avo Shopper',
    image: ImgAvoShopper,
    github: 'https://github.com/NgxumzaLG/avo_shopper',
    link: 'https://avo-shopper-webapp99.herokuapp.com/',
  },
  {
    id: 3,
    title: 'X-pense Monitor',
    image: ImgExpenseMonitor,
    github: 'https://github.com/NgxumzaLG/xpense-monitor',
    link: 'https://ishmael-sikhikhi.github.io/xpense-monitor/',
  },
  {
    id: 4,
    title: 'Yoga Saga',
    image: ImgYogaSaga,
    github: 'https://github.com/NgxumzaLG/Yoga-Saga',
    link: 'https://yoga-saga.herokuapp.com/',
  },
  {
    id: 5,
    title: 'Waiter Availability',
    image: ImgWaiter,
    github: 'https://github.com/NgxumzaLG/waiter_webapp',
    link: 'https://waiter-webapp99.herokuapp.com/',
  },
  {
    id: 6,
    title: 'Registration Numbers',
    image: ImgRegistration,
    github: 'https://github.com/NgxumzaLG/registration_numbers-webapp',
    link: 'https://registrations-webapp99.herokuapp.com/',
  },
];

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Recent Work</h5>
      <h2>My Projects</h2>

      <div className='container projects_container'>
        {data.map((project) => {
          const { id, title, image, github, link } = project;

          return (
            <article key={id} className='projects_item'>
              <div className='projects_item-image'>
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className='projects_item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github Repo
                </a>
                <a href={link} className='btn btn-primary' target='_blank'>
                  Webpage
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
