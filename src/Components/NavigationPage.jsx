import React from 'react';

const NavigationPage = ({ handlePageNumber }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => handlePageNumber(1)}>1</button>
            <button onClick={() => handlePageNumber(2)}>2</button>
            <button onClick={() => handlePageNumber(3)}>3</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationPage;
