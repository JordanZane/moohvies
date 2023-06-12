import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPage = ({ handlePageNumber, clickedButton }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navigation-page">
              <ul>
                <li>
                  <Link
                    className={clickedButton === '1' ? 'active' : ''}
                    onClick={() => handlePageNumber('1')}
                  >
                    1
                  </Link>
                  <Link
                    className={clickedButton === '2' ? 'active' : ''}
                    onClick={() => handlePageNumber('2')}
                  >
                    2
                  </Link>
                  <Link
                    className={clickedButton === '3' ? 'active' : ''}
                    onClick={() => handlePageNumber('3')}
                  >
                    3
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationPage;
