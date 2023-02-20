import { createSlice } from "@reduxjs/toolkit";
var initiale=[] ;
if(localStorage.getItem("shopping-cart")!==null && localStorage.getItem("shopping-cart")!=="undefined"){
    initiale=JSON.parse(localStorage.getItem("shopping-cart"));
    // JSON.parse(localStorage.getItem("shopping-cart"))
}
// if(localStorage.getItem("shopping-cart2")!==null && localStorage.getItem("shopping-cart2")!=="undefined"){
//     initiale=JSON.parse(localStorage.getItem("shopping-cart2"));
// }
else{
    initiale=[];
}
let counterSlice = createSlice({
    name:"counter",
    initialState:initiale,
    reducers:{
        increase:(state,action)=>{
            let productClone;
            const findProduct=state.find((product)=> product.id===action.payload.id);
            if(findProduct){
                findProduct.quantity +=1;
                
            
            }
            else{
                productClone={...action.payload,quantity:1}
                state.push(productClone);
                // localStorage.setItem("shopping-cart", JSON.stringify(productClone));
            }
            localStorage.setItem("shopping-cart", JSON.stringify(state));
            // localStorage.setItem("shopping-cart2", JSON.stringify(productClone));
            
           },
        decrease:(state,action)=>{
            const findProduct=state.find((product)=> product.id===action.payload.id)
            
                if(findProduct.quantity-1 > 0){
                   
                    findProduct.quantity -=1;
                    
                }
                else{
                    return state.filter((product)=>product.id !== action.payload.id)
                }
            
          
        },
        deleteCard:(state,action)=>{
            return state.filter((product)=>product.id !== action.payload.id)
        },
        Clear:(state)=>{
            return [];
        },
    }
}
   
)
export let CounterReducer = counterSlice.reducer;
export let {increase ,decrease ,deleteCard ,Clear} = counterSlice.actions;