import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/home/home.css';
import '../styles/breakpoints/breakpoints.css';

// Components
import Cards from './Cards';
import HomeUpdates from './homeUpdates';
import PopularServices from './popularServices';
import HeroSection from './heroSection';

function Home(props) {
  return (
    <>
      <HeroSection />
      <Cards />
      <PopularServices />
      <HomeUpdates />

      <div className='container'>
        <div className='scroll-box'>
          <div className='backtotop-icon'>
            <span>Back to Top</span>
            <div className='angle-icons'>
              <a href='#navbar' className='up-angle'>
                <FontAwesomeIcon icon={faAngleUp} />
              </a>
              <span className='down-angle'>
                <FontAwesomeIcon icon={faAngleDown} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
