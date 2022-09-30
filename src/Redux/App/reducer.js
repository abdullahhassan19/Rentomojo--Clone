import { ADD_TO_CART, TOTAL_AMOUNT } from "./actionTypes";


const initState = {
    // electronics: [],
    cart: [],
    // fitness: [],
    // furniture: [],
    // appliances: [],
    total:0,
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initState, action) => {
  
   
  const {type,payload}=action
    switch (type) {

        case  ADD_TO_CART  :        
        {
            return {
              ...state,
              cart: [...state.cart, payload]
            };
          }
      
        case  TOTAL_AMOUNT  :        
        {
            return {
              ...state,
              total:payload
            };
          }
      default:
        return state;
    }
  };