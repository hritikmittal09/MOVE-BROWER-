import React from 'react'
import Hero from './hero'
import img1 from './My.jpg'


export default function Home(props) {
  return (
    <div>
      <Hero title={props.title}/>
      <div className='container '>
        <div className='row '>
          <div className='col-lg-8 offset-lg-2 my-5 img-fluid  img-thumbnail'>
            <b><h4>Welcome To Movie Browser <br/>
            HERE YOU CAN FIND DETAILS OF ANY MOVIE<br/>
            </h4></b>
            <img src={img1} alt=""/>
            
              
            
            

          </div>

        </div>

      </div>
    </div>
  )
}
