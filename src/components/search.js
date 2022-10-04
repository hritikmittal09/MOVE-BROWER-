import React from 'react'
import Hero from './hero'
import Moviecard from './movie card'
 




function Search(pops) {
  const html_results = pops.search_results.map((obj,i)=>{
    return <div  key={i}><Moviecard movie={obj} /></div>
  })
  return (
    <div>
        <h1><Hero title= {`You  Have Search For ${pops.title} `}/></h1>
        <div className='container '>
        <div className='row'>
          <div className='col-lg-8 offset-lg-2 my-5'>
            {html_results}
            
            
            
          </div>

        </div>

      </div>

      
    </div>
  )
}

export default Search
