import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    
    return movieData.map(movies => 
      <ul>    
      <MovieCard key={movies.toString()} title={movies.title} genres={movies.genres} IMDBRating={movies.IMDBRating} poster={movies.poster}/> 
      </ul>
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
