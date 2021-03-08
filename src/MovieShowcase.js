import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((data, id) => 
      <MovieCard key={id} {...data} />)
    };
  

  render() {
    return <div id="movie-showcase">
        {this.generateMovieCards()}</div>;
  }
}

export default MovieShowcase;