import {configureStore} from '@reduxjs/toolkit'
import searchReducer from '../redux/feature/searchSlice.js' 


export const store = configureStore({
    reducer :{
        search:searchReducer,
       
    }

})