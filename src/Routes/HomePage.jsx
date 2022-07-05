import React from 'react'
import {Link } from 'react-router-dom';



import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <div className='home'>
         <div class="container">
        <h1>Welcome to Food's</h1>
        <span><h1>Kitchen</h1></span>
        
    
        <button>
      


<Link to={'/menu'}> Go to Menu</Link>            
        
        </button>

    </div>
    </div>
  )
}

export default Homepage;