import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';

function ProductList() {
const { id } = useParams();
const shoe = Shoes[id];

if(!shoe)
return <h2>Soory Product Not Found</h2>

console.log(shoe);
    return (
        <div>
            <h1> Welcome to ProductList</h1>

            <div
            className='_link'>
              <h4>{shoe.name}</h4>
              <img src={shoe.img} alt="Shoes" height={150} />
            </div>
            
        </div>
    )
}

export default ProductList;
