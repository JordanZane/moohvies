import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MoviesByCategory from './Pages/MoviesByCategory';
import MovieCard from './Components/MovieCard';
import MovieSearch from './Components/MovieSearch';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:category" element={<MoviesByCategory />} />
        <Route path="/movie/:id" element={<MovieCard />} />
        <Route path="/search/:searchMovie" element={<MovieSearch />} />

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
