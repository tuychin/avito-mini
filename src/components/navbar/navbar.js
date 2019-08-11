import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">Avito-Mini</Link>
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
          <li className="nav-item">
            <Link className="nav-link" to="/immovable">Недвижимость</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cameras">Фотоаппараты</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/auto">Автомобили</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/laptops">Ноутбуки</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Избранное ❤</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Поиск"/>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;