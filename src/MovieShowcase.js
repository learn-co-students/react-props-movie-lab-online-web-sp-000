import React, { Component } from 'react';
import CardFront from './card-components/CardFront.js';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movieDetails => 
      <MovieCard title= {movieDetails.title} IMDBRating= {movieDetails.IMDBRating} genres= {movieDetails.genres} poster= {movieDetails.poster} />
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
