import React from 'react';
import MovieCardBottom from './MovieCardBottom';

export default function MovieCard (props) {
  console.log(props, 'movie card props')
  return (
    <div className="movie-card">
        <h2>{props.movie.title}</h2>
        <div className="movie-director">
          Director: <em>{props.movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.movie.metascore}</strong>
        </div>
        {props.movie.stars &&
        <MovieCardBottom stars={props.movie.stars}/>
        }
      </div>
  )
}
