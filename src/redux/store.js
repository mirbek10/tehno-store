import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './Cotegory/CotegorySlice'
import gadgetReducer from './gadgetsSlice/Gadgetslice'


const myStore =  configureStore({
    reducer: {
        category: categoryReducer,
        gadgets: gadgetReducer,
    }
})

export default myStore;