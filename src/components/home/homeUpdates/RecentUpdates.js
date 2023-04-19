import React from 'react';
import { Link } from 'react-router-dom';
import { recentUpdates } from '../../../data';

const RecentUpdates = () => {
  return (
    <div className='col-md-6'>
      <div className='recent-updates'>
        <div className='updates-heading pb-3'>
          <h2>Recent Updates</h2>
          <div className='updates-heading-border'></div>
        </div>
        <div className='recent-updates'>
          {recentUpdates.map((update, i) => (
            <div className='rec-item' key={i}>
              <Link to='/'>{update.link}</Link>
              <p>{update.description}</p>
              <p>
                <strong>Published:</strong>
                <span>{update.published_at}</span>
                <button type='button' className='update-noti'>
                  {update.button}
                </button>
              </p>
            </div>
          ))}
          <div className='rec-bt-box'>
            <button type='button'>View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
