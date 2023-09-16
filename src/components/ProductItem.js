import React,{useContext} from 'react'
import Context from '../context/createContext';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiRupee } from 'react-icons/bi';
export default function ProductItem(props) {
  const {product}=props;
  const context=useContext(Context);
  const {setId,getSingleProduct}=context;
  
  return (
    <Wrapper>
      
       <div className='block'>
          {/* <div className='imageDiv' > */}
          <div className='imageDiv' style={{backgroundImage:`url(${product.image})`}}>
            {/* <Link to="/singleProduct"><img src="" onClick={()=>{getSingleProduct(product)}} alt="this is "/></Link> */}
          </div>
          <div className='contentDiv'>
          <Link to="/singleProduct" className='link'><p onClick={()=>{getSingleProduct(product)}} className='desc'>{product.description}</p></Link>
          <span className='rupee'><BiRupee className='rupee1'/>{product.discount_price}</span>
          {/* <h2 className='actual'><hr/>M.R.P : <BiRupee className='rupee2'/><span className='off'>{product.actual_price}<span className='discount'>({-product.discount}% off)</span></span></h2> */}
          <h2 className='actual'>M.R.P.: <span className='set'><hr1/><BiRupee id="rupee"/>{product.actual_price}<span id="bold">({-product.discount}% off)</span></span></h2>
          <p className='delivery'>FREE DELIVERY</p>
          </div>      
       
       </div>
          
        
    </Wrapper>
  )
}

const Wrapper=styled.section`
hr1{
  position: absolute;
    width: 50%;
    top:11px;
    left: -14px;
    background-color: black;
    height: 1.4px
}
.set{
  position: relative;
    margin-left: 17px;
}
#rupee{
  position: absolute;
    left: -15px;
    top: 4px;
}

#bold{
  font-weight:Bold;
  margin-left:4px;
}
.delivery{
  margin-top: 20px;
  display: inline-block;
  border: 2px solid black;
  padding: 2px 10px;
  border-radius: 6px;
  background-color: #17ff0030;
  font-size: 13px;
  font-weight: 550;
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
.discount{
  font-weight:600;
  margin-left:5px;
  font-size:17px;
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
  top:14px;
  left:-16px;
}
.link{
  text-decoration:none;
}
.desc{
  font-size: 20px;
  color: black;
  font-weight: 500;
  margin-bottom:10px;
}
.desc:hover{
  color:orange;
}
.imageDiv{
 
  min-width: 286px;
  min-height: 221px;
  border: 2px solid black;
  background-size: 100% 100%;
  border:none;
}
.contentDiv{
  background-color:#8080801a;
  padding-left:10px;
  background-color:#fbfdf8;
  min-width: 674px;
}
img{
  // width: 272px;
  // height: 257px;
  // padding: 10px;
}
.block{
  // border:2px solid black;
  margin-top:20px;
  margin-bottom:20px;
  display:flex;
  background-color:#ff00000f;
  box-shadow:0 0 10px 4px rgba(0,0,0,0.4)
  
}

`;