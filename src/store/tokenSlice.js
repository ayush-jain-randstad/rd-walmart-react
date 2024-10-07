import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    status: false,
}

const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState,
    reducers: {
        getToken: (state, action) => {
            state.token = action.payload.token;
            state.status = action.payload.status;
            
        }
    }
})

export const { getToken } = tokenSlice.actions
export default tokenSlice.reducer 