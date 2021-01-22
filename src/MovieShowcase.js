import React, { Component } from 'react';
import CardBack from './card-components/CardBack.js';
import CardFront from './card-components/CardFront.js';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
