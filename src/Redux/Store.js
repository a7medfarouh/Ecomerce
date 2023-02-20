import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./Counterslice";

let store = configureStore({
    reducer:{
        counter:CounterReducer
    }
});
 
export default store;