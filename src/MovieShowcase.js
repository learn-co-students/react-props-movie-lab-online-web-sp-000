import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((movie) => 
    <MovieShowcase title={movie[0]}/>,
    <MovieShowcase IMDBRating={movie[1]}/>,
    <MovieShowcase genres={movie[2]}/>,
    <MovieShowcase poster={movie[3]}/>
    );
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
