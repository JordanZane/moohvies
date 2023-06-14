import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import NavigationPage from '../Components/NavigationPage';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';

const TopRatedMovies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [numPage, setNumPage] = useState('1');
  const [clickedButton, setClickedButton] = useState('1');
  const [isDataLoading, setIsDataLoading] = useState(true);

  function handlePageNumber(number) {
    setNumPage(number);
    setClickedButton(number);
  }

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${numPage}&primary_release_year=2023&api_key=be9dd8e37aa1203e8bd9f9175472c527`
      );
      const data = await response.json();
      const dataMovies = data.results;
      setTopRatedMovies(dataMovies);
      setIsDataLoading(false);
    };
    fetchTopRatedMovies();
  }, [numPage]);

  return (
    <>
      <Header />
      <main className="movies-list-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Top rated movies</h2>
              {isDataLoading ? (
                <Loader />
              ) : (
                <div className="movies-container">
                  {topRatedMovies.map((movie) => (
                    <div
                      className="movie-content col-xl-3 col-lg-4 col-md-6 col-sm-12"
                      key={movie.id}
                    >
                      <Link to={'/movie/' + movie.id}>
                        <img
                          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </Link>

                      <div className="infos">
                        <h3>{movie.title}</h3>
                        <p>
                          {movie.vote_average}/10
                          <i className="fa-solid fa-star"></i>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <NavigationPage
        clickedButton={clickedButton}
        handlePageNumber={handlePageNumber}
      />
      <Footer />
    </>
  );
};

export default TopRatedMovies;
