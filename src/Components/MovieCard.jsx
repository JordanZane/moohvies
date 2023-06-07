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
                <div className="details-infos">
                  <div className="img-container col-md-4 col-sm-12">
                    <img
                      src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="infos-content col-md-8 col-sm-12">
                    <h2>{movie.title}</h2>
                    <p>
                      <span>Release date :</span> {movie.release_date}
                    </p>
                    <p>
                      <span>Synopsis :</span> {movie.overview}
                    </p>
                  </div>
                  <div className="rating-container">
                    <p>Vote : {movie.vote_count}</p>
                    <p>
                      {movie.vote_average.toFixed(1)}/10{' '}
                      <i className="fa-solid fa-star"></i>
                    </p>
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
