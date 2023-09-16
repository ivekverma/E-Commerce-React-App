import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import track from "../image/shop.jpg"
import Context from '../context/createContext'
export default function HeroSection(props) {
    const context=useContext(Context)
    const {getUserData,getCartProducts,setLastProductMobile,setLastProductLcd,setLastProductFridge,setLastProductLaptop}=context;
    useEffect(() => {
        setLastProductMobile([])
        setLastProductLcd([])
        setLastProductFridge([])
        setLastProductLaptop([])
     getUserData()
     getCartProducts()
    }, [])
    
  return (
    <Wrapper>
        <div className="container">
            <div className="herosec">
                <div className="data">
                    <p >Welcome to </p>
                    <h1 className="headin">{props.data}</h1>
                    <p className="headin">Discover the ultimate destination for budget-conscious shoppers at our electronic e-commerce shop. We take pride in offering top-notch electronic products at unbeatable prices, ensuring you get the best value for your money. Our commitment to excellence means you can trust the quality of every item we sell. Don't compromise on quality or break the bank shopwith us and experience the perfect blend of affordability and excellence in electronic products today!</p>
                    <button>Shop Now</button>
                </div>
                <div className="image">
                  <div className='back'></div>
                    <img src={track} alt='image to dispaly'/>
                   
                    
                </div>
            </div>
            
        </div>
        
    </Wrapper>
  )
}

const Wrapper=styled.section`
.container{
    width:1100px;
}
.herosec{
    display: flex;
    justify-content: space-between;
    font-family:cursive;
    box-shadow:0 0 10px 3px rgba(0,0,0,0.7);
    padding:17px;
}
.data{
    // border: 2px solid red;
    width: 47%;
    text-align:justify;
}
.image{
    // border: 2px solid green;
    position: relative;
    width: 47%;
}
.back{
    position: absolute;
    background-color: red;
    top: -30px;
    right: -30px;
    width: 60%;
    height: 60%;
    z-index: -1;
}
img{
    width:100%;

}
.headin{
    margin-top: 2vh;
    margin-bottom: 11px;
}
// button{
//     background-color: red;
//     color:white;
//     padding: 10px;
//     border-radius: 5px;
//     cursor: pointer;
//     margin-top: 2vh;
// }
@media(max-width:600px){
    .herosec{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .data{
        width: 80%;
        font-size: 10vw;
    }
    .image{
        margin-top: 6vh;
        width: 80%;
    }
}    
`;
