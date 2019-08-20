import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';




const MovieList = props =>  {
  const [movies, setMovies] = useState({})
  useEffect(() => {
    
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
          console.log('MovieList.js -> %cresponse.data:', 'color: Chocolate', response.data)
          
        })
             .catch(error => {
          console.error('Server Error', error);
             })

            
          }
       

        ,[])
        
  

        
        const { title, director, metascore, stars } = movies;
 
  return (
    
    <div>
      {Array.from(movies).map(movie => (
      <MovieCard
      key={movie.id} 
      movie={movie} 
      title={title}

      />
      ))}; 
   </div>
    
               

  
)

}
export default MovieList
