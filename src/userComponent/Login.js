import React,{useContext, useState} from 'react'
import {styled} from 'styled-components'
import {useNavigate} from 'react-router-dom'
// import Context from '../context/createContext'
export default function Login() {
    // const context=useContext()
    // const {setUserData}=context;
    const [credential, setCredential] = useState({email:"",pass:""})
    const navigate=useNavigate()
    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const response=await fetch("http://localhost:2999/api/user/login",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credential.email,password:credential.pass})
        })
        const json=await response.json()
        
        localStorage.setItem('token',json.jwt_token)
        navigate('/')
    }
  return (
    <Wrapper>
        <div className='container'>
            <h2>Login to Vivek Store</h2>
            <form onSubmit={handleSubmit}>
            <label>Email</label>
                <input type='email' name="email" value={credential.email} onChange={onChange} required></input>
                <label>Password</label>
                <input type='password' name="pass" value={credential.pass} onChange={onChange} required></input>               
                <button type='submit' >Login</button>
            </form>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`

`;
