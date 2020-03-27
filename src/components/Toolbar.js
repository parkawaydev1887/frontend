import React from 'react';
import DrawerToggleButton from './DrawerToggleButton.js';
import {Link} from 'react-router-dom';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar__logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <Link to="/planned-parking">
              <li>Planned Parking</li>
          </Link>
          <Link to="/parkmates">
              <li>Parkmates</li>
          </Link>
          <Link to="/account">
              <li>Account</li>
          </Link>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
