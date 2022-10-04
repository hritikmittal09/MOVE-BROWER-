
import './App.css';
import About from './components/about';
import Home from './components/home';
import Header from './components/websiteheader';
import { Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Search from './components/search';
import React from 'react';

function App() {
  const [seach_title,set_search_title] = useState("")
  const [seach_resulta,set_search_results] = useState([])
  React.useEffect(()=>{
    if (seach_title) {
      
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e0fb82f25eeef255dc02817368a0636&language=en-US&query=${seach_title}&page=1&include_adult=false`)
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      set_search_results(data.results)
      
    })
  }
  },[seach_title])
  
  return (
    <div className="App">
      <Header serach = {seach_title} set_search = {set_search_title}/>
      <Routes>
        <Route path='/' element={<Home title = "MOVIE BROWSER"/>} />
        <Route path='/about' element={<About title = "About page"/>} />
        <Route path='/search'element ={ <Search title={seach_title}  search_results={seach_resulta}/>} />

      </Routes>
      
          
          
            
          
        
      
      
    </div>
  );
}

export default App;
