import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar() {
  let counter =useSelector((state)=>state.counter);
  // console.log(counter);
  return <>
<nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm bg-white ">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder fs-4" to="/"> LA COLLECTION</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bolder" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bolder" to="Product">Prdoucts</Link>
        </li>
        
      </ul>

      <div className="buttons">
        <Link to="/" className='btn btn-outline-dark '>
          <i className='fa fa-sign-in me-1'></i> login
        </Link>
        <Link to="/" className='btn btn-outline-dark ms-2'>
          <i className='fa fa-user-plus me-1'></i> Register
        </Link>
        <Link to='/cart' className='btn btn-outline-dark ms-2'>
          <i className='fa fa-shopping-cart me-1'></i> Cart({counter.length})
        </Link>
      </div>
      
    </div>
  </div>
</nav>
  </>
}
