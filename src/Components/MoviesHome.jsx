import React, { useEffect, useState } from 'react';

const Category = ({ categoryName }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        api_key: 'be9dd8e37aa1203e8bd9f9175472c527',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=action',
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response.results.slice(0, 6)))
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });

  return (
    <div className="category-container">
      <h2>{categoryName}</h2>
      {movies.map((movie) => (
        <h3 key={movie.id}>{movie.title}</h3>
      ))}
    </div>
  );
};

export default Category;
