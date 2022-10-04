import React from 'react'

export default function Moviecard(pops) {
  const movieImage = `https://image.tmdb.org/t/p/original/${pops.movie.poster_path}`
  return (
    <>
    <div>
      <div className='col-lg-5 col-md-3 col-5 my-6'>
    <div className="card">
  <img src={movieImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{pops.movie.original_title}</h5>
    <p className="card-text">{pops.movie.overview}<br/>
    <b>Release Date  </b>{pops.movie.release_date}<br/>
    <b>Popularity</b>{pops.movie.popularity}</p>
    
  </div></div>
</div>
    </div>
    </>
  )
}
