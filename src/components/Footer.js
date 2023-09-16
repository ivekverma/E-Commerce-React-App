import React from 'react'
import { styled } from 'styled-components'

import {FaDiscord,FaInstagram,FaYoutube} from 'react-icons/fa'
export default function Footer() {
  return (
    <Wrapper>
        <div className='full'>
            
                <div className='grid-4'>                
                    <div className='common'>
                    <h4>Vivke Store</h4>
                    <p>vivke is a good boy with a sjf fdhjfdf fdhfdhf </p>
                    </div>
                    <div className='common'>
                        <h4>Subscribe to get important updates</h4>
                        <form>
                            <input type='email' placeholder='Your Email'></input>
                            <input type='submit' className="btn" value="subscribe"></input>
                        </form>
                    </div>
                    <div className='common'>
                        <h4>Follow Us</h4>
                        <div className='icon-row'>
                            <div>
                                <FaDiscord/>
                            </div>
                            <div>
                                <FaInstagram/>
                            </div>
                            <div>
                                <a href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA" target='_blank'>
                                    <FaYoutube/>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div className='common'>
                        <h4>Call Us </h4>
                        <a href="tel:9876754376">+91-9876754376</a>
                    </div>
                </div>

                <hr></hr>
            
                <p>@{new Date().getFullYear()} Vivek Store. All Rights Reserved</p>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.full{
    padding-top:20px;
    padding-bottom:20px;
    background-color:black;
    color:white;
    // margin-top:200px;
    z-index:9999;
}
.grid-4{
    display:grid;
    grid-template-columns:repeat(4,1fr);
}
.common{
    text-align:center;
    
    // border:2px solid white;
    margin:10px;
    // width:150px;
    // height:150px;
}

h4{
    margin-bottom:7px;
}
form{
    display:flex;
    flex-direction:column;
    gap:10px;
}
input{
    padding:6px;
    width:98%
}
.btn{
    width:70px;
    background-color:red;
}
a{
    color:white;
}
hr{
    background-color:white;
    margin-top:20px;
    margin-bottom:20px;
}
p{
    text-align:center;
}
`;
