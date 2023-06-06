import React from 'react';
import Header from '../Components/Header';
import MoviesHome from '../Components/MoviesHome';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MoviesHome categoryName={'Action'} idCategory={'28'} />
                <MoviesHome
                  categoryName={'Science Fiction'}
                  idCategory={'878'}
                />
                <MoviesHome categoryName={'Comedy'} idCategory={'35'} />
                <MoviesHome categoryName={'Drama'} idCategory={'18'} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
