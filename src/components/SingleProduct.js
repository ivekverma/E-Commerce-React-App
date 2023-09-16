import React,{useContext,useEffect} from 'react';
import Context from '../context/createContext';
import { styled } from 'styled-components';
import { BiRupee } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { TbReplace,TbTruckDelivery } from 'react-icons/tb';
import replace from '../image/replacement.png'
import delivery from '../image/free-shipping.png'
import warranty from '../image/warranty.png'
import payon from '../image/cash-on-delivery.png'
import top from '../image/award.png'
// import { Link } from 'react-router-dom';
export default function SingleProduct(props) {
  const navigate=useNavigate()
  const context=useContext(Context)
  const {singleProduct,setCartProduct,cartProduct}=context;
  console.log(singleProduct)
  let cat=singleProduct.category

  const handlecart=async(cartProduct)=>{
    if(!localStorage.getItem('token')){
      return props.showAlarm("please first login to add product to your cart","error")
    }
    const id=cartProduct._id;
    console.log(id);
        
    const response=await fetch(`http://localhost:2999/api/product/addToCart/${id}`,{
      method:"POST",
      headers:{
        auth_token:localStorage.getItem('token')
      }
    })
    const json=await response.json()
    console.log(json.success)
    console.log(json.pro)
    setCartProduct(json.pro)

    if(json.success){
      props.showAlarm("your product is added successfully","success")
    }

  }

  const buyNow=(p)=>{
    if(localStorage.getItem('token')){
      navigate('/order')
    }
    else{
      return props.showAlarm("Please first login to buy product","error");
    }
    
  }
  
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='first'>
            <img src={singleProduct.image}></img>
          </div>
          <div className='second'>
            <h3 className='desc'>{singleProduct.description}</h3>
            <hr className='hr'></hr>
            <p className='discountPrice'><span>{singleProduct.discount}%</span> <span className='rup'><BiRupee className='discountRupee'/>{singleProduct.discount_price}</span></p>
            <p className='actual1'><hr className='cut'></hr>M.R.P : <BiRupee className='rupee2'/><span className='off'>{singleProduct.actual_price}<span className='discount'></span></span></p>
            <h4 className='tex'>Inclusive of all texas</h4>
            <hr className='hr'/>

            <div className='icons'>
              <div><img src={replace}/><h4>7 days service center replacment</h4></div>
              <div><img src={delivery}/><h4>Free Delivery</h4></div>
              <div><img src={warranty}/><h4>1 Year Warranty</h4></div>
              <div><img src={payon}/><h4>Cash on Delivery</h4></div>
              <div><img src={top}/><h4>Top Brand</h4></div>
              
            </div>
            <hr className='hr'/>

           
            <table>
              {cat==="refrigerator"?
              <div>
                <tr>
                  <th>Brand</th>
                  <td>:&nbsp;&nbsp;{singleProduct.brand}</td>
                </tr>
                <tr>
                  <th>Product Dimension</th>
                  <td>:&nbsp;&nbsp;{singleProduct.dimension}&nbsp;(D for depth,W for width,H for height)</td>
                </tr>
                <tr>
                  <th>Capacity</th>
                  <td>:&nbsp;&nbsp;{singleProduct.capacity}</td>
                </tr>
                <tr>
                  <th>Configuration</th>
                  <td>:&nbsp;&nbsp;{singleProduct.configuration}</td>
                </tr>
                <tr>
                  <th>Rating Star</th>
                  <td>:&nbsp;&nbsp;{singleProduct.rating_star}</td>
                </tr>
              </div>:
              <tr></tr>                
              }
              {cat==="laptop"?
              <div>
                <tr>
                  <th>Brand</th>
                  <td>:&nbsp;&nbsp;{singleProduct.brand}</td>
                </tr>
                <tr>
                  <th>Model Name</th>
                  <td>:&nbsp;&nbsp;{singleProduct.name}&nbsp;(D for depth,W for width,H for height)</td>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <td>:&nbsp;&nbsp;{singleProduct.operating_system}</td>
                </tr>
                <tr>
                  <th>Screen Size</th>
                  <td>:&nbsp;&nbsp;{singleProduct.size}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>:&nbsp;&nbsp;{singleProduct.ram}</td>
                </tr>
                <tr>
                  <th>Storage</th>
                  <td>:&nbsp;&nbsp;{singleProduct.storage}</td>
                </tr>
              </div>:
              <tr></tr>                
              }
              {cat==="lcd"?
              <div>
                <tr>
                  <th>Brand</th>
                  <td>:&nbsp;&nbsp;{singleProduct.brand}</td>
                </tr>
                <tr>
                  <th>Model Name</th>
                  <td>:&nbsp;&nbsp;{singleProduct.name}</td>
                </tr>
                <tr>
                  <th>Resolution</th>
                  <td>:&nbsp;&nbsp;{singleProduct.resolution}</td>
                </tr>
                <tr>
                  <th>Screen Size</th>
                  <td>:&nbsp;&nbsp;{singleProduct.size}&nbsp;Inches</td>
                </tr>
                <tr>
                  <th>Refresh Rate</th>
                  <td>:&nbsp;&nbsp;{singleProduct.refresh_rate}</td>
                </tr>
              </div>:
              <tr></tr>                
              }
              {cat==="mobile"?
              <div>
                <tr>
                  <th>Brand</th>
                  <td>:&nbsp;&nbsp;{singleProduct.brand}</td>
                </tr>
                <tr>
                  <th>Model Name</th>
                  <td>:&nbsp;&nbsp;{singleProduct.name}</td>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <td>:&nbsp;&nbsp;{singleProduct.operating_system}</td>
                </tr>
                <tr>
                  <th>Technology</th>
                  <td>:&nbsp;&nbsp;{singleProduct.technology}</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>:&nbsp;&nbsp;{singleProduct.ram}</td>
                </tr>
                <tr>
                  <th>Storage</th>
                  <td>:&nbsp;&nbsp;{singleProduct.storage}</td>
                </tr>
              </div>:
              <tr></tr>                
              }
              
              
            </table>

            <hr className='hr'/>

            <button className='buy' onClick={()=>{buyNow(singleProduct)}}>Buy Now</button>
            <button id='cart' onClick={()=>{handlecart(singleProduct)}}>Add to Cart</button>
          </div>
        </div>
        
        
      </div>
      <div className='rowProduct'>

      </div>
      

    </Wrapper>

  )
}

const Wrapper=styled.section`

th{
  // border: 2px solid red;
  text-align: left;
  padding: 3px 0px;
  font-size: 17px;
  width: 180px;
  height:33px;
}
td{
  // border: 2px solid red;
    font-size: 17px;
    padding: 3px 0px;
    letter-spacing: 0px;
    height:33px;
}
.tex{
  // margin-bottom:20px;
}
.buy{
  margin-left:231px;
}
.icons{
  display:flex;
  margin-bottom:20px;
}
.icons img{
  width: 58px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid black;
}
.icons div{
  margin: 20px auto;
  text-align: center;
  min-width: 130px;
  /* min-height: 108px; */
  font-size: 11px;
  // border: 2px solid black;
}

.rupee2{
  position:absolute;
  top:5px;
}
.actual1{
  margin-top:5px;
  position:relative;
  margin-bottom: 10px;
}
.off{
  margin-left:13px;
}
.cut{
  width: 61px;
    top: 11px;
    left: 52px;
    position: absolute;
    border: 1px solid black;
}
.rup{
  position:relative;
  color:black;
}
.discountRupee{
  position: absolute;
  left: -15px;
  font-size: 19px;
  top: 8px;
}
.hr{
  background-color:red;
  margin-top:15px;
  margin-bottom:10px;
}
.discountPrice{
  font-size:30px;
  margin-top:-5px;
  position:relative;
  color: red;
}
.discountPrice span{ 
  margin-right:17px;
}
.desc{
  font-size:25px;
  font-weight:500;
}
.container{
  width:1000px;
  margin-top:160px;
}
img{
  width:520px;
  padding:25px;  
}
.row{
  display:flex;
  justify-content:space-between;
  // flex-wrap:wrap;
}
.first,.second{
  // border:2px solid black;
  
}
#cart{
  margin-left:10px;
}
.container{
  // border:2px solid red;
  width:1205px;
  box-shadow:0 0 10px 3px rgba(0,0,0,0.4);
}
`;
