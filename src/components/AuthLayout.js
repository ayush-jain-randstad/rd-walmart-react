import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AuthLayout = ({children, authentication = true}) => {
const navigate = useNavigate()
const [loader, setLoader] = useState(true)
const loginStatus = Boolean(localStorage.getItem('status'))
  // console.log('loginStatus auth layout', loginStatus, loader); log 4 times manoj

  useEffect(() => {
    if(authentication && loginStatus !== authentication){
        navigate('/login')
        
    } else if(!authentication && loginStatus !== authentication){
        navigate('/')
        
    }
    setLoader(false)
  },[loginStatus, navigate, authentication])

  return loader ? <h1>...Loading</h1> : <>{children}</>
}

export default AuthLayout
