import React from 'react';

export default function MovieCardBottom (props) {
  console.log(props, 'movie card bottom props')
  const stars = props.stars;
  return (
      <div>
          <h3>Actors</h3>
            {stars.map(star => (
            <div key={star} className="movie-star">
                {star}
            </div>
            ))}
      </div>
    
  )
}