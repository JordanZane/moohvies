import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MoviesByCategory from './Pages/MoviesByCategory';
import MovieCard from './Components/MovieCard';
import MovieSearch from './Pages/MovieSearch';
import PopularMovies from './Pages/PopularMovies';
import TopRatedMovies from './Pages/TopRatedMovies';
import RecentMoviesPage from './Pages/RecentMoviesPage';
import Legal from './Pages/Legal';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:category" element={<MoviesByCategory />} />
        <Route path="/movie/:id" element={<MovieCard />} />
        <Route path="/search/:searchMovie" element={<MovieSearch />} />
        <Route path="/most-popular" element={<PopularMovies />} />
        <Route path="/top-rated" element={<TopRatedMovies />} />
        <Route path="/recent-movies" element={<RecentMoviesPage />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
