import React, { useEffect,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import Context from '../context/createContext'
import { styled } from 'styled-components'
import SingleCart1 from './SingleCart1'
import {BiRupee} from 'react-icons/bi'
export default function Cart1() {
  const context=useContext(Context)
  const {getCartProducts,cartProduct,total}=context
  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log("calling get cart product")

      getCartProducts()
    }
    
  }, [])

  let length=cartProduct.length

  const gotologin=()=>{
    navigate('/login')
  }

  let priceTotal=0;
  const totalchange=(tPrice)=>{
    console.log("total change clicked")
    priceTotal=priceTotal+tPrice;
  }



  
  return (
    <Wrapper>
    {!localStorage.getItem('token')
    ?
    <div className='container'>
      <h2>Please first login to view your cart products</h2>
      <button onClick={gotologin}>Go To Login</button>
    </div>
    
    :
    <div className='container'>
        <table border="1">
            <tr>
                <th className='main'>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        
      {cartProduct.map((product)=>{
        return <SingleCart1 product={product} totalchange={totalchange} initial={0} length={length}/>       
        
      })}
      </table>
      
      
      <div className='final'>
        <p>Grand Total :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='total'>< BiRupee className='rupee'/>{total}</span>  </p>
      </div>

    </div>}

 
    
    </Wrapper>
  )
}
const Wrapper =styled.section`
.total{
  font-weight: bold;
    font-size: 30px;
    position: relative;
}
.rupee{
  margin-top: 3px;
  position: absolute;
  top: -1px;
  left: -26px;
}
table{
  border-bottom:none;
  border:none;
}
.final{
  position: relative;
  margin-left: 759px;
  margin-top: 30px;
  // border: 2px solid black;
  display: inline-block;
  text-align: center;
  font-size: 25px;
}

span{
  font-size:30px;
  font-weight:500;
}
.main{
  width:525px;
  padding:10px;
}
th{
  width:200px;
  border: 1px solid black;
}
img{
  width:100px;
  height:100px;
}
.row{
  display:flex;
  justfy-content:center;
}
.row div{
  margin:20px;
  // border:2px solid black;
}
.container{
  width:1400px;
  // border:2px solid yellow;
}


`;