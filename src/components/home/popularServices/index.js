import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../../data';

function PopularServices() {
  return (
    <div>
      <div className='popular-services'>
        <div className='container'>
          <div className='main-heading'>
            <h2>Popular Services And Links</h2>
            <div className='popular-heading-border'/>
          </div>
          <div className='row mt-5'>
            {services.map((service, i) => (
              <div className='col-md-4' key={i}>
                <div className='popular-links'>
                  <div className='poplink'>
                    <Link to='#'>{service}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularServices;
