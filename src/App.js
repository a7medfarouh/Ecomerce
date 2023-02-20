
import './App.css';
// import Navbar from './Component/Navbar/Navbar';
import Product from './Component/Product/Product';
import Card from './Component/Card/Card';
import Home from './Component/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Productdetails from './Component/Productdetails/Productdetails';
import Contact from './Component/Contact/Contact';
import { Provider } from 'react-redux';
import store from "./Redux/Store"
// import { useSelector } from 'react-redux';
// import React,{useState,useEffect} from 'react';


let routers= createBrowserRouter([
  {path:'/',element: <Layout/> ,children:[
    {index: true ,element: <Home/> },
    {path: "/" ,element: <Home/> },
    {path:'Product',element: <Product/> },
    {path:'productdetails/:id',element: <Productdetails/> },
    {path:'contact',element: <Contact/>},
    {path:'cart',element: <Card/> },
    {path: "*" ,element: <Home/> },
    
    
    
  ] }
]);

function App() {
  
  
  return <>
  <Provider store={store}>
  <RouterProvider router={routers}/>
  </Provider>
 
    

    
  </>
}

export default App;
