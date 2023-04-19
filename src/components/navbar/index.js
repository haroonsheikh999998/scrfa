import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { menus } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../assets/logo.png';
import SearchBar from './SearchBar';
import '../styles/navbar/navbar.css';

const Navbar = () => {
  const [togel, setTogel] = useState({ search: false, menu: false });

  const handlMenuClick = () => {
    setTogel({ search: false, menu: !togel.menu });
  };
  const handlSearchClick = () => {
    setTogel({ search: !togel.search, menu: false });
  };
  return (
    <div>
      <div className='container-fluid p-0 position-relative'>
        <nav className='navbar' id='navbar'>
          <div className='menu-icon'>
            {!togel.menu ? (
              <button type='button' onClick={handlMenuClick}>
                <FontAwesomeIcon icon={faBars} />
                <div>Menu</div>
              </button>
            ) : (
              <button type='button' onClick={handlMenuClick}>
                <FontAwesomeIcon icon={faXmark} />
                <div>Close</div>
              </button>
            )}
          </div>
          <div className='nav-box'>
            <div className='navlogo-main'>
              <div className='nav-logo'>
                <Link to='/'>
                  <img src={logoImage} alt='' />
                </Link>
              </div>
              <div className='nav-lg-text'>
                <h4>
                  South carolina
                  <br />
                  Revenue and fiscal affairs office
                </h4>
                <p>Transforming data into solutions for South Carolina</p>
              </div>
            </div>
            <div className='navbar-menu-right'>
              <ul>
                {menus.map((menu, i) => (
                  <li key={i}>
                    <Link href='/'>{menu}</Link>
                  </li>
                ))}
              <div className={togel.search ? 'searchbar-icon-active' : 'searchbar-icon'} onClick={handlSearchClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              </ul>
            </div>
          </div>
        </nav>
        {togel.menu ? <Menu /> : null}
        {togel.search ? <SearchBar /> : null}
      </div>
    </div>
  );
};

export default Navbar;
