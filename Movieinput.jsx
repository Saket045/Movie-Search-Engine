import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import './movie.css'
const URL='https://omdbapi.com?apikey=fe2f6c44';
const Movieinput = () => {
	const [name,setName]=useState('');
	const[movies,setMovies]=useState([]);
const searchMovie= async(name)=>{
      const res=await fetch(`${URL}&s=${name}`);
	  const data= await res.json();
         setMovies(data.Search);
}
useEffect(()=>{
	searchMovie('Batman')
},[])
  return (
	<div className='cover w-full text-gray-200 pt-8'>
		<div className=' mb-12'>
	 <div><h1 className='text-center text-6xl font-bold mb-4 text-zinc-400'>ECLIPSE</h1></div> 
	  <div className=' flex items-center justify-center'> <input type="text" className='px-2 rounded-2xl bg-transparent h-12 w-9/12 border-2 
	  border-zinc-400' value={name} placeholder='Search here' onChange={(e)=>{setName(e.target.value)}} />
	  <button onClick={()=>searchMovie(name)}><img src="https://www.freeiconspng.com/uploads/search-icon-png-22.png"
	   alt="search" className=' w-14 h-14 ml-4'/></button>
	  </div></div>
	  {
		movies?.length> 0 ? (
		<div className='card grid grid-cols-3 mx-8 gap-10'>{movies.map((movie)=><MovieCard movie={movie}/>)}</div>) : (<div><h1>No Results  Found! Try Again.</h1></div>)	
	  }
	</div>
  )
}
export default Movieinput
