import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
export default function Logout() {
    console.log("going to logout page")
  return (
    <Wrapper>
        <div className='container'>
            <h2>Go back to Home Page</h2>
            <Link to="/">Go to Home</Link>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`

`;
