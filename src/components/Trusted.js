import React from 'react'
import { styled } from 'styled-components'
import coca from "../image/logo-coca-cola.png"
import godrej from "../image/logo-godrej.png"
import paypal from "../image/logo-paypal.png"
import oppo from "../image/logo-oppo.png"
import philip from "../image/logo-philips.png"

export default function Trusted() {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row1'>
        <span className='heading'>Trusted by 1000+ Companies</span>
        </div>
        
        <div className="row">
          <img src={coca}/>
          <img src={godrej}/>
          <img src={paypal}/>
          <img src={oppo}/>
          <img src={philip}/>
        </div>
      </div>
      
    </Wrapper>
  )
}
const Wrapper=styled.section`
h3{
  text-align:center;
}
.row{
  margin-top:30px;
  display:flex;
  justify-content:space-around;
  align-items:center;
}
img{
  width:125px;
  filter:grayscale(100%);
  cursor:pointer;
}
img:hover{
  filter:grayscale(0);
}
`;