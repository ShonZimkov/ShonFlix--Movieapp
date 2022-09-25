import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import { MovieState } from './components/Context/MovieContext';

const App = () => {
  return (
    <MovieState>
      <Hero/>
    </MovieState>

  );
}

export default App;
