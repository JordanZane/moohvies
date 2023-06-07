import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const MovieCard = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=be9dd8e37aa1203e8bd9f9175472c527`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="details-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="movie-details-container">
                <h2>{movie.title}</h2>
                <div className="details-infos">
                  <div className="img-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="infos-content">
                    <p>Release date : {movie.release_date}</p>
                    <p>Synopsis : {movie.overview}</p>
                  </div>
                  <div className="rating-container">
                    <p>Vote : {movie.vote_count}</p>
                    <p>{movie.vote_average.toFixed(1)}/10</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
