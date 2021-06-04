import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
   return movieData.map(function(e){
      return (
      
        <ul>
          <MovieCard title={e.title} IMDBRating={e.IMDBRating} genres={e.genres} poster={e.poster}/>
          
        </ul>
        
      )
    })

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        {/* <MovieCard />  */}
      </div>
     
    )
  }
}
