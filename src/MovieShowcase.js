import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    // When rendering an element inside another component, you should use a unique key and wrap your elements inside a wrapper element.
    return movieData.map((data, idx) => <MovieCard key={idx} {...data}/>);
  };

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
