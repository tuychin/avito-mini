import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import SearchPanel from '../search-panel';

import logo from './avito-mini-icon.png';
import './navbar.css';

const Navbar = ({ filter }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={logo} alt="logo" />
        Avito-Mini
      </Link>
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item${filter === 'immovable' ? ' active' : ''}`}>
            <Link className="nav-link" to="/immovable">Недвижимость</Link>
          </li>
          <li className={`nav-item${filter === 'cameras' ? ' active' : ''}`}>
            <Link className="nav-link" to="/cameras">Камеры</Link>
          </li>
          <li className={`nav-item${filter === 'auto' ? ' active' : ''}`}>
            <Link className="nav-link" to="/auto">Автомобили</Link>
          </li>
          <li className={`nav-item${filter === 'laptops' ? ' active' : ''}`}>
            <Link className="nav-link" to="/laptops">Ноутбуки</Link>
          </li>
          <li className={`nav-item${filter === 'favorites' ? ' active' : ''}`}>
            <Link className="nav-link" to="/favorites">Избранное ❤</Link>
          </li>
        </ul>
        <SearchPanel />
      </div>
    </nav>
  );
}

const mapStateToProps = ({ filter }) => {
  return { filter };
}

export default connect(mapStateToProps)(Navbar);