import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const movies = movieData.map(movie => 
      <MovieCard 
        poster={movie.poster} 
        title={movie.title} 
        IMDBRating={movie.IMDBRating} 
        genres={movie.genres} 
      />
    )
    return movies
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
