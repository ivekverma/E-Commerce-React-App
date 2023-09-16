import React,{useContext,useEffect, useState} from 'react'
import { styled } from 'styled-components';
import Context from '../context/createContext';
import ProductItem1 from './ProductItem1';
import { Link ,useNavigate} from 'react-router-dom';

export default function Product(props) {
  const navigate=useNavigate()
  const context=useContext(Context);
  const {product,getProduct,showCategory,sortPriceWise,lowToHigh,highToLow,shortProduct,short,nextClick,prevClick,nextFlag,prevFlag,setPrevFlag,setNextFlag}=context;
  let initial=[]
  const [newProduct, setNewProduct] = useState([])
  useEffect(() => {   
    console.log("coming to useeffecy") 
      getProduct();
      setPrevFlag(true);
      setNextFlag(false);
  }, []);

  


  const handlechange=(e)=>{
    let keyword=e.target.value;
    if(keyword==="all"){
      getProduct();
    }
    else{
      if(e.target.value==="mobile"){
        showCategory(keyword);
        navigate('/singlecategorymobile')
      }
      else if(e.target.value==="refrigerator"){
        showCategory(keyword);
        navigate('/singlecategoryrefrigerator')
      }
      else if(e.target.value==="lcd"){
        showCategory(keyword);
        navigate('/singlecategorylcd')
      }
      else{
        showCategory(keyword);
        navigate('/singlecategorylaptop')
      }
    }
  }


  
  

 

  const handleNextClick=()=>{
    nextClick()
    
  }

  const handlePrevClick=()=>{
    prevClick()
  }
  console.log("previous flag"+prevFlag)
  console.log("next flag"+nextFlag)

  return (
    <Wrapper>
      <div className='container'>
      <h1>This is product component</h1>
      <header>

        <select onChange={handlechange} id="category">
            <option className="option" value="all">All</option>
            {/* <option value="laptop"><Link to='/singlecategory'>Laptop</Link></option>
            <option value="mobile"><Link to='/singlecategory'>Mobile</Link></option> */}
           
            <option className="option" value="mobile">mobile</option>
            <option  className="option" value="laptop">Laptop</option>
            <option  className="option" value="lcd">LCD</option>
            <option  className="option" value="refrigerator">Refrigerator</option>
        </select>

       

      </header>
      <div className='rowProduct'>
      
        {short.map((pro)=>{
          return <div className="col-3">
             <ProductItem1 key={pro._id} product={pro}/>
          </div>
          
        })}
       
      </div>
        <div className='rowProduct'>
            <button disabled={prevFlag===true?true:false} onClick={handlePrevClick}>Previous</button>
            <button disabled={nextFlag===true?true:false} onClick={handleNextClick}>Next</button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.container{
  width:1300px;
}

.col-3{
  // flex-basis:100%;
  flex-basis:22%;
}
.option{
  padding:10px;
}

`;




// import React,{useContext,useEffect} from 'react'
// import { styled } from 'styled-components';
// import Context from '../context/createContext';
// import ProductItem from './ProductItem';
// export default function Product(props) {
//   const context=useContext(Context);
//   const {product,newProduct,setNewProduct,getProduct,showCategory,sortPriceWise,sixProduct,setjagain,functionsetting}=context;
  
//   useEffect(() => {
     
//       getProduct();
//       // functionA();
      
//   }, []);
 
//     let productA=[]
//     let j=0;
//     if(product.length>6+j){

//       productA=[]
//       for(let i=0;i<6;i++){
//         productA[i]=product[j];
//         j++;
//       }
//       // functionsetting(productA)
//       setNewProduct(productA)
//     }
//     else{
//       console.log("nothing to show")
//     }
  

//   const functionNext=()=>{
//     let array=[]
//     console.log(j)
//     if(j+6<product.length){
//       array=[]
//       for(let i=0;i<6;i++){
//         array[i]=product[j];
//         j++;
//       }
//       console.log(array);
//      console.log("calling setting function")
//       // functionsetting(array)
//       setNewProduct(array)
//       console.log(newProduct);
//     }
//     else{
//       console.log("no")
//     }
//   }


//   const handlechange=(e)=>{
//     let keyword=e.target.value;
//     if(keyword==="all"){
//       getProduct();
//     }
//     else{
//       showCategory(keyword);
//     }
//   }

//   const functionN=()=>{
//     let array=["vivek","verma","ramesh"]
//     functionsetting(array)
//   }

//   const handlePrice=(e)=>{    
//     sortPriceWise(e.target.value);    
//   }


//   return (
//     <Wrapper>
//       <div className='container'>
//         <h1>This is product component</h1>
//         <header>

//           <select onChange={handlechange} id="category">
//               <option value="all">All</option>
//               <option value="laptop">Laptop</option>
//               <option value="computer">Computer</option>
//               <option value="accessories">Accessories</option>
//               <option value="watch">Watch</option>
//               <option value="mobile">mobile</option>
//           </select>

//           <select onChange={handlePrice} id="price">
//             <option value="lowtohigh">Price Low To HIgh</option>
//             <option value="hightolow">Price High To Low</option>
//             <option value="lessthan40000">Price Less Than 40000</option>
//             <option value="lessthan60000">Price Less Than 70000</option>
//           </select>

//         </header>
//         <div className='rowProduct'>
        
//           {newProduct.map((pro)=>{
//             return <div className="col-3">
//               <ProductItem key={pro._id} product={pro}/>              
//             </div>
            
//           })}
          
//         </div>
//           <div className='rowProduct'>
//             <button>Previous</button>
//             {/* <button onClick={nextFunction}>Next</button> */}
//             <button onClick={functionNext}>Next</button>
//           </div>
//       </div>
//     </Wrapper>
//   )
// }
// const Wrapper=styled.section`
// .container{
//   width:1300px;
// }
// .rowProduct{
//   display:flex;
//   justify-content:space-between;
//   flex-wrap:wrap;
// }
// .col-3{
//   flex-basis:15%;
// `;
