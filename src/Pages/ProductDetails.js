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
  let starArray = [1,2,3,4,5]

  return (
    <div>
      {loader ? (
        <div classNameName="flex justify-center items-center">
          <div classNameName="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32">Loading....</div>
        </div>
      ) : (
        product && (
        <Container>
            {/* <div classNameName="w-full flex justify-center mb-4 relative border rounded-xl p-2">
              <img
                  src={product?.data.images[0]}
                  alt={product?.data.images[0]}
                  classNameName="rounded-xl"
              />
          </div>
          <div classNameName="w-full mb-6 text-center">
              <h1 classNameName="text-2xl font-bold">{product?.data.title}</h1>
          </div>
          <div classNameName="browser-css text-center">
              {(product?.data.description)}
          </div> */}

        <div className="font-sans">
            <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="min-h-[500px] lg:col-span-3 bg-gradient-to-tr via-[#FFE0B5] to-[#FFF2D7] rounded-lg w-full lg:sticky top-0 text-center p-6">
                        <img src={product?.data.images[0]} alt="Product" className="w-3/5 rounded object-cover mx-auto py-6" />

                        <hr className="border-white border my-6" />

                        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
                            <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src={product?.data.images[0]} alt="Product1" className="w-full h-full cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800">{product?.data.title} | {product?.data.category}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">${product?.data.price}</p>
                            <p className="text-gray-400 text-xl"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div className="flex space-x-2 mt-4">
                           {starArray.map((star,index) => (
                            <svg className={`w-5 ${ star <= product?.data.rating ? 'fill-orange-400' : 'fill-[#CED5D8]' } `} viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg" key={index}>
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                           ))}
                           
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">About the Product</h3>
                            <p>{product?.data.description}</p>
                        </div>

                        <button type="button" className="w-full mt-8 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-md">Add to cart</button>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                            
                            <div className="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                <div className="ml-3">
                                    <h4 className="text-sm font-bold">John Doe</h4>
                                    <div className="flex space-x-1 mt-1">
                                        <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                                    </div>
                                    <p className="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>
                            </div>
                            <button type="button" className="w-full mt-8 px-4 py-2.5 bg-transparent border border-orange-400 text-gray-800 font-semibold rounded-lg">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </Container>
        )
      )}
    </div>
  )
}

export default ProductDetails
