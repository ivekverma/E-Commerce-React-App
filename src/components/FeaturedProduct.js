import React,{useContext, useEffect} from 'react'
import { styled } from 'styled-components'
import Context from '../context/createContext';
import ProductItem1 from './ProductItem1';
export default function FeaturedProduct() {

    const context=useContext(Context)
    const {product,getFeaturedProduct}=context;

    useEffect(() => {
        getFeaturedProduct("yes");
    }, [])
    
    
  return (
    <Wrapper>
        <div className='container'>
          <div className='row1'>
          <span className='heading'>Featured Product</span>
          </div>           
            <div className='rowProduct'>      
                {product.map((pro)=>{
                return <div className="col-3">
                    <ProductItem1 key={pro._id} product={pro}/>
                </div>                
                })}
       
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.col-3{
    // flex-basis:100%;
    flex-basis:30%;
  }
`;
