import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logoImg from '../assets/images/cow.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>
              <Link to="/">
                Moohvies
                <img src={logoImg} alt="Moohvies" />
              </Link>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <nav className="menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                    Genres
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/genres/action">
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/genres/scifi">
                      Sci-Fi
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/genres/comedy">
                      Comedy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
