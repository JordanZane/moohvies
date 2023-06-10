import React from 'react';

const NavigationPage = ({ handlePageNumber, clickedButton }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav className="navigation-page">
              <ul>
                <li>
                  <button
                    className={clickedButton === '1' ? 'active' : ''}
                    onClick={() => handlePageNumber('1')}
                  >
                    1
                  </button>
                  <button
                    className={clickedButton === '2' ? 'active' : ''}
                    onClick={() => handlePageNumber('2')}
                  >
                    2
                  </button>
                  <button
                    className={clickedButton === '3' ? 'active' : ''}
                    onClick={() => handlePageNumber('3')}
                  >
                    3
                  </button>
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
