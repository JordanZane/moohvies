import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MoviesByCategory from './Pages/MoviesByCategory';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/genres/action"
          element={<MoviesByCategory categoryName="Action" idCategory={'28'} />}
        />
        <Route
          path="/genres/scifi"
          element={
            <MoviesByCategory categoryName="Sci-fi" idCategory={'878'} />
          }
        />
        <Route
          path="/genres/comedy"
          element={<MoviesByCategory categoryName="Comedy" idCategory={'35'} />}
        />
        <Route
          path="/genres/drama"
          element={<MoviesByCategory categoryName="Drama" idCategory={'18'} />}
        />

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
