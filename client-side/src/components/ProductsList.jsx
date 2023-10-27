import React, { useState } from 'react'
import ProductCard from './ProductCard'

const ProductsList = () => {

  const [products, setProducts] = useState([
    {
        title: "Shirt 1",
        description: "Amazon Brand - Symbol Men's Regular Fit Shirt",
        price: "345",
        quantity: '100',
        img: "17-dress-shirt-png-image-thumb.png"
    },
    {
        title: "Shirt 2",
        description: "Amazon Brand - Symbol Men's Regular Fit Shirt",
        price: "345",
        quantity: '10',
        img: "17-dress-shirt-png-image-thumb.png"
    },
    {
        title: "Shirt 3",
        description: "Amazon Brand - Symbol Men's Regular Fit Shirt",
        price: "345",
        quantity: '23',
        img: "4-black-dress-shirt-png-image-thumb.png",
    },
    {
        title: "Shirt 4",
        description: "Amazon Brand - Symbol Men's Regular Fit Shirt",
        price: "345",
        quantity: '50',
        img: "17-dress-shirt-png-image-thumb.png",
    },  
  ])
  

  return (
    <>
      <div className="row m-0">
        <div className="col-12 text-left">
          <div className="row mx-0 px-md-5 px-3 my-5">
        </div>
              <div className="row mx-0 card-group">
                {
                  products && products.length ? products.map((item, i) => (
                    <ProductCard key={i} i={i} product={item}/>
                  ))
                    :
                    <h6>No Items in store please        </h6>
                }
              </div>
            </div>
        </div>
    </>
  )
}


export default ProductsList