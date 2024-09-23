import React, { useEffect, useState } from 'react'
import productService from '../services/productService'
import ProductCard from '../components/productCard'
import Container from '../components/container/Container'
import { useDispatch } from 'react-redux'
import { productList } from '../store/productSlice'
import { Link } from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    productService.getProducts()
    .then((product) => {      
      dispatch(productList(product.data))
      setProducts(product.data.data.products)
    })
  },[])
  console.log('productsproducts',products);
  
  return (
    <Container>
    <div className='flex justify-between py-2'>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 pl-5">Product List</h2>
      <Link to={`/add-product`}>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-4">
        Add Products
      </button>
      </Link>
    </div>
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

export default Home