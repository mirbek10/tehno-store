import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const whishList = createSlice({
    name :'whishList',
    initialState :{
        items:[]

    }
    ,
    reducers : {
        addWhish : (state,action) => {
            state.items.push(action.payload)
           
        },
        removeWhish : (state,action) => {
            
            state.items = state.items.filter((x) => x.id !== action.payload)
        }
    }
    
})

export const {addWhish, removeWhish} = whishList.actions
export default whishList.reducer;