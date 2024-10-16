import React, { useEffect, useState } from 'react'
// import Navbar from './Navbar'
import axios from 'axios';

function SubHeader() {
  const [caterogy, setCaterogy] = useState([])
  useEffect(() => {
  axios.get('https://dummyjson.com/products/categories')
    .then((response) => {
      setCaterogy(response.data)
    })
  }, [])
  return (
    <>
    {/* <Navbar /> */}
    
    <ul className=' flex flex-wrap content-between w-full px-4 p-1 bg-gray-200 text-blue-900 text-sm invisible lg:visible '>
     
      {caterogy.slice(0, 8).map((category, index) => (
        <li key={category.name} className='p-2 px-4'><a href='#'>{category.name}</a></li>
      ))}
    </ul>
    </>
  )
}

export default SubHeader
