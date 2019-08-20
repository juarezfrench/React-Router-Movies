import React, {useState} from 'react';
import Movie from './Movie'



const MovieCard = props => {


 console.log('MovieCard.js -> %cprops:', 'color: Teal', props)



  return(

  <div className="movie-card">
  <h2>{props.movie.title}</h2>
  <div className="movie-director">
    Director: <em>{props.movie.director}</em>
  </div>
  <div className="movie-metascore">
    Metascore: <strong>{props.movie.metascore}</strong>
  </div>
  <h3>Actors</h3>
  <div className="movie-stars">
    <strong>{props.movie.stars}</strong>
  </div>
<div className="save-wrapper">
     
     <div className="save-button">Save</div>
   </div>
</div>
)

};

export default MovieCard;
