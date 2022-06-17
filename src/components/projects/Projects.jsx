import React from 'react';
import ImgShoeCatalogue from '../../assets/shoe-catalogue.png';
// import ImgAvoShopper from '../../assets/avo-shopper.png';
// import ImgWaiter from '../../assets/waiter-webapp.png';
// import ImgExpenseMonitor from '../../assets/xpense-monitor.png';
// import ImgYogaSaga from '../../assets/yoga-saga.png';
import './projects.css';

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Recent Work</h5>
      <h2>My Projects</h2>

      <div className='container projects_container'>
        <article className='projects_item'>
          <div className='projects_item-image'>
            <img src={ImgShoeCatalogue} alt='Shoe Catalogue' />
          </div>

          <h3>Projects Title</h3>
          <a href='https://github.com' className='btn' target='_blank'>
            Github Repo
          </a>
          <a href='https://heroku.com' className='btn btn-primary' target='_blank'>
            Webpage
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
