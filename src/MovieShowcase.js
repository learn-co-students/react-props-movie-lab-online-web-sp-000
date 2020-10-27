import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {
  movieData = [
    {
      title: 'Choux and Maru go to Istanbul',
      IMDBRating: 3,
      genres: ['cats', 'adventure', 'romance'],
      poster: 'choux-maru-istanbul'
    },
    {
      title: 'Choux and Maru',
      IMDBRating: 4,
      genres: ['cats', 'drama', 'romance'],
      poster: 'choux-maru-part-1'
    },
    {
      title: 'ChromeBoi',
      IMDBRating: 5,
      genres: ['thriller', 'romance'],
      poster: 'chromeboi'
    },
    
    {
      title: 'Escape from VIM',
      IMDBRating: 0,
      genres: ['an awful movie'],
      poster: 'escape-from-vim'
    },
    {
      title: 'GoldenEye',
      IMDBRating: 4,
      genres: ['mystery', 'thriller', 'crime'],
      poster: 'goldeneye'
    },
    {
      title: 'Handsome Boy Modeling Club',
      IMDBRating: 2,
      genres: ['coming of age', 'romance'],
      poster: 'handsome-boy'
    },
    {
      title: "Maru's Spinoff: Trapped in the Sheets",
      IMDBRating: 5,
      genres: ['Adventure'],
      poster: 'marus-spinoff'
    },
    {
      title: 'Terrance: King of the Rats',
      IMDBRating: 1,
      genres: ['drama'],
      poster: 'terrance-king'
    },
    {
      title: 'The Trash Man',
      IMDBRating: 5,
      genres: ['crime', 'period piece'],
      poster: 'the-trash-man'
    },
  ]

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
