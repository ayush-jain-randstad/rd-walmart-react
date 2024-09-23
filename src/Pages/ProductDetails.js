import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import productService from '../services/productService';
import Container from '../components/container/Container';
const ProductDetails = () => {
  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate();
  
  useEffect(()=> {    
    if(id){
      productService.getById(id).then((res) => 
        {
          if(res){
          setProduct(res.data)
          setLoader(false)
        } else{
          setLoader(false)
          navigate('/')
        }
      }) 
      }
    },[id])

  console.log('product detail page',product); 

  return (
    <div>
     { loader ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32">Loading....</div>
        </div>
     ): (
      product && (
        <Container>
          <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
              <img
                  src={product?.data.images.replace(/"/g, '')}
                  alt={product?.data.images.replace(/"/g, '')}
                  className="rounded-xl"
              />
          </div>
          <div className="w-full mb-6 text-center">
              <h1 className="text-2xl font-bold">{product?.data.title}</h1>
          </div>
          <div className="browser-css text-center">
              {(product?.data.description)}
          </div>
        </Container>
      )
     )}
    </div>
  )
}

export default ProductDetails
