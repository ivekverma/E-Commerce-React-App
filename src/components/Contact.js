import React from 'react'
import { styled } from 'styled-components'
export default function Contact() {
  return (
    <Wrapper>
      <h1>Feel Free to Contact Us</h1>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1335296065013!2d72.8197104750108!3d19.406635741510062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a98fb478de03%3A0xfd5ff864e936c9b6!2sThe%20Capital%20Mall!5e0!3m2!1sen!2sin!4v1691815838849!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      <div className='container'>
        <form action='' method='POST'>
          <input className="input" type='text' name='name' placeholder='username' value=""></input>
          <input className="input" type='email' name='email' placeholder='Email' value=""></input>
          <textarea className="input" name='message' placeholder='Enter your message' value="" rows={4}></textarea>
          <button className="btn" >Submit</button>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper =styled.section`
h1{
  text-align:center;
  margin-top:100px;
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
textarea:hover{
  border:2px solid black;
}
.btn{
  
  width:100px;
}
`;
