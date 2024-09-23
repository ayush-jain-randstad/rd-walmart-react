import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: 'failed',
    message: '',
    data: null
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        productList:(state, action) => {            
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.data = action.payload.data
        } ,
        productDetails:(state, action) => {

        }
    }
})

export const { productList } = productSlice.actions
export default productSlice.reducer