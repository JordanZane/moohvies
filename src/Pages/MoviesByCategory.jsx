import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';

const MoviesByCategory = ({ categoryName, idCategory }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTlkZDhlMzdhYTEyMDNlOGJkOWY5MTc1NDcyYzUyNyIsInN1YiI6IjY0N2YyNjVlMTc0OTczMDExODcyYmI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kjqc_8aGnDN4NK_2Wwyruo_iD3fna0uhFpOH2LfwQQM',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${idCategory}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err));
  }, [idCategory]);

  return (
    <>
      <Header />
      <main className="actions-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>{categoryName}</h2>
              <div className="movies-container">
                {movieData.map((movie) => (
                  <div
                    className="movie-content col-xl-2 col-lg-4 col-md-6 col-sm-12"
                    key={movie.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={movie.title}
                    />
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

export default MoviesByCategory;
