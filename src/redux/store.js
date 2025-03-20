import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Cotegory/CotegorySlice'
import DetailsReducer from './Product/ProductDetailsSlice'
import productReducer from './Product/ProductSlice'



const myStore =  configureStore({
    reducer: {
        category: categoryReducer,
        products: productReducer,
        details: DetailsReducer
        
    }
})

export default myStore;