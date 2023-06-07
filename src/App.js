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
          path="/genres/sci-fi"
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
        <Route
          path="/genres/romance"
          element={
            <MoviesByCategory categoryName="Romance" idCategory={'10749'} />
          }
        />
        <Route
          path="/genres/horror"
          element={<MoviesByCategory categoryName="Horror" idCategory={'27'} />}
        />
        <Route
          path="/genres/thriller"
          element={
            <MoviesByCategory categoryName="Thriller" idCategory={'53'} />
          }
        />
        <Route
          path="/genres/crime"
          element={<MoviesByCategory categoryName="Crime" idCategory={'80'} />}
        />
        <Route
          path="/genres/mystery"
          element={
            <MoviesByCategory categoryName="Mystery" idCategory={'9648'} />
          }
        />
        <Route
          path="/genres/familly"
          element={
            <MoviesByCategory categoryName="Familly" idCategory={'10751'} />
          }
        />
        <Route
          path="/genres/documentary"
          element={
            <MoviesByCategory categoryName="Documentary" idCategory={'99'} />
          }
        />
        <Route
          path="/genres/western"
          element={
            <MoviesByCategory categoryName="Western" idCategory={'37'} />
          }
        />
        <Route
          path="/genres/animation"
          element={
            <MoviesByCategory categoryName="Animation" idCategory={'16'} />
          }
        />

        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
