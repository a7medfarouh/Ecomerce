import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increase ,decrease ,deleteCard ,Clear} from '../../Redux/Counterslice';
import Loading from '../Loading/Loading';

export default function Card() {
  // localStorage.getItem("product");
  // const [data, setdata] = useState([]);
  let counter = useSelector((state) => state.counter);
  console.log({...counter});
  if(counter==null){
    counter=localStorage.getItem("shopping-cart");
  }

 
  // localStorage.setItem("shopping-cart", JSON.stringify(counter));
  // localStorage.setItem("product",{...counter});
  
  let dispatch =useDispatch();
  const totalPrice = counter.reduce((acc, product)=>{
   acc += product.price * product.quantity;
   return acc;
 }, 0)

  return <>
    {/* <Loading/> */}
    <div className="contaner m-5">
      <h1 className="mx-5 "> Cards</h1>
     
     
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th >#</th>
            <th >ProductName </th>
            <th >ProductImage</th>
            <th >ProductPrice</th>
            <th >Quantity</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {counter?<>
          {counter.map((product,index)=>{
            return <>
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td className='w-25'>{product.title}</td>
            <td  className='w-25'><img src={product.image} style={{width:"100px",height:"100px"}} alt="" /></td>
            
            <td >{product.price} $</td>
            <td >{product.quantity}</td>
            <td><button className='btn btn-danger ' onClick={()=>{dispatch(deleteCard(product))}} > delete</button>
            <button className='btn btn-info mx-1' onClick={()=>{dispatch(increase(product))}} > +</button>
            <button className='btn btn-primary' onClick={()=>{dispatch(decrease(product))}} >-</button>
            </td>
          </tr>
            </>
          })}
          </>:<>
          <Loading/>
          </>}
          <tr >
            <td></td>
            <td colSpan={2} ><h3>TotalPrice</h3></td>
            <td colSpan={2} ><h3>{totalPrice.toFixed(2)}$</h3> </td>
            <td>  <button className='btn btn-primary d-flex justify-content-center'  onClick={()=>{dispatch(Clear())}} > ClearAll </button></td>
            
          </tr>
          
          
      
        </tbody>
      </table>
    </div>





  </>
}
