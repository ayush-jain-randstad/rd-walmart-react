import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import productService from '../services/productService';
import Container from '../components/container/Container';
import cartService from '../services/cartService';
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductDetails = () => {
  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [currentCart, setCurrentCart] = useState()
  const { id } = useParams();
  const user_id = localStorage.getItem('id')
  const navigate = useNavigate();
  console.log('quantity', quantity);
  console.log('isVisible', isVisible);
  console.log('currentCart', currentCart);
  
  useEffect(() => {
    if (id) {
      productService.getById(id).then((res) => {
        if (res) {
          setProduct(res.data.data)
          setLoader(false)
        } else {
          setLoader(false)
          navigate('/')
        }
      })
    }
  }, [id])
  
  let starArray = [1, 2, 3, 4, 5]

  const quantityIncrease = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10)
  }
  const quantityDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
  }

  const addToCart = () => {    
    product.quantity = quantity    
    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If product already exists, update quantity
      existingCart[existingProductIndex].quantity = quantity;
    } else {
      // If product doesn't exist, add it to the cart
      existingCart.push({ ...product });
    }
    setCurrentCart(quantity)
    localStorage.setItem('cart', JSON.stringify(existingCart))
    setIsVisible(true)
  }
  // console.log('product details', product);
  
  return (
    <div>
      {loader ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32">Loading....</div>
        </div>
      ) : (
        product && (
          <Container>
            <div className="font-sans">
              <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="min-h-[500px] lg:col-span-3 bg-gradient-to-tr via-[#FFE0B5] to-[#FFF2D7] rounded-lg w-full lg:sticky top-0 text-center p-6">
                    <img src={product?.images[0]} alt="Product" className="w-3/5 rounded object-cover mx-auto py-6" />

                    <hr className="border-white border my-6" />

                    <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
                      <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                        <img src={product?.images[0]} alt="Product1" className="w-full h-full cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800">{product?.title} | {product?.category}</h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <p className="text-gray-800 text-xl font-bold">${product?.price}</p>
                      <p className="text-gray-400 text-xl"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      {starArray?.map((star, index) => (
                        <svg className={`w-5 ${star <= product?.rating ? 'fill-orange-400' : 'fill-[#CED5D8]'} `} viewBox="0 0 14 13" fill="none"
                          xmlns="http://www.w3.org/2000/svg" key={index}>
                          <path
                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                      ))}

                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-800">About the Product</h3>
                      <p>{product?.description}</p>
                    </div>

                    <div className='mt-5 py-2 text-center flex items-center'>
                      <div className='flex'>
                        <span>Select quantity : </span>
                      </div>
                      <div className='flex'>
                        <button className='py-2 px-5' onClick={() => quantityDecrease()}>
                          <FaMinus />
                        </button>
                        <span>{quantity}</span>
                        <button className='py-2 px-5' onClick={() => quantityIncrease()}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    { currentCart !== quantity && (
                      <button type="button" className="w-full mt-2 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-md"
                      onClick={() => addToCart()}>Add to cart</button>
                    ) }
                    
                    { isVisible && currentCart === quantity && (
                      <Link to={'/cart'}>
                        <button type="button" className="w-full mt-2 px-6 py-3 bg-orange-400            hover:bg-orange-500 text-white text-sm font-semibold rounded-md"
                        >Go to cart
                        </button>
                    </Link>
                    ) }                    

                    <div className="mt-8">
                      <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                      {product.reviews.map((review, index) => (
                      <div className="flex items-start mt-8"
                            key={index}
                      >
                        <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                        <div className="ml-3">
                          <h4 className="text-sm font-bold">{review.reviewerName}</h4>
                          <div className="flex space-x-1 mt-1">
                            {starArray?.map((star, index) => (
                            <svg className={`w-4 ${star <= review.rating ? 'fill-orange-400' : 'fill-[#CED5D8]'} `} viewBox="0 0 14 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              key={index}>
                              <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            ))}
                            {/* <p className="text-xs !ml-2 font-semibold">{review.date}</p> */}
                          </div>
                          <p className="text-xs mt-4">{review.comment}</p>
                        </div>
                      </div>
                      ))}
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
