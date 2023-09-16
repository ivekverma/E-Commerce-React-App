// import React,{useContext} from 'react'
import React,{ useContext } from 'react'
import HeroSection from './HeroSection'
import Context from '../context/createContext'
// import { AppContext } from '../context/productContext'

export default function About() {
  
  const context=useContext(Context);
  const {name}=context;
  

  return (
    <>
    <p>{name}</p>
      <HeroSection data="Vivek E-Commerec"/>
    </>
    
  )
}
