import React, { useContext, useEffect, useState,useRef } from "react";
import { styled } from "styled-components";
import Context from "../context/createContext";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";
export default function SingleCategoryLaptop(props) {
  const navigate = useNavigate();

  const context = useContext(Context);
  const {
    product,
    getProduct,
    showCategory,
    sortPriceWise,
    showBrand,
    setPrevious,
    setProduct,
    previous,
    lastProductLaptop,
    setLastProductMobile,
    setLastProductLcd,
    setLastProductFridge,
    setLastProductLaptop,
    setMobileCheck,
    setFridgeCheck,
    setLaptopCheck,
    setLcdCheck,
    laptopCheck
  } = context;

    useEffect(() => {
      setMobileCheck({name:"vivek",surname:-1})
      setFridgeCheck({name:"vivek",surname:-1})
      setLcdCheck({name:"vivek",surname:-1})
      console.log(laptopCheck.name)
      console.log(laptopCheck.surname)
      if(laptopCheck.surname!==-1){
        console.log("coming inside if statement")
        if(laptopCheck.name==="boxRef"){
          boxRef.current[laptopCheck.surname].checked=true;
          console.log("coming in boxref")
        }
        else if(laptopCheck.name==="boxRef1"){
          boxRef1.current[laptopCheck.surname].checked=true;
        }
        else if(laptopCheck.name==="boxRef2"){
          boxRef2.current[laptopCheck.surname].checked=true;
        }
        else if(laptopCheck.name==="boxRef5"){
          boxRef5.current[laptopCheck.surname].checked=true;
        }
        else if(laptopCheck.name==="boxRef6"){
          boxRef6.current[laptopCheck.surname].checked=true;
        }
        
      }
      else{
        console.log("not going inseid if statement")
      }
      setLastProductLcd([])
      setLastProductFridge([])
      setLastProductMobile([])
      if(lastProductLaptop.length<1){
        showCategory("laptop");        
      }
      else{
        let newProduct=[]
        for(let i=0;i<lastProductLaptop.length;i++){
          newProduct[i]=lastProductLaptop[i]
        }
        setProduct(newProduct)
      }
    }, []);

  console.log("coming to sinfle category laptop");


  let obj=[]
  const boxRef=useRef(obj);
  const handlecheck1=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    if(e.target.value==="all"){
      showCategory("laptop");
    }
    else{
      showBrand(e.target.value,"laptop");
    }
    for(let i=0;i<boxRef.current.length;i++){
      if(i===index){
        boxRef.current[i].checked=true;
      }      
    }
    setLaptopCheck({name:"boxRef",surname:index})
  }


  let obj1=[]
  const boxRef1=useRef(obj1);
  const handlecheck2=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    for(let i=0;i<boxRef1.current.length;i++){
      if(i===index){
        boxRef1.current[i].checked=true;
      }      
    }
    sortPriceWise(e.target.value);
    setLaptopCheck({name:"boxRef1",surname:index})
  }

 
  let obj2=[]
  const boxRef2=useRef(obj2);
  const handlecheck3=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    for(let i=0;i<boxRef2.current.length;i++){
      if(i===index){
        boxRef2.current[i].checked=true;
      }      
    }
    let demo=previous;
    let newProduct=[]
    let j=0;
    for(let i=0;i<previous.length;i++){
      if(previous[i].ram===e.target.value){
        newProduct[j]=previous[i]
        j++
      }
    }
    console.log(newProduct)
    setProduct(newProduct)
    setLastProductLaptop(newProduct)
    setPrevious(demo)
    setLaptopCheck({name:"boxRef2",surname:index})
  }


  const handlecheck4=(e)=>{
    if(e.target.value==="mobile"){
      navigate('/singlecategorymobile')
    }
    else if(e.target.value==="refrigerator"){
      navigate('/singlecategoryrefrigerator')
    }
    else if(e.target.value==="lcd"){
      navigate('/singlecategorylcd')
    }
    else{
      navigate('/product')
    }
  }


  let obj5=[]
  const boxRef5=useRef(obj5)
  const handlecheck5=(index)=>(e)=>{
    uncheckAll()
    const value=e.target.value
    for(let i=0;i<boxRef5.current.length;i++){
        if(index===i){
            boxRef5.current[i].checked=true;
        }
    }
    let min=0,max=0;
    if(value==="upto13"){
        min=0
        max=13
    }
    else if(value==="13_14"){
        min=13
        max=14
    }
    else if(value==="14_15"){
        min=14
        max=15
    }
    else if(value==="15_16"){
        min=15
        max=16
    }
    else{
        min=16
        max=20
    }

    let demo=previous
    let newProduct=[]
    let j=0;
    for(let i=0;i<previous.length;i++){
        let size=parseInt(previous[i].size)
        if(size>=min && size<max){
            newProduct[j]=previous[i]
            j++
        }
    }
    setProduct(newProduct)
    setLastProductLaptop(newProduct)
    setPrevious(demo)
    setLaptopCheck({name:"boxRef5",surname:index})
  }


  let obj6=[]
  const boxRef6=useRef(obj6)
  const handlecheck6=(index)=>(e)=>{
    uncheckAll()
    for(let i=0;i<boxRef6.current.length;i++){
      if(index===i){
        boxRef6.current[i].checked=true
      }
    }
    let demo=previous;
    let newProduct=[]
    let j=0
    for(let i=0;i<previous.length;i++){
      if(previous[i].operating_system===e.target.value){
        newProduct[j]=previous[i]
        j++;
      }
    }
    setPrevious(demo)
    setProduct(newProduct)
    setLastProductLaptop(newProduct)
    setLaptopCheck({name:"boxRef6",surname:index})
  }

  const uncheckAll=()=>{
    for(let i=0;i<boxRef.current.length;i++){
      console.log(boxRef.current.length)
      boxRef.current[i].checked=false;
    }
    for(let i=0;i<boxRef1.current.length;i++){
      console.log(boxRef1.current.length)
      boxRef1.current[i].checked=false;
    }
    for(let i=0;i<boxRef2.current.length;i++){
      console.log(boxRef2.current.length)
      boxRef2.current[i].checked=false;
    }
    for(let i=0;i<boxRef5.current.length;i++){
      console.log(boxRef5.current.length)
      boxRef5.current[i].checked=false;
    }
    for(let i=0;i<boxRef6.current.length;i++){
      console.log(boxRef6.current.length)
      boxRef6.current[i].checked=false;
    }
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="sidebaar">
          <div className="ram">
            <h3>Other Category</h3>
            <input  type="checkbox" className="check" value={"mobile"} onChange={handlecheck4} />Mobile<br/>
            <input  type="checkbox" className="check" value={"refrigerator"} onChange={handlecheck4}/>Refrigerator<br/> 
            <input  type="checkbox" className="check" value={"lcd"} onChange={handlecheck4}/>LCD<br/> 
            <input  type="checkbox" className="check" value={"all"} onChange={handlecheck4}/>All<br/> 
          </div>
          <div className="ram">
            <h3>Brand</h3>
            <input ref={(element)=>{boxRef.current[0]=element}} type="checkbox" className="check"  value={"ASUS"} onChange={handlecheck1(0)} />Asus<br/>
            <input ref={(element)=>{boxRef.current[1]=element}} type="checkbox" className="check" value={"Dell"} onChange={handlecheck1(1)}/>Dell<br/>
            <input ref={(element)=>{boxRef.current[2]=element}} type="checkbox" className="check" value={"HP"} onChange={handlecheck1(2)}/>HP<br/>
            <input ref={(element)=>{boxRef.current[3]=element}} type="checkbox" className="check" value={"Apple"} onChange={handlecheck1(3)}/>Apple<br/>
            <input ref={(element)=>{boxRef.current[4]=element}} type="checkbox" className="check" value={"Lenovo"} onChange={handlecheck1(4)}/>Lenovo<br/>
            <input ref={(element)=>{boxRef.current[5]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck1(5)}/>All<br/>
           
          </div>
          <div className="ram">
            <h3>Price</h3>
            <input ref={(element)=>{boxRef1.current[0]=element}} type="checkbox" className="check"  value={"lessthan10000"} onChange={handlecheck2(0)} />Less Than 10000<br/>
            <input ref={(element)=>{boxRef1.current[1]=element}} type="checkbox" className="check" value={"above10000"} onChange={handlecheck2(1)}/>Above 10000<br/>
            <input ref={(element)=>{boxRef1.current[2]=element}} type="checkbox" className="check" value={"lowtohigh"} onChange={handlecheck2(2)}/>Low to High<br/>
            <input ref={(element)=>{boxRef1.current[3]=element}} type="checkbox" className="check" value={"hightolow"} onChange={handlecheck2(3)}/>High to Low<br/>
            <input ref={(element)=>{boxRef1.current[4]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck2(4)}/>Random Price<br/>
          </div>
          <div className="ram">
            <h3>RAM</h3>
            <input ref={(element)=>{boxRef2.current[0]=element}} type="checkbox" className="check" value={"8GB"} onChange={handlecheck3(0)}/>8GB<br/>
            <input ref={(element)=>{boxRef2.current[1]=element}} type="checkbox" className="check" value={"16GB"} onChange={handlecheck3(1)}/>16GB<br/>
          </div>
          <div className="ram">
            <h3>Screen Size</h3>
            <input ref={(element)=>{boxRef5.current[0]=element}} type="checkbox" className="check" value={"upto13"} onChange={handlecheck5(0)}/>Up to 13"<br/>
            <input ref={(element)=>{boxRef5.current[1]=element}} type="checkbox" className="check" value={"13_14"} onChange={handlecheck5(1)}/>13" - 14"<br/>
            <input ref={(element)=>{boxRef5.current[2]=element}} type="checkbox" className="check" value={"14_15"} onChange={handlecheck5(2)}/>14" - 15"<br/>
            <input ref={(element)=>{boxRef5.current[3]=element}} type="checkbox" className="check" value={"15_16"} onChange={handlecheck5(3)}/>15" - 16"<br/>
            <input ref={(element)=>{boxRef5.current[4]=element}} type="checkbox" className="check" value={"16above"} onChange={handlecheck5(4)}/>16" & Above<br/>
          </div>
          <div className="ram">
            <h3>Operating System</h3>
            <input ref={(element)=>{boxRef6.current[0]=element}} type="checkbox" className="check" value={"Windows 11 Home"} onChange={handlecheck6(0)}/>Windows 11 Home"<br/>
            <input ref={(element)=>{boxRef6.current[1]=element}} type="checkbox" className="check" value={"Mac OS"} onChange={handlecheck6(1)}/>Mac OS<br/>
           </div>
        </div>
        <div className="allcontent">
        
          <header>
            <h1>Category : Laptop</h1>
          </header>

          <div className="rowProduct">
            {product.map((pro) => {
              return (
                <div className="col-3">
                  <ProductItem key={pro._id} product={pro} />
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
.check{
  width:50px;
  margin-left:-15px;
  // z-index:9999;
}
.check:hover{
  border:2px solid red;
  background-color:pink;
}
.allcontent{
  margin-left:300px;
}

.container{
  width:1300px;
  // position:absolute;
  position:relative;
  // margin-left:330px;
  min-height:850px;
  margin-top:75px;
}

.col-3{
  flex-basis:100%;
`;




