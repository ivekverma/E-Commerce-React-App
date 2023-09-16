import React, { useState,useContext, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import Context from "../context/createContext";
export default function Navbar() {
  const navigate=useNavigate();
  const context=useContext(Context)
  const {setCartProduct,getCartProducts,count}=context
  const [menuIcon, setMenuIcon] = useState();
 
  

  const optionShow=()=>{
    document.getElementById('option').style.display='flex';
    document.getElementById('row').style.display='none';

  }
  const optionHide=()=>{
    document.getElementById('option').style.display='none';
    document.getElementById('row').style.display='flex';
  }

  const handleLogout=()=>{
    let initial=[]
    localStorage.removeItem('token');
    setCartProduct(initial)
    
    navigate('/logout')
  }

  const homeColor="blue";

  return (
    <Wrapper>
      <nav>
        <ul>
          <div className="row" id="row">
            <div>
              <h4>Vivek Store</h4>
            </div>
            <div
              className={menuIcon ? "nav-row active" : "nav-row"}
              id="nav-row"
            >
              <Link to="/">
                <li id="home" >Home</li>
              </Link>
              <Link to="/product">
                <li id="product">Product</li>
              </Link>

              <Link to="/about">
                <li id="about">About</li>
              </Link>
              <Link to="/contact">
                <li id="contact">Contact</li>
              </Link>
              {localStorage.getItem('token')?
              <Link to="/cart" className="trollymain">
              <FiShoppingCart  className="trolly"/>
              <div className="total-item">{count}</div>
              </Link>:
              
              <Link to="/cart" className="trollymain">
                <FiShoppingCart  className="trolly"/>
                {/* <div className="total-item">{count}</div> */}
              </Link>
              }

              {/* <Link to="/login">
                <li>Login</li>
              </Link>
              <Link to="/signup">
                <li>Signup</li>
              </Link>
              <Link to="">
                <li onClick={handleLogout}>Logout</li>
              </Link> */}
              </div>
              <div>
              {localStorage.getItem('token')?
              <li onClick={handleLogout}>Logout</li>:
              <div>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/signup"><li>SignUp</li></Link>
              </div>
              
              }
              </div>
              

            
            <div className="nav-btn">
              <CgMenu id="nav-icon" onClick={optionShow}></CgMenu>
              
            </div>
          </div>
        </ul>
      </nav>

      {/* <div id="option">
        <span id="close" onClick={optionHide}>X</span>
        <Link to="/">
          <li onClick={optionHide}>Home</li>
        </Link>
        <Link to="/product">
          <li onClick={optionHide}>Product</li>
        </Link>
        <Link to="/about">
          <li onClick={optionHide}>About</li>
        </Link>
        <Link to="/contact">
          <li onClick={optionHide}>Contact</li>
        </Link>
        <Link to="/cart">
          <FiShoppingCart className="trolly" />
          <span className="total-item">10</span>
        </Link>
      </div> */}
    </Wrapper>
  );
}


const Wrapper = styled.section`
#home{
  margin-left:142px;
}
.trollymain{
  position:relative;
}
Wrapper{
  font-family:'Dancing Script';
}
nav {
  background-color: #fbfdf8;
  width:100%;
  position:fixed;
  top:0;
  z-index:9999;
  padding:10px;
  font-family:'Dancing Script';
}
ul {
  padding-left: 10px;
  padding-right: 10px;
}
li {
  padding: 8px;
  display: inline-block;
  cursor:pointer;
  position:relative;
  margin: 0 20px;
  transition: all 0.4s;
  border:4px solid black;
}
li::before{
  content: "";
  position: absolute;
  top: -4px;
  left: 70%;
  width: 18%;
  // height: 28%;
  border: 4px solid white;
  border-bottom: none;
  border-right: none;
  border-left: none;
  // transition: all 0.3s;
  box-sizing: border-box;
}
// li::before{
//   content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 18%;
//     height: 28%;
//     border: 3px solid red;
//     border-bottom: none;
//     border-right: none;
//     transition:all 0.3s;
//     box-sizing:border-box;
// }
li:hover:before{
  content: "";
  position: absolute;
  top: -4px;
  left: 20%;
  width: 25%;
  // height: 28%;
  border: 4px solid white;
  border-bottom: none;
  border-right: none;
  border-left: none;
  transition: all 0.2s;
  box-sizing: border-box;
}
// li:hover:before{
//   content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     border: 3px solid red;
//     border-bottom: none;
//     border-right: none;
//     // transition:all 0.3s;
// }
li::after{
  content: "";
    position: absolute;
    bottom: -4px;
    right: 70%;
    width: 18%;
    height: 28%;
    border: 4px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: all 0.2s;
    box-sizing: border-box;
}
// li::after{
//   content: "";
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 18%;
//     height: 28%;
//     border: 3px solid red;
//     border-top: none;
//     border-left: none;
//     transition:all 0.2s;
//     box-sizing:border-box;
// }
li:hover:after{
  content: "";
    position: absolute;
    bottom: -4px;
    right: 20%;
    width: 25%;
    height: 28%;
    border: 4px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: all 0.2s;
    box-sizing: border-box;
    
}
#home:hover{
  box-shadow:0 0 20px 3px rgba(500,0,0,0.9);
  transform:scale(1.1);
}
#product:hover{
  box-shadow:0 0 20px 3px rgba(0,500,0,0.9);
  transform:scale(1.1);
}
#about:hover{
  box-shadow:0 0 20px 3px rgba(0,0,500,0.9);
  transform:scale(1.1);
}
#contact:hover{
  transform:scale(1.1);
  box-shadow:0 0 20px 3px yellow;
}

// li:hover{
//   box-shadow:0 0 20px 3px rgba(500,0,0,0.9)
// }
// li:hover:after{
//   content: "";
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     width: 100%;
//     height: 100%;
//     border: 3px solid red;
//     border-top: none;
//     border-left: none;
// }
// li:hover {
//   background-color: green;
// }
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.trolly {
  position: relative;
  padding: 3px;
  width: 50px;
  height: 32px;
  align-items: center;
}
.nav-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-row li {
  color: black;
}
.total-item {
  position: absolute;
    width: 20px;
    right: 7px;
    display: flex;
    height: 20px;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    top: -4px;
    background-color: lightblue;
    border-radius: 50%;
    font-size: 10px;
    color: black;
    font-weight: 700;
    /* padding: 2px; */
    border: 2px solid black;
}
.nav-btn {
  display: none;
}
@media (max-width: 600px) {
  .nav-btn {
    display: block;
  }
  .nav-row {
    display: none;
  }
  h4 {
    font-size: 10vw;
  }
  .trolly {
    width:37vw;
  }
}
// .active .nav-row {
//   display: flex;
//   flex-direction: column;
//   font-size: 30px;
// }
#nav-icon {
  width: 10vw;
  height: 5vh;
}
#nav-close {
    display:none;
  width: 10vw;
  height: 5vh;
}
#option{
    width: 100vw;
    background-color: #f2c4c4;
    height: 100vh;
    display: none;
    flex-direction: column;
    font-size: 10vw;
    align-items: center;
    padding-top: 24vh;
    padding-bottom: 24vh;
    justify-content: space-between;
}
`;