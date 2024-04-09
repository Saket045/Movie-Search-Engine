import React from 'react'

const MovieCard = ({movie}) => {

  return (
	<div>
    <div>
    <p>{movie.title}</p>
    <img src={movie.Poster!="N/A" ? movie.Poster: "https://via.placeholder.com/400" } alt="{movie.title}" />
 
    </div>
      <div className='text-zinc-400 font-sans font-semibold'>
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
    </div>
	</div>
  )
}

export default MovieCard
