import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'
import FeaturedProduct from './FeaturedProduct'

import SpecialProduct from './SpecialProduct'
import { styled } from 'styled-components'


export default function Home() {
  return (
    <Wrapper>
    
      <HeroSection data="Vivek Store"/>
      <SpecialProduct/>
      <FeaturedProduct/>
      
      <Services/>
      <Trusted/>
      
    </Wrapper>
    
  )
}
const Wrapper=styled.section`

`;

