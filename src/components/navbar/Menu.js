import React from 'react';
import { togelMenus, togelSubMenus } from '../../data';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className='navbar-menu'>
      <div className='row'>
        <div className='col-md-3 col-sm-3'>
          <div className='navMenu-inner'>
            <ul>
              {togelMenus.map((menu, i) => (
                <li key={i}>
                  <Link href='/'>{menu}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-md-9 col-sm-9'>
          <div className='row'>
            {togelSubMenus.map((subMenu, i) => (
              <div className='nav-menudata col-md-4 col-sm-4'>
                <div className='nav-databox'>
                  <div className='databox-itm' key={i}>
                    <div className='databox-heading'>
                      <h3>{subMenu.name}</h3>
                      <div className='databox-border' />
                    </div>
                    <ul>
                      {subMenu.menus.map((item, j) => (
                        <li key={j}>
                          <Link to='/'>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
