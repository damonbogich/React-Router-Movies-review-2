import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

import MovieCard from './MovieCard';

export default function Movie(props) {
  console.log(props, 'movie.js props')
  const [movie, setMovie] = useState();
  
  console.log(useParams())
  const {id} = useParams();
  
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(response => {
        console.log('res', response)
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
    <div onClick={() => props.save(movie.id)} className="save-button">Save</div>
    </div>
  );
}
