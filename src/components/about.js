import React from 'react'
import Hero from './hero'
export default function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <div className='container '>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
           
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit debitis nihil temporibus. Deleniti beatae magnam, quis dignissimos est cupiditate, aspernatur iste animi sit excepturi sed reiciendis quisquam labore sint!

          <img src="my.jpg" alt="" />
          </div>

        </div>

      </div>
      
    </div>
  )
}
