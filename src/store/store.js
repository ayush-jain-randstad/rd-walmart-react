import {configureStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productSlice from './productSlice'
import categorySlice from './categorySlice';

const store = configureStore({
    reducer: {
        productList: productSlice,
        categoryList: categorySlice
    },
    
});

export default store
