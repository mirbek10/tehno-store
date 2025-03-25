import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Cotegory/CotegorySlice'
import DetailsReducer from './Product/ProductDetailsSlice'
import productReducer from './Product/ProductSlice'
import IconReducer from './IconSlice/Icon'

import authReducer from './IconSlice/authSlice'



const myStore =  configureStore({
    reducer: {
        category: categoryReducer,
        products: productReducer,
        details: DetailsReducer,
        icons: IconReducer,
        auth: authReducer,

        
    }
})

export default myStore;