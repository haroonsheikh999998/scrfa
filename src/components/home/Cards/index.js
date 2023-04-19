import React from 'react';
import { cards } from '../../../data';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div>
      <div className='data-structure-main'>
        <div className='container'>
          <div className='row'>
            {cards.map((card, i) => (
              <div className='col-md-3' key={i}>
                <div className='data-item d-block'>
                  <img src={card.image} alt='data research p-3' />
                  <Link to='/'>{card.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
