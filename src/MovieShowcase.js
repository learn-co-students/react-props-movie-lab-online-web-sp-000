import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    let i = 0;
     return (
       movieData.map((movie) =>
       <MovieCard key={i++} IMDBRating={movie.IMDBRating} title={movie.title} genres={movie.genres} poster={movie.poster}/>
      ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
