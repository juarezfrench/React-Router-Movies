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
        console.log('MovieList.js -> %cresponse:', 'color: DarkRed', response)
          setMovies(response.data);
          console.log('MovieList.js -> %cresponse.data:', 'color: Chocolate', response.data)
          
        })
             .catch(error => {
          console.error('Server Error', error);
             })

            
          }
       

        ,[])
        
  


        console.log('MovieList.js -> %cmovies:', 'color: Turqoise', movies)
  return (
    
    <div>
      {Array.from(movies).map(movie => (
      <MovieCard
      key={movie.id}
      title={movie.title}
      metascore={movie.metascore}
      director={movie.director}
        movie={movie} 
      

      />
      ))}; 
   </div>
    
               

  
)

}
export default MovieList
