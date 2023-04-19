import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer_logo.png';
import '../styles/footer/footer.css';

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='footer-col'>
                <h4>
                  <div>South Carolina</div> <div>Revenue and Fiscal Affairs Office</div>
                </h4>
                <img src={footerLogo} alt='Footer Logo' />
              </div>
            </div>
            <div className='col-md-3'>
              <div className='footer-col'>
                <ul>
                  <li>
                    <Link to='/'>Privacy Statement</Link>
                  </li>
                  <li>
                    <Link to='/'>FOIA</Link>
                  </li>
                  <li>
                    <Link to='/'>Disclosures and Reporting</Link>
                  </li>
                  <li>
                    <Link to='/'>Report Fraud</Link>
                  </li>
                  <li>
                    <Link to='/'>Accessibility</Link>
                  </li>
                  <li>
                    <Link to='/'>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='footer-col'>
                <ul>
                  <li>
                    <strong>Main Office</strong>
                    <p>1000 Assembly St, Rembert Dennis Building, Suite 421 Columbia, SC 29201</p>
                  </li>
                  <li>
                    <strong>Geodetic survey section</strong>
                    <p>5 Geology Rd Columbia, SC 29212</p>
                  </li>
                  <li>
                    <strong>Health and demographics division</strong>
                    <p>1000 Assembly St, Rembert Dennis Building, Suite 240 Columbia, SC 29201</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
