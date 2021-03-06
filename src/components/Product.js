import React from "react";
import Shoes from "./../Shoes.json";
import { Link } from "react-router-dom";
import Footer from './Footer'
import './Home.css';

function Product() {
  
    console.log(Shoes);
  return (
    <div>
      <h1>Product</h1>

      <div className="_products">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName}
            className='_link'
            to={`/productList/${keyName}`}
            >
              <h4 >{shoe.name}</h4>
              <img src={shoe.img} alt="Shoes" height={150} />
            </Link>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Product;
