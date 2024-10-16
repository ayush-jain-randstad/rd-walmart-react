import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.js'
import Login from './Pages/Login.js'
import Register from './Pages/Register.js'
import ProductDetails from './Pages/ProductDetails.js';
import Product from './Pages/Product.js';
import store from './store/store.js';
import ProductForm from './components/ProductForm.js';
import AuthLayout from './components/AuthLayout.js';
import axios from 'axios';
import Cart from './Pages/Cart.js';
// import Practice from './Pages/Practice.js';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
      )
      },
      {
        path:'/register',
        element: (
          <AuthLayout authentication={false}>  
              <Register />
          </AuthLayout>
          )
      },
      {
        path:'/product',
        element: (
          <AuthLayout authentication={true}>
            <Product />
          </AuthLayout>
        )
      },
      {
        path:'/product-details/:id',
        element: (
          <AuthLayout authentication={true}>
            <ProductDetails />
          </AuthLayout>
            )
      },
      {
        path:'/add-product',
        element: (
          <AuthLayout authentication={true}>
            <ProductForm />
          </AuthLayout>
            )
      },
      {
        path:'/cart',
        element: (
          <AuthLayout authentication={true}>
            <Cart />
          </AuthLayout>
            )
      },
     
    ]
  }
])


// axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}` // we can use this for token 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router}/>
    </Provider>
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
