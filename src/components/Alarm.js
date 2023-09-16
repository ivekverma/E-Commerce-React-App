import React from 'react'
import { styled } from 'styled-components'

export default function Alarm(props) {
    console.log(props.alarm.type)
    let newType=props.alarm.type;
    newType=newType.slice(0,1).toUpperCase()+newType.slice(1)+"!"
  return (
    <Wrapper>
            <p className={props.alarm.type}>{newType} {props.alarm.msg}</p>          
    </Wrapper>
  )
}
const Wrapper=styled.section`
p{
    margin-top: 71px;
    position: fixed;
    top: -9px;
    left: 0;
    width: 100%;   
}
.success{
    background-color: #a6f9a6;
    padding: 13px;
    z-index: 1;
    color: black;
    font-weight:600;
}
.error{
    background-color: #f65555;
    padding: 13px;
    z-index: 1;
    color: white;
    font-weight:600;
}
`;
