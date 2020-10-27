import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {


  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    //debugger
    return  (
        movieData.map(movie => {
          //debugger
         return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
        })
    )
    // movieData[0].title} IMDBRating={movieData[0][1]} genres={movieData[0][2]} poster={movieData[0][3]} />
    
    // movieData.map(movie => {
    //   <MovieCard title={movie[0]} IMDBRating={movie[1]} genres={movie[2]} poster={movie[3]} />
    // })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
