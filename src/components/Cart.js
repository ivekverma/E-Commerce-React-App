// import React, { useEffect,useContext } from 'react'
// import {useNavigate} from 'react-router-dom'
// import Context from '../context/createContext'
// import { styled } from 'styled-components'
// export default function Cart() {
//   const context=useContext(Context)
//   const {getCartProducts,cartProduct}=context
//   const navigate=useNavigate()
//   useEffect(() => {
//     if(localStorage.getItem('token')){
      
//       getCartProducts()
//     }
    
//   }, [])

//   const gotologin=()=>{
//     navigate('/login')
//   }
  
//   return (
//     <Wrapper>
//     {!localStorage.getItem('token')
//     ?
//     <div className='container'>
//       <h2>Please first login to view your cart products</h2>
//       <button onClick={gotologin}>Go To Login</button>
//     </div>
    
//     :
//     <div className='container'>
//       {cartProduct.map((product)=>{
//         return <div>
//           <div className='row'>
//             <div >
//               <img src={product.image}/>            
//             </div>
//             <div>
//               <h2>{product.name}</h2>
//               <h2>{product.company}</h2>
//               <h2>{product.price}</h2>
//             </div>
//           </div>
//           <hr></hr>
//         </div>
        
//       })}
      
//     </div>}
//     </Wrapper>
//   )
// }
// const Wrapper =styled.section`
// img{
//   width:150px;
//   height:150px;
// }
// .row{
//   display:flex;
//   justfy-content:center;
// }
// .row div{
//   margin:20px;
//   border:2px solid black;
// }
// .container{
//   width:1200px;
// }

// `;