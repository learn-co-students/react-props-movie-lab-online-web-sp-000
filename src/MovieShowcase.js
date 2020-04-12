import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((item, index) => <MovieCard key={index} {...item}/>) //WHY spread operator here? "The spread operator lets you essentially drop an array in and get its values." How could I write without?
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}