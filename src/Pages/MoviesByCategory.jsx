import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import NavigationPage from '../Components/NavigationPage';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';

const MoviesByCategory = () => {
  const { category } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [numPage, setNumPage] = useState('1');
  const [clickedButton, setClickedButton] = useState('1');
  const [isDataLoading, setIsDataLoading] = useState(true);

  function handlePageNumber(number) {
    setNumPage(number);
    setClickedButton(number);
  }

  useEffect(() => {
    const idCategory = getCategoryID(category);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTlkZDhlMzdhYTEyMDNlOGJkOWY5MTc1NDcyYzUyNyIsInN1YiI6IjY0N2YyNjVlMTc0OTczMDExODcyYmI5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kjqc_8aGnDN4NK_2Wwyruo_iD3fna0uhFpOH2LfwQQM',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${numPage}&sort_by=popularity.desc&with_genres=${idCategory}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovieData(response.results))
      .catch((err) => console.error(err));
    setIsDataLoading(false);
  }, [numPage, category]);

  const getCategoryID = (categoryName) => {
    let categoryId;
    switch (categoryName.toLowerCase()) {
      case 'action':
        categoryId = '28';
        break;
      case 'sci-fi':
        categoryId = '878';
        break;
      case 'comedy':
        categoryId = '35';
        break;
      case 'drama':
        categoryId = '18';
        break;
      case 'romance':
        categoryId = '10749';
        break;
      case 'horror':
        categoryId = '27';
        break;
      case 'thriller':
        categoryId = '53';
        break;
      case 'crime':
        categoryId = '80';
        break;
      case 'mystery':
        categoryId = '9648';
        break;
      case 'family':
        categoryId = '10751';
        break;
      case 'documentary':
        categoryId = '99';
        break;
      case 'western':
        categoryId = '37';
        break;
      case 'animation':
        categoryId = '16';
        break;
      default:
        categoryId = '';
        break;
    }

    return categoryId;
  };

  return (
    <>
      <Header />
      <div id="top-page"></div>
      <main className="movies-list-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>{category}</h2>
              {isDataLoading ? (
                <Loader />
              ) : (
                <div className="movies-container">
                  {movieData.map((movie) => (
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

export default MoviesByCategory;
