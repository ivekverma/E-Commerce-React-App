import React,{useEffect,useContext} from 'react'
import { styled } from 'styled-components'
import Context from '../context/createContext';
import {BiRupee} from 'react-icons/bi'
import { Link ,useNavigate} from 'react-router-dom';



export default function SingleCart1(props) {
    const navigate=useNavigate()
    const {product,totalchange,initial,length}=props;
    const context=useContext(Context)
    const {addquan,removequan,finalTotal,total,setTotal,removeItem,getSingleProduct}=context

    useEffect(() => {
        // console.log("called")
        
        console.log(product.discount_price)
        console.log(product.count)
        finalTotal(product.discount_price,product.count,length*2)
    }, [])
    
    let desc=product.description
    if(desc.length>100){
        let newDesc=desc.slice(0,130)+"...";
        desc=newDesc
    }

    const buyNow=(p)=>{
        if(localStorage.getItem('token')){
          navigate('/order')
        }
        else{
          return alert("Please first login to buy product");
        }
        
      }

  return (
    <Wrapper>
        <tr className='table_row'>
            <td className='first'>
                <div className='row'>
                    <div className='row1'>
                        {/* <img src={product.image}/>    */}
                        <Link to="/singleProduct"><img src={product.image} onClick={()=>{getSingleProduct(product)}} alt="this is "/></Link>
         
                    </div>
                    <div className='shortdesc'>
                        {/* <h2 >{product.description}</h2> */}
                        <Link to="/singleProduct" className='desc1' onClick={()=>{getSingleProduct(product)}}>{desc} </Link>
                        <br/><br/>
                        <span className='bold'>Brand:   </span>
                        <span>{product.brand}</span>
                        <br/>
                        <span className='bold'>Category:   </span>
                        <span>{(product.category).toUpperCase()}</span>
                       
                    </div>
                </div>
            </td>

            <td className='second'>
                <div className='center'>
                <span className='total1'><BiRupee className='rupee1'/>{product.discount_price}</span>
                </div>
                
            </td>
            {/* <td className='second'>
                <div className='center'>
                <BiRupee className='rupee1'/>{product.discount_price}
                </div>
                
            </td> */}

            <td className='third'>
                    <div className='quantity'>
                        <div id="quant1" onClick={()=>{removequan(product)}} className='removequan'>-</div>
                        <div id="quant2">{product.count}</div>
                        <div id="quant3" onClick={()=>{addquan(product)}} className='addquan'>+</div>                        
                    </div>                  
            </td>

            <td className='forth'>
                <span className="total1" onChange={()=>{totalchange(product.discount_price*product.count)}}><BiRupee className='rupee1'/>{product.discount_price*product.count}</span>
            </td>
            {/* <td className='forth'>
                <p id="total" onChange={()=>{totalchange(product.discount_price*product.count)}}><BiRupee className='rupee1'/>{product.discount_price*product.count}</p>
            </td> */}

            <td className='fifth'>
                {/* <button className='actionButton'>Buy</button> */}
                <button className='actionButton' onClick={()=>{buyNow(product)}}>Buy</button>
                <button className='actionButton' onClick={()=>{removeItem(product)}}>Remove</button>
            </td>
        </tr>
        <hr/>
    </Wrapper>
    
  )
  
}
const Wrapper=styled.section`
.bold{
    font-weight:bold;
}
.desc1{
    color: black;
    text-align: justify;
    text-decoration: none;
}
.desc1:hover{
    color:orange;
}
.shortdesc h2{
    font-size: 15px;
    color: #0e0e66;
    line-height: 20px;
    margin-bottom: 6px;
}
.shortdesc span{
    font-size:15px;
}
hr{
    width: 254%;
    height: 3px;
    background-color: #80808094
}
.rupee1{
    position: absolute;
    top: 2px;
    /* font-size: 18px; */
    left: -15px;
}
.table_row{
    position:relative;
}
td{
    border:none;
}
.first{
    width:525px;
}
.second{
    position:absolute;
    left:526px;
    top:62px;
    width:200px;
    // border:2px solid green;
    text-align:center;
}
.third{
    position: absolute;
    left: 760px;
    top: 58px;
    width: 143px;
    // border: 2px solid green;
    border:none;
}
.forth{
    
    position:absolute;
    left:930px;
    top:62px;
    width:200px;
    // border:2px solid green;
    text-align: center ;
}
.fifth{
    // padding-right:10px;
    position:absolute;
    left:1130px;
    top:48px;
    width:200px;
    // border:2px solid green;
    text-align: right ;
}
.quantity{
    // border:2px solid black;
    width:140px;
   displa:flex;
   justify-content:space-around;
   cursor:pointer;
}
.quantity div{
    border: 3px solid black;
    width: 30px;
    display: inline-block;
    text-align: center;
    padding: 3px 10px;
    font-weight:bold;
}
#quant2{
    padding:3px 36px;
}
#quant1{
    border-top-left-radius:7px ;
    border-bottom-left-radius:7px ;
    border-right:none;
}
#quant3{
    border-top-right-radius:7px ;
    border-bottom-right-radius:7px ;
    border-left:none;
}
.total1{
    font-weight: bold;
    font-size: 18px;
    position: relative;
}
.actionButton{
    padding: 3px 10px;
    margin-right: 25px;
    border:2px solid black;
    color:black;
    transition:all 0.2s;
}
.actionButton:hover{
    color:white;
    letter-spacing: 1px;
}
`;
