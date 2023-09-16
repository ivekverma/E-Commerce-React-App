import "./App.css"
import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import SingleProduct from './components/SingleProduct';
import Navbar from './components/Navbar';
import Error from './components/Error';
import Cart1 from "./components/Cart1";
import Footer from "./components/Footer";
import ProductContext from "./context/ProductContext";
import Signup from "./userComponent/Signup";
import AddCart from "./components/AddCart";
import Login from "./userComponent/Login";
import SingleCategoryMobile from "./components/SingleCategoryMobile";
import SingleCategoryLaptop from "./components/SingleCategoryLaptop";
import Order from "./components/Order";
import Logout from "./userComponent/Logout";
import SingleCategoryRefrigerator from "./components/SingleCategoryRefrigerator";
import SingleCategoryLcd from "./components/SingleCategoryLcd";
import Alarm from "./components/Alarm";
export default function App() {
  const [alarm, setAlarm] = useState({msg:"",type:""})

    const showAlarm=(msg,type)=>{
      setAlarm({
        msg:msg,
        type:type
      })
      setTimeout(() => {
        setAlarm({msg:"",type:""})
      }, 3000);
    }
 
  return (
    <ProductContext>
    <Router>
      <div className="main-container">
      <Navbar/>
      <Alarm alarm={alarm}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/product" element={<Product/>}/>
        <Route exact path="/singleProduct" element={<SingleProduct showAlarm={showAlarm}/>}/>       
        <Route exact path="/cart" element={<Cart1/>}/>             
        <Route exact path="/signup" element={<Signup/>}/>             
        <Route exact path="/login" element={<Login/>}/>             
        <Route exact path="/addcart" element={<AddCart/>}/>             
        <Route exact path="/singlecategorymobile" element={<SingleCategoryMobile/>}/>             
        <Route exact path="/singlecategorylaptop" element={<SingleCategoryLaptop/>}/>             
        <Route exact path="/singlecategoryrefrigerator" element={<SingleCategoryRefrigerator/>}/>             
        <Route exact path="/singlecategorylcd" element={<SingleCategoryLcd/>}/>             
        <Route exact path="/order" element={<Order showAlarm={showAlarm}/>}/>             
        <Route exact path="/logout" element={<Logout/>}/>             
        <Route exact path="*" element={<Error/>}/>       
      </Routes>
      
      </div>
      <Footer/>
    </Router>
    </ProductContext>
  )
}
