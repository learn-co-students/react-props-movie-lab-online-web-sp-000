import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

   // generateMovieCards = () => {
   //      const movieArr = movieData.map(movie => {
   //          <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
   //
   //  }
    generateMovieCards = () => {
       return movieData.map((movie, index) => {
         return <MovieCard key={index} title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
       });
    }
   //   const movieArr = movieData.map((props) =>
   //    console.log(<MovieCard title={this.props.title} />)
   // );
   //    // console.log(movieData.map((data, idx))
    // return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);
      // });
        // return movieArr;
        // console.log(movieArr);
  // }


    // let newArr = movieData.map(data=>"<MovieCard title="+data.title+"IMDBRating"+data.IMDBRating+"genres"+data.genres+"poster"+data.poster);
    // console.log(newArr);

// map over your movieData array and return the correct
    // let mtitle= ["Mad Max", "Titanic"];
    // let mgenre= ["romance", "action"];
    //
    //
    //    // <MovieCard.props.title/>
    // return (
    //    <div> className="movie-card"
    //      <MovieCard title={mtitle[0]} genre={mgenre[0]} />
    //      <MovieCard title={mtitle[1]} genre={mgenre[1]} />
    //    </div>
     // );




  render() {
    return (
      <div id="movie-showcase">
         {this.generateMovieCards()}

      </div>
    )
  }
}
