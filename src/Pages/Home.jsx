import React from 'react';
import Header from '../Components/Header';
import MoviesHome from '../Components/MoviesHome';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MoviesHome categoryName={'Action'} idCategory={'action'} />
                <MoviesHome
                  categoryName={'Science Fiction'}
                  idCategory={'scifi'}
                />
                <MoviesHome categoryName={'Comedy'} idCategory={'comedy'} />
                <MoviesHome categoryName={'Drama'} idCategory={'drama'} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
