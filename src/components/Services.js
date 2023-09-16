import React from 'react'
import { styled } from 'styled-components'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdSecurity} from 'react-icons/md'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'
export default function Services() {
  return (
    <Wrapper>
        <div className='container'>
            <div className='row1'>
            <span className='heading'> Services</span> 
            </div>
            
            <div className='rowProduct'>
                <div className='service-1'>
                    <TbTruckDelivery/>
                    <p>Super Fast and Free Delivery</p>
                </div>
                <div className='service-2'>
                    <div className='service-2-1'>
                        <MdSecurity/>
                        <span>Non-contact service</span>
                    </div>
                    <div className='service-2-2'>
                        <GiReceiveMoney/>
                        <span>Money-back Guaranteed</span>
                    </div>
                </div>
                <div className='service-3'>
                    <RiSecurePaymentLine/>
                    <p>Super Secure Payment System</p>
                </div>
               
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
h2{
    text-align:center;
}
.service-1,.service-2,.service-3{
    margin-top:15px;
    flex-basis:32.5%;
    height:270px;
    // border:2px solid black;
    align-items:center;
    text-align:center;
    padding: 92px;
    transition:all 0.3s;
    box-shadow:0 0 10px 3px rgba(0,0,0,0.4);
    border-radius:10px;
    cursor:pointer;
}
.service-1:hover, .service-3:hover{
    transform:translateY(-4px);
    box-shadow:0 0 3px 3px rgba(0,0,0,0.4)
}
.service-2{
    // flex-direction:column;
    padding:0;
    position:relative;
    
    box-shadow:0 0 0 0 rgba(0,0,0,0);
}

.service-2-1,.service-2-2{
    // border:2px solid black;
    position:absolute;
    width: 100%;
    height: 126px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    transition:all 0.3s;
    box-shadow:0 0 10px 3px rgba(0,0,0,0.4);
}
..service-2-1{
    top:0
}
.service-2-2{
    bottom:0;
}
.service-2-1:hover,.service-2-2:hover{
    transform:translateY(-4px);
    box-shadow:0 0 3px 3px rgba(0,0,0,0.4)
}

`;
