import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export default function Error() {
  return (
    <Wrapper>
      <div className='container'>
        <h2>404</h2>
        <h1>UH OH! You're lost</h1>
        <p>this error may occur due to some internal problem go back to home page and try again</p>
        <Link to="/"><button>HOME</button></Link>
        
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.container{
  text-align:center;
}
h2{
  font-size: 76px;
    font-weight: 300;
}
p{
  margin-top:10px;
  margin-bottom:10px;
}

`;
