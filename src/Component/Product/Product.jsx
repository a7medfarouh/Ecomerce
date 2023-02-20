import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
// import { useDispatch, useSelector } from 'react-redux';

// import { decrease, increase } from '../../Redux/Counterslice';
export default function Product() {
  // let dispatch =useDispatch();
  const [product, setPoduct] = useState([]);
  const [filter, setFilter] = useState(product);
  const [loading, setLoading] = useState(false);
  async function getProducts() {

    setLoading(true);
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setLoading(false);
    setPoduct(data);
    setFilter(data);


    // console.log(data);


  }
  useEffect(() => {
    getProducts();
  }, []);
  const filterItem = (curcat) => {
    // console.log(curcat);

    let newItem = product.filter((x) => x.category === curcat);

    setFilter(newItem);

  };

  return <>
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-md-12 mb-5">
          <h1 className='display-6 fw-bolder text-center '>Lastet Products</h1>
          <hr className='fw-bolder  ' />
        </div>
      </div>

      {loading ? <Loading /> : <>

        <div className="row justify-content-center">
          <div className="buttons my-5 d-flex justify-content-center">
            <button className='btn btn-outline-dark me-2 ' onClick={() => { setFilter(product) }}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={() => { filterItem("men's clothing") }}>men's clothing</button>
            <button className='btn btn-outline-dark me-2' onClick={() => { filterItem("women's clothing") }}>women's clothing</button>
            <button className='btn btn-outline-dark me-2' onClick={() => { filterItem("jewelery") }}>jewelery</button>
            <button className='btn btn-outline-dark me-2' onClick={() => { filterItem("electronics") }}>electronics</button>

          </div>
        </div>
        <div className="row g-5 text-center">
          {
            filter?.map((item, index) => {
              return <>
                <div key={index} className="col-md-3">
                  <div className="content p-4 h-100">
                    <img className='w-100' height="250px" src={item.image} alt="" />
                    <h5>{item.title.substring(0, 12)}</h5>
                    <h5 className='lead fw-bold py-3'>${item.price}</h5>
                    <Link to={`/productdetails/${item.id}`} className='btn btn-outline-dark' >Buy name</Link>
                  </div>

                </div>


              </>

            })
          }
          {/* <div className="col-md-3">
          <div className="content p-4">
              <img src="" alt="" />
              <h2>title</h2>
              <h5>$1000</h5>
              <button className='btn btn-outline-primary'>Buy name</button>
          </div>
          
        </div> */}
        </div>



      </>}

    </div>



  </>
}
