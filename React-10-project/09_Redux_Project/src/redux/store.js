import {configureStore} from '@reduxjs/toolkit'
import searchReducer from '../redux/feature/searchSlice.js' 
import collectionReducer from '../redux/feature/collectionSlice.js'


export const store = configureStore({
    reducer :{
        search:searchReducer,
        collection:collectionReducer
       
    }

})