import {createSlice, combineReducers, applyMiddleware} from '@reduxjs/toolkit'

const initialState = {
    status: 'failed',
    message: '',
    data: null
}
const searchSlice = createSlice({
    name: 'searchList',
    initialState,
    reducers: {
/*************************/
        /**
         * Handles the search list reducer
         * @function
         * @param {object} state - current state of search list
         * @param {object} action - contains the payload of the action, which is the response of the search api
         * @returns {object} - new state of search list
         */
/*************/ 
        searchList:(state, action) => {            
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.data = action.payload.data
        } ,

    }
    
});

export default searchSlice.reducer;