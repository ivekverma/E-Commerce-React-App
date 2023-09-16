import React,{useContext} from 'react'
import Context from '../context/createContext';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
export default function ProductItem1(props) {
  const {product}=props;
  const context=useContext(Context);
  const {setId,getSingleProduct}=context;
  let desc=product.description
  if(desc.length>100){
    let newDesc=desc.slice(0,100)+"...";
    desc=newDesc
  }
  return (
    <Wrapper>
      
       <div className='block'>
        <div className='imageDiv' >
          <Link to="/singleProduct"><img src={product.image} onClick={()=>{getSingleProduct(product)}} alt="this is "/></Link>
        </div>
        <div className='contentDiv'>
        <Link to="/singleProduct" className='link'><p onClick={()=>{getSingleProduct(product)}} className='desc'>{desc}</p></Link>
       <h2 className='rupee'><BiRupee className='rupee1'/>{product.discount_price}</h2>
       <span className='discount'><BiRupee id='rs'/><span id="price">{product.actual_price}</span>&nbsp;({-product.discount}% off)</span>
       
       
        </div>
       
       
       </div>
          
        
    </Wrapper>
  )
}
const Wrapper=styled.section`
#price{
  color:black;
  position:relative;
}
#price::before{
  content: "";
  position: absolute;
  top: 10px;
  left: -10px;
  width: 136%;
  height: 1.5px;  
  background-color: black;
}
.discount{
  font-weight: 600;
  margin-left: 11px;
  font-size: 15px;
  position:relative;
  color:red;
}
#rs{
  top: 4px;
    position: absolute;
    left: -12px;
    font-size: 14px;
    color:black;
}

.delivery{
  margin-top:8px;
}
hr{
  position: absolute;
  width: 65px;
  height: 1.5px;
  left: 54px;
  top: 11px;
  background-color: #000000a8;
  border: none;
}
.off{
  margin-left:14px;
}
.actual{
  font-size:17px;
  font-weight: 400;
  position:relative;
  // margin-top: -27px;
}
.rupee2{
  position:absolute;
  // top:5px;
  margin-top:5px;
}

.rupee{
  margin-top: 3px;
  margin-left: 15px;
  font-size: 40px;
  font-weight: 350;
  position: relative
}
.rupee1{
  position:absolute;
  font-size:19px;
  top:11px;
  left:-16px;
}
.link{
  text-decoration:none;
}
.desc{
  font-size: 20px;
  color: black;
  font-weight: 500;
  letter-spacing: 1px;
}
.desc:hover{
  color:orange;
}
.imageDiv{
  
  background-color:white;
  
}
.contentDiv{
  
  padding-left:10px;
}
img{
  width:270px;
  height:260px;  
  padding:19px;
}
.block{
//   border:2px solid black;
box-shadow: 0 0 7px 3px rgba(0,0,0,0.2);
  margin-top:20px;
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  border-radius: 6px;
    cursor: pointer;
    min-height:482px;
    background-color:#8080801a;
    margin-top:45px;
    transition:transform 0.2s;
}
.block:hover{
    transform:translateY(-10px);
}

`;