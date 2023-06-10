import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=be9dd8e37aa1203e8bd9f9175472c527`
      );
      const data = await response.json();
      const dataMovies = data.results;
      console.log(dataMovies);
      setPopularMovies(dataMovies);
    };
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Header />
      <main className="movies-list-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Most popular movies</h2>
              <div className="movies-container">
                {popularMovies.map((movie) => (
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PopularMovies;
