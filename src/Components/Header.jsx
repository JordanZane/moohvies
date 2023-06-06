import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

import logoImg from '../assets/images/cow.svg';

const Header = () => {
  return (
    <>
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
        </div>
        <Navigation />
      </header>
    </>
  );
};

export default Header;
