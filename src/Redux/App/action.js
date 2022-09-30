import { ADD_TO_CART, TOTAL_AMOUNT } from "./actionTypes"

export const addtocart=(payload)=>{
    return{
        type:ADD_TO_CART,
        payload
    }
}

export const totalamount=(payload)=>{
    return{
        type:TOTAL_AMOUNT,
        payload
    }
}


