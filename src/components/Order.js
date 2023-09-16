import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Context from '../context/createContext'
export default function Order(props) {
    const context=useContext(Context)
    const {getUserData,userData,singleProduct}=context;
   

    console.log(singleProduct)
    console.log(userData)
    let product_id=singleProduct._id;    
    let user_id=userData[0]._id
    
    const [credential, setCredential] = useState({name:userData[0].name,contact:userData[0].contact,email:userData[0].email,address:"",city:"",pincode:""})
    const onChange=(e)=>{
        e.preventDefault()
        setCredential({...credential,[e.target.name]:e.target.value})
    }

    const handleClick=async (e)=>{
      e.preventDefault()
      const response=await fetch("http://localhost:2999/api/product/order",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({userId:user_id,productId:product_id,name:credential.name,contact:credential.contact,email:credential.email,address:credential.address,city:credential.city,pincode:credential.pincode})
      })
      const json=await response.json()
      console.log(json);
      props.showAlarm("Product will be delivered as mentioned date","success")
      setCredential({address:"",city:"",pincode:""})
    }
    console.log(userData)

  return (
    <Wrapper>
        <div className='container'>
           
        <form onSubmit={handleClick}>
            <label>Name</label>
          <input className="input" type='text' name='name' placeholder='Name' value={credential.name} onChange={onChange} required></input>
          <label>Phone No.</label>
          <input className="input" type='number' name='contact' placeholder='Contact' value={credential.contact} onChange={onChange} required ></input>
          <label>Email</label>
          <input className="input" type="email" name='email' placeholder='Email'value={credential.email} onChange={onChange} required></input>
          <label>Address</label>
          <input className="input" type="text" name='address' value={credential.address} onChange={onChange} required></input>
          <label>City</label>
          <input className="input" type='text' name="city" value={credential.city} onChange={onChange} required></input>
          <label>Pin Code</label>
          <input className="input" type='text' name="pincode" value={credential.pincode} onChange={onChange} required></input>
          {/* <input type='submit'>Order</input> */}
          <button >Order</button>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
  label{
    margin-top: -11px;
    margin-bottom: -14px;
    font-size: 17px;
  }
  h1{
    margin-top:30px;
    margin-bottom:30px;
  }
  form{
    display:flex;
    flex-direction:column;
    gap:1rem;
  }
  .input{
    padding:6px;    
  }
  .input:hover{
    border:2px solid black;
  }
  button{
   
    width:100px;
  }
`;
