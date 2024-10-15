import React, { useEffect, useState } from 'react'
import productService from '../services/productService'
import ProductCard from '../components/productCard'
import Container from '../components/container/Container'
import { useSelector } from 'react-redux'

const Product = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    productService.getProducts()
    .then((product) => setProducts(product.data.data.products))
  },[]) 

  return (
    <Container>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product List</h2>
      <div className='flex flex-wrap'>
        {products?.map((product) => (
          <div key={product.id} className='p-2 w-1/4'>

            <ProductCard product = {product}/>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Product
