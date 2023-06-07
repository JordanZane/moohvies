import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MoviesByCategory from './Pages/MoviesByCategory';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:category" element={<MoviesByCategory />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
