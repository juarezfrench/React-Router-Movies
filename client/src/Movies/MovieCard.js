import React, {useState} from 'react';
import Movie from './Movie';


const MovieCard = props => {

  const [movie, setMovie] = useState(null);
  const { title, director, metascore, stars } = Movie;
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

  {stars.map(star => (
    <div key={star} className="movie-star">
      {star}
    </div>
  ))}

<div className="save-wrapper">
     
     <div className="save-button">Save</div>
   </div>
</div>
)

};

export default MovieCard;
