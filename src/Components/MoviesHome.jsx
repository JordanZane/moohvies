import React, { useEffect, useState } from 'react';

const Category = ({ categoryName, idCategory }) => {
  const [movies, setMovies] = useState([]);

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
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${idCategory}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results.slice(0, 6)))
      .catch((err) => console.error(err));
  }, [idCategory]);

  return (
    <div className="category-container">
      <div className="category-header">
        <h2>{categoryName}</h2>
      </div>
      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-content" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />

            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
