import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieSearch = () => {
  const [moviesSearch, setMovieSearch] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const { searchMovie } = useParams();

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&primary_release_year=2023&page=1&sort_by=popularity.desc&api_key=be9dd8e37aa1203e8bd9f9175472c527`
        );
        const data = await response.json();
        console.log(data);
        const movies = data.results;
        setMovieSearch(movies);
      } catch (error) {
        console.log('error fetching movies search :' + error);
      }
    };

    fetchMovies();
  }, [searchMovie]);

  return (
    <>
      <Header />
      <main className="movies-list-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>{searchMovie}</h2>
              <div className="movies-container">
                {moviesSearch.map((movie) => (
                  <div
                    className="movie-content col-xl-3 col-lg-4 col-md-6 col-sm-12"
                    key={movie.id}
                  >
                    <Link
                      to={'/movie/' + movie.id}
                      onClick={() => handleMovieClick(movie.id)}
                    >
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
        {selectedMovieId && <MovieCard selectedMovieId={selectedMovieId} />}
      </main>
    </>
  );
};

export default MovieSearch;
