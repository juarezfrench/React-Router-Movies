import React, {useState} from 'react';



const MovieCard = props => {

 let movie = props

  const { title, director, metascore, stars } = movie;


  return(

  <div className="movie-card">
  <h2>{title}</h2>
  <div className="movie-director">
    Director: <em>{director}</em>
  </div>
  <div className="movie-metascore">
    Metascore: <strong>{metascore}</strong>
  </div>
  <h3>Actors</h3>


<div className="save-wrapper">
     
     <div className="save-button">Save</div>
   </div>
</div>
)

};

export default MovieCard;
