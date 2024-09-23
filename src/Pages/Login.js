import React, { useState } from 'react'
import {Input, Button} from '../components/Index.js'
import { useForm } from 'react-hook-form'
import authService from '../services/authService.js'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const { register, handleSubmit, formState: {errors} } = useForm()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const onSubmit = (data) => {    
      authService.login(data)
        .then((res) => {
          if (res.status == 201) {
            setError(res.message)
          } else {
            localStorage.setItem("token", res.token)
            localStorage.setItem("id", res.userData.id)
            localStorage.setItem("email", res.userData.email)
            localStorage.setItem("status", true)
            navigate('/')
          }
        })
        .catch((error) => setError(error))
    
  }

  return (
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  label='Username' 
                  type='text'
                  placeholder = "Enter User Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username", {
                    required: 'Username is required',
                    // validate: {
                    //   matcPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
                    //   || "Email address must be a valid address",
                    // }
                  })}
                />
                {errors.email && <p className='text-red-800 mt-4 text-left'>{errors.email.message}</p>}
                {error && <p className='text-red-800 mt-4 text-left'>{error}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: 'Password is required'
                  })}
                />
                {errors.password && <p className='text-red-800 mt-4 text-left'>{errors.password.message}</p>}
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
