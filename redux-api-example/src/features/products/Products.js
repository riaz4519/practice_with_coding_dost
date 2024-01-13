import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './Products.css'
import { fetchAsync } from './productsSlice'
import { addAsync } from '../cart/cartSlice'

export function Products() {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    dispatch(fetchAsync())
  }, [])

  console.log(products)

  return (
    <div className="products">
      {products &&
        products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <p className="price">${product.price}</p>
            <p>{product.description}</p>
            <p>
              <button onClick={() => dispatch(addAsync(product))}>
                Add to Cart
              </button>
            </p>
          </div>
        ))}
    </div>
  )
}
