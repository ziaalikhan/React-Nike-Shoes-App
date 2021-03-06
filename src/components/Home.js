import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


function Home() {
    return (
        <div>
        <nav>
          <input id="nav-toggle" type="checkbox" />
          <div className="logo">
            <Link to='/' className='___link'>
            
            <strong >Shoes Store </strong>
            </Link>
          </div>
          <ul className="links">
         
            
            <li><Link to='/'>Product</Link></li>
            <li><Link to='/productList'>ProductList</Link></li>
            
          </ul>
          <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </label>
        </nav>
        <div className="container">
         
        </div>

      
      </div>
    )
}

export default Home;
