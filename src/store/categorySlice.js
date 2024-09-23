import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status:"failed",
    message: '',
    data: null
}

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {
        categoryList: (state, action) => {
            // console.log('category list reducer', action.payload); log 2 times manoj
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.data = action.payload.data;
            
        }
    }
})

export const { categoryList } = categorySlice.actions
export default categorySlice.reducer