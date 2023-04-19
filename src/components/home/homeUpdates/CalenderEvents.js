import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { events } from '../../../data';

const CalenderEvents = () => {
 
  return (
    <div className='col-md-6'>
      <div className='calendar-events'>
        <div className='updates-heading'>
          <h2>Calendar of Events</h2>
          <div className='updates-heading-border'></div>
        </div>
        <div className='calender-updates'>
            {events.map((item={}, i)=>(<div className='calender-itm' key={i}>
            <div className='date-box'>
              {item.date?.month} <strong>{item.date.day}</strong>
            </div>
            <div className='calender-itm-text'>
              <button type='button' className={item.btn==='Updated'?"success":"danger"}>{item.btn}</button>
              <h4>{item.heading}</h4>
              <p>
                <FontAwesomeIcon icon={faLocationDot} />
                {item.location}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} />
                {item.time}
              </p>
              <p>
                <FontAwesomeIcon icon={faMobileScreen} />
                {item.phone}
              </p>
            </div>
          </div>))}
        </div>
        <div className='calender-btn-box'>
          <button type='button'>View all events</button>
        </div>
      </div>
    </div>
  );
};

export default CalenderEvents;
