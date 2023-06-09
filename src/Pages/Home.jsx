import React from 'react';
import Header from '../Components/Header';
import MoviesHome from '../Components/MoviesHome';
import RecentMovies from '../Components/RecentMovies';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <RecentMovies />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <MoviesHome categoryName={'Action'} idCategory={'28'} />
                <MoviesHome categoryName={'Sci-fi'} idCategory={'878'} />
                <MoviesHome categoryName={'Comedy'} idCategory={'35'} />
                <MoviesHome categoryName={'Drama'} idCategory={'18'} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
