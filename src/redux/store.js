import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Cotegory/CotegorySlice'
import gadgetReducer from './gadgetsSlice/Gadgetslice'
import productReducer from './Product/ProductSlice'


const myStore =  configureStore({
    reducer: {
        category: categoryReducer,
        gadgets: gadgetReducer,
        products: productReducer,
    }
})

export default myStore;