import React, { useContext, useEffect, useState,useRef } from "react";
import { styled } from "styled-components";
import Context from "../context/createContext";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";
export default function SingleCategoryRefrigerator(props) {
  const navigate = useNavigate();

  const context = useContext(Context);
  const {
    product,
    getProduct,
    showCategory,
    sortPriceWise,
    showBrand,
    setProduct,
    setPrevious,
    previous,
    lastProductFridge,
    setLastProductMobile,
    setLastProductLcd,
    setLastProductFridge,
    setLastProductLaptop,
    fridgeCheck,
    setMobileCheck,
    setFridgeCheck,
    setLaptopCheck,
    setLcdCheck
  } = context;

    useEffect(() => {

      setMobileCheck({name:"vivek",surname:-1})
      setLaptopCheck({name:"vivek",surname:-1})
      setLcdCheck({name:"vivek",surname:-1})

      if(fridgeCheck.surname!==-1){
        
        if(fridgeCheck.name==="boxRef2"){
          boxRef2.current[fridgeCheck.surname].checked=true;
        }
        else if(fridgeCheck.name==="boxRef3"){
          boxRef3.current[fridgeCheck.surname].checked=true;
        }
        else if(fridgeCheck.name==="boxRef4"){
          boxRef4.current[fridgeCheck.surname].checked=true;
        }
        else if(fridgeCheck.name==="boxRef5"){
          boxRef5.current[fridgeCheck.surname].checked=true;
        }
        else if(fridgeCheck.name==="boxRef6"){
          boxRef6.current[fridgeCheck.surname].checked=true;
        }
        
      }
      
      setLastProductLcd([])
      setLastProductLaptop([])
      setLastProductMobile([])
      if(lastProductFridge.length<1){
        showCategory("refrigerator");        
      }
      else{
        let newProduct=[]
        for(let i=0;i<lastProductFridge.length;i++){
          newProduct[i]=lastProductFridge[i]
        }
        setProduct(newProduct)
      }
    }, []);

  console.log("coming to sinfle category refrigerator");

  const handlecheck1=(e)=>{
    if(e.target.value==="mobile"){
      navigate('/singlecategorymobile')
    }
    else if(e.target.value==="lcd"){
      navigate('/singlecategorylcd')
    }
    else if(e.target.value==="laptop"){
      navigate('/singlecategorylaptop')
    }
    else{
      navigate('/product')
    }
  }


  let obj=[]
  const boxRef2=useRef(obj);
  const handlecheck2=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    if(e.target.value==="all"){
      showCategory("refrigerator");
    }
    else{
      showBrand(e.target.value,"fridge");
    }
    for(let i=0;i<boxRef2.current.length;i++){
      if(i===index){
        boxRef2.current[i].checked=true;
      }      
    }    
    setFridgeCheck({name:"boxRef2",surname:index})
  };
  

  let obj1=[]
  const boxRef3=useRef(obj1);
  const handlecheck3=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    for(let i=0;i<boxRef3.current.length;i++){
      if(i===index){
        boxRef3.current[i].checked=true;
      }      
    }
    sortPriceWise(e.target.value);
    setFridgeCheck({name:"boxRef3",surname:index})
  }

 
  let obj2=[]
  const boxRef4=useRef(obj2);
  const handlecheck4=(index)=>(e)=>{
    uncheckAll()
    let thiscap=e.target.value
    console.log(e.target.value);
    for(let i=0;i<boxRef4.current.length;i++){
      if(i===index){
        boxRef4.current[i].checked=true;
      }      
    }
    
    let min=0;
    let max=0;
    if(thiscap==="100_200"){
      min=100;
      max=200;
    }
    else if(thiscap==="200_300"){
      min=200;
      max=300;
    }
    else if(thiscap==="300_400"){
      min=300;
      max=400;
    }
    else{
      min=400;
      max=700;
    }
    let demo=previous;
    let newProduct=[]
    let j=0;
    
    for(let i=0;i<previous.length;i++){
      let capacity=parseInt(previous[i].capacity);
      if(capacity>min && capacity<max){
        newProduct[j]=previous[i]
        j++
      }
    }
    console.log(newProduct)
    setProduct(newProduct)
    setLastProductFridge(newProduct)
    setPrevious(demo)   
    setFridgeCheck({name:"boxRef4",surname:index}) 
  };


  let obj5=[]
  const boxRef5=useRef(obj5)
  const handlecheck5=(index)=>(e)=>{
    uncheckAll()
    for(let i=0;i<boxRef5.current.length;i++){
        if(i===index){
            boxRef5.current[i].checked=true;
        }
    }    
    let demo=previous
    let newProduct=[]
    let j=0;
    for(let i=0;i<previous.length;i++){
      if(previous[i].rating_star===e.target.value){
        newProduct[j]=previous[i]
        j++
      }
    }
    setProduct(newProduct)
    setLastProductFridge(newProduct)
    setPrevious(demo)
    setFridgeCheck({name:"boxRef5",surname:index})
  }

  let obj6=[]
  const boxRef6=useRef(obj6)
  const handlecheck6=(index)=>(e)=>{
    uncheckAll()
    for(let i=0;i<boxRef6.current.length;i++){
      if(i===index){
        boxRef6.current[i].checked=true
      }
    }
    let demo=previous
    let newProduct=[]
    let j=0;
    for(let i=0;i<previous.length;i++){
      if(previous[i].door===e.target.value){
        newProduct[j]=previous[i]
        j++
      }
    }
    setProduct(newProduct)
    setLastProductFridge(newProduct)
    setPrevious(demo)
    setFridgeCheck({name:"boxRef6",surname:index})
  }


  const uncheckAll=()=>{
    for(let i=0;i<boxRef2.current.length;i++){
      console.log(boxRef2.current.length)
      boxRef2.current[i].checked=false;
    }
    for(let i=0;i<boxRef3.current.length;i++){
      console.log(boxRef3.current.length)
      boxRef3.current[i].checked=false;
    }
    for(let i=0;i<boxRef4.current.length;i++){
      console.log(boxRef4.current.length)
      boxRef4.current[i].checked=false;
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
            <input  type="checkbox" className="check" value={"mobile"} onChange={handlecheck1} />Mobile<br/>
            <input  type="checkbox" className="check" value={"lcd"} onChange={handlecheck1}/>LCD<br/> 
            <input  type="checkbox" className="check" value={"laptop"} onChange={handlecheck1}/>Laptop<br/> 
            <input  type="checkbox" className="check" value={"all"} onChange={handlecheck1}/>All<br/> 
          </div>
          <div className="ram">
            <h3>Brand</h3>
            <input ref={(element)=>{boxRef2.current[0]=element}} type="checkbox" className="check"  value={"Whirlpool"} onChange={handlecheck2(0)} />Whirlpool<br/>
            <input ref={(element)=>{boxRef2.current[1]=element}} type="checkbox" className="check" value={"Godrej"} onChange={handlecheck2(1)}/>Godrej<br/>
            <input ref={(element)=>{boxRef2.current[2]=element}} type="checkbox" className="check" value={"Samsung"} onChange={handlecheck2(2)}/>Samsumg<br/>
            <input ref={(element)=>{boxRef2.current[3]=element}} type="checkbox" className="check" value={"LG"} onChange={handlecheck2(3)}/>LG<br/>
            <input ref={(element)=>{boxRef2.current[4]=element}} type="checkbox" className="check" value={"Haier"} onChange={handlecheck2(4)}/>Haier<br/>
            <input ref={(element)=>{boxRef2.current[5]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck2(5)}/>All<br/>
           
          </div>
          <div className="ram">
            <h3>Price</h3>
            <input ref={(element)=>{boxRef3.current[0]=element}} type="checkbox" className="check"  value={"lessthan10000"} onChange={handlecheck3(0)} />Less Than 10000<br/>
            <input ref={(element)=>{boxRef3.current[1]=element}} type="checkbox" className="check" value={"above10000"} onChange={handlecheck3(1)}/>Above 10000<br/>
            <input ref={(element)=>{boxRef3.current[2]=element}} type="checkbox" className="check" value={"lowtohigh"} onChange={handlecheck3(2)}/>Low to High<br/>
            <input ref={(element)=>{boxRef3.current[3]=element}} type="checkbox" className="check" value={"hightolow"} onChange={handlecheck3(3)}/>High to Low<br/>
            <input ref={(element)=>{boxRef3.current[4]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck3(4)}/>Random Price<br/>
          </div>
          <div className="ram">
            <h3>Capacity</h3>
            <input ref={(element)=>{boxRef4.current[0]=element}} type="checkbox" className="check" value={"100_200"} onChange={handlecheck4(0)}/>between 100-200<br/>
            <input ref={(element)=>{boxRef4.current[1]=element}} type="checkbox" className="check" value={"200_300"} onChange={handlecheck4(1)}/>between 200-300<br/>
            <input ref={(element)=>{boxRef4.current[2]=element}} type="checkbox" className="check" value={"300_400"} onChange={handlecheck4(2)}/>between 300-400<br/>
            <input ref={(element)=>{boxRef4.current[3]=element}} type="checkbox" className="check" value={"above400"} onChange={handlecheck4(3)}/>Above 400<br/>
            
           </div>
          <div className="ram">
            <h3>Rating Star</h3>
            <input ref={(element)=>{boxRef5.current[0]=element}} type="checkbox" className="check" value={"2 Star"} onChange={handlecheck5(0)}/>2 Star<br/>
            <input ref={(element)=>{boxRef5.current[1]=element}} type="checkbox" className="check" value={"3 Star"} onChange={handlecheck5(1)}/>3 Star<br/>
            <input ref={(element)=>{boxRef5.current[2]=element}} type="checkbox" className="check" value={"4 Star"} onChange={handlecheck5(2)}/>4 Star<br/>
            <input ref={(element)=>{boxRef5.current[3]=element}} type="checkbox" className="check" value={"5 Star"} onChange={handlecheck5(3)}/>5 Star<br/>            
           </div>
          <div className="ram">
            <h3>Configuration</h3>
            <input ref={(element)=>{boxRef6.current[0]=element}} type="checkbox" className="check" value={"single"} onChange={handlecheck6(0)}/>Single Door<br/>
            <input ref={(element)=>{boxRef6.current[1]=element}} type="checkbox" className="check" value={"double"} onChange={handlecheck6(1)}/>Double Door<br/>
            <input ref={(element)=>{boxRef6.current[2]=element}} type="checkbox" className="check" value={"multi"} onChange={handlecheck6(2)}/>Multi Door<br/>
           </div>
        </div>
        <div className="allcontent">
        
          <header>
            <h1>Category : Refrigerator</h1>
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
  min-height:880px;
  margin-top:75px;
}

.col-3{
  flex-basis:100%;
`;




