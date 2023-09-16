import React, { useState } from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom';
export default function Signup() {
    const navigate=useNavigate()
    const [credential, setCredential] = useState({name:"",contact:"",email:"",pass:"",cpass:""})

    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(credential.pass!==credential.cpass){
            return alert("password does not match please reenter pasword");
        }

        const response = await fetch("http://localhost:2999/api/user/addUser",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credential.name,contact:credential.contact,email:credential.email,password:credential.pass})
            
        })
        navigate('/login');
    }
    
  return (
    <Wrapper>
        <div className='container'>
            <h2>Register to Vivek Store</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' name="name" value={credential.name} onChange={onChange} required></input>
                <label>Contact</label>
                <input type='number' name="contact" value={credential.contact} onChange={onChange} required></input>
                <label>Email</label>
                <input type='email' name="email" value={credential.email} onChange={onChange} required></input>
                <label>Password</label>
                <input type='password' name="pass" value={credential.pass} onChange={onChange} required></input>
                <label>Confirm Password</label>
                <input type='password' name="cpass" value={credential.cpass} onChange={onChange} required></input>
                <button type='submit' >SignUp</button>
            </form>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
h2{
    margin-bottom:10px;
}
`;
