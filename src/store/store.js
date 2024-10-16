import {configureStore, combineReducers, applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productSlice from './productSlice'
import categorySlice from './categorySlice'
import searchSlice from './searchSlice'

const store = configureStore({
    reducer: {
        productList: productSlice,
        categoryList: categorySlice,
        searchList: searchSlice,

    },
    
});

export default store;
