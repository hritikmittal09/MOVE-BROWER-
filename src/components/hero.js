import React from 'react'

function Hero(props) {
  return (
    <div className='bg-dark p-5 text-white my-2'>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Hero
