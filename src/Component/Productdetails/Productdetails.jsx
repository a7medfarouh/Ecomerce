
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
// import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';

import { increase } from '../../Redux/Counterslice';





export default function Productdetails() {
  // let {counter} =useSelector((state)=>state);
  // console.log(counter)
  // localStorage.setItem("product",{counter});

  let dispatch =useDispatch();
  let { id } = useParams();
  const [product, setPoduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  async function getProducts() {
    // setLoading(true);
    let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
   
    // setLoading(false);
    setPoduct(data);





  }
  useEffect(() => {
    getProducts();
  });

  return <>
    
     <div className="container my-5">
         
                <div className="row g-5" >
                  {
                   <>
                    <div key={product.id}  className="col-md-4">

                    <img src={product.image} alt={product.title} className="w-100" />

                    </div>
                    
                    <div className="offset-1 col-md-6 ">
                      <h2 className=' my-3'>{product.category}</h2>
                      <h2 className=' my-3'>{product.title}</h2>
                      <h4 className=' my-3'>Rating: <span className='mx-3 bg-info text-white px-3 rounded-2'>{product.rating?.rate}  <i className="fa-solid fa-star"></i></span> </h4>
                      <h3 className=' my-3'>Price:<span className='mx-3 bg-info text-white px-3 rounded-2'>{product.price} $ </span>   </h3>
                      <p className='text-muted py-3 fw-bold w-100'>{product.description}</p>
                      <button className='btn btn-outline-dark mx-3 px-3 py-2' onClick={()=>{dispatch(increase(product))}}> Add To Cart</button>
                      <Link to="/cart"  className='btn btn-dark px-3 py-2'>Go To Cart</Link>
                    </div>
                    
                    </>
                  }
                </div>


          

        </div>
  </>
}
