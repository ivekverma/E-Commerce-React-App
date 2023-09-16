import React, { useContext, useEffect, useState,useRef } from "react";
import { styled } from "styled-components";
import Context from "../context/createContext";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";
export default function SingleCategoryLcd(props) {
  const navigate = useNavigate();

  const context = useContext(Context);
  const {
    product,
    getProduct,
    showCategory,
    sortPriceWise,
    showBrand,
    getRamProduct,
    previous,
    setPrevious,
    setProduct,
    lastProductLcd,
    setLastProductMobile,
    setLastProductLcd,
    setLastProductFridge,
    setLastProductLaptop,
    lcdCheck,
    setMobileCheck,
    setFridgeCheck,
    setLaptopCheck,
    setLcdCheck
  } = context;

    useEffect(() => {
      setMobileCheck({name:"vivek",surname:-1})
      setLaptopCheck({name:"vivek",surname:-1})
      setFridgeCheck({name:"vivek",surname:-1})

      if(lcdCheck.surname!==-1){
        
        if(lcdCheck.name==="boxRef2"){
          boxRef2.current[lcdCheck.surname].checked=true;
        }
        else if(lcdCheck.name==="boxRef3"){
          boxRef3.current[lcdCheck.surname].checked=true;
        }
        else if(lcdCheck.name==="boxRef4"){
          boxRef4.current[lcdCheck.surname].checked=true;
        }
        else if(lcdCheck.name==="boxRef5"){
          boxRef5.current[lcdCheck.surname].checked=true;
        }
        else if(lcdCheck.name==="boxRef6"){
          boxRef6.current[lcdCheck.surname].checked=true;
        }
        else if(lcdCheck.name==="boxRef6"){
          boxRef6.current[lcdCheck.surname].checked=true;
        }
        
      }

      setLastProductFridge([])
      setLastProductLaptop([])
      setLastProductMobile([])
      console.log("length of last product is : "+lastProductLcd.length)
      if(lastProductLcd.length<1){
        console.log("length<1 and calling show category")
        showCategory("lcd");

      }
      else{
        console.log("length>1 and channging product")
        console.log(lastProductLcd)
        let newProduct=[]
        for(let i=0;i<lastProductLcd.length;i++){
          newProduct[i]=lastProductLcd[i]
        }
        setProduct(newProduct)
      }
    }, []);


  console.log("coming to single category");
  
  const handlecheck1=(e)=>{
    if(e.target.value==="laptop"){
      navigate('/singlecategorylaptop')
    }
    else if(e.target.value==="refrigerator"){
      navigate('/singlecategoryrefrigerator')
    }
    else if(e.target.value==="mobile"){
      navigate('/singlecategorymobile')
    }
    else{
      navigate('/product')
    }
  }


  let obj2=[]
  const boxRef2=useRef(obj2);
  const handlecheck2=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    if(e.target.value==="all"){
      showCategory("lcd");
    }
    else{
      
      showBrand(e.target.value);
    }
    for(let i=0;i<boxRef2.current.length;i++){
      if(i===index){
        boxRef2.current[i].checked=true;
      }      
    }
    setLcdCheck({name:"boxRef2",surname:index})
  };


  let obj3=[]
  const boxRef3=useRef(obj3);
  const handlecheck3=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    for(let i=0;i<boxRef3.current.length;i++){
      if(i===index){
        boxRef3.current[i].checked=true;
      }      
    }
    sortPriceWise(e.target.value);
    setLcdCheck({name:"boxRef3",surname:index})
  }

  
  let obj4=[]
  const boxRef4=useRef(obj4)
  const handlecheck4=(index)=>(e)=>{
    uncheckAll()
    for(let i=0;i<boxRef4.current.length;i++){
        if(index===i){
            boxRef4.current[i].checked=true;
        }
    }
    let demo=previous
    let newProduct=[]
    let j=0;
    for(let i=0;i<previous.length;i++){
        if(previous[i].search_resolution===e.target.value){
            newProduct[j]=previous[i]
            j++
        }
    }
    setProduct(newProduct)
    setLastProductLcd(newProduct)
    setPrevious(demo)
    setLcdCheck({name:"boxRef4",surname:index})
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
    if(value==="upto24"){
        min=0
        max=24
    }
    else if(value==="24_32"){
        min=24
        max=32
    }
    else if(value==="32_40"){
        min=32
        max=40
    }
    else{
        min=40
        max=100
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
    setLastProductLcd(newProduct)
    setPrevious(demo)
    setLcdCheck({name:"boxRef5",surname:index})
  }
 

  let obj6=[]
  const boxRef6=useRef(obj6)
  const handlecheck6=(index)=>(e)=>{
    uncheckAll()
    for(let i=0;i<boxRef6.current.length;i++){
        if(index===i){
            boxRef6.current[i].checked=true;
        }
    }
    let demo=previous
    let newProduct=[]
    let j=0;
    for(let i=0;i<previous.length;i++){
        if(previous[i].refresh_rate===e.target.value){
            newProduct[j]=previous[i]
            j++
        }
    }
    setProduct(newProduct)
    setLastProductLcd(newProduct)
    setPrevious(demo)
    setLcdCheck({name:"boxRef6",surname:index})
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
            <input type="checkbox" className="check" value={"laptop"} onChange={handlecheck1} />Laptop<br/>
            <input type="checkbox" className="check" value={"refrigerator"} onChange={handlecheck1}/>Refrigerator<br/>
            <input type="checkbox" className="check" value={"mobile"} onChange={handlecheck1}/>Mobile<br/>
            <input type="checkbox" className="check" value={"all"} onChange={handlecheck1}/>All<br/>
           
          </div>
          <div className="ram">
            <h3>Brand</h3>
            <input ref={(element)=>{boxRef2.current[0]=element}} type="checkbox" className="check"  value={"Acer"} onChange={handlecheck2(0)} />Acer<br/>
            <input ref={(element)=>{boxRef2.current[1]=element}} type="checkbox" className="check" value={"LG"} onChange={handlecheck2(1)}/>LG<br/>
            <input ref={(element)=>{boxRef2.current[2]=element}} type="checkbox" className="check" value={"Samsung"} onChange={handlecheck2(2)}/>Samsung<br/>
            <input ref={(element)=>{boxRef2.current[3]=element}} type="checkbox" className="check" value={"MI"} onChange={handlecheck2(3)}/>MI<br/>
            <input ref={(element)=>{boxRef2.current[4]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck2(4)}/>All<br/>
          </div>
          <div className="ram">
            <h3>Price</h3>
            <input ref={(element)=>{boxRef3.current[0]=element}} type="checkbox" className="check" value={"lessthan10000"} onChange={handlecheck3(0)} />Less Than 10000<br/>
            <input ref={(element)=>{boxRef3.current[1]=element}} type="checkbox" className="check" value={"above10000"} onChange={handlecheck3(1)}/>Above 10000<br/>
            <input ref={(element)=>{boxRef3.current[2]=element}} type="checkbox" className="check" value={"lowtohigh"} onChange={handlecheck3(2)}/>Low to High<br/>
            <input ref={(element)=>{boxRef3.current[3]=element}} type="checkbox" className="check" value={"hightolow"} onChange={handlecheck3(3)}/>High to Low<br/>
            <input ref={(element)=>{boxRef3.current[4]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck3(4)}/>Random Price<br/>
          </div>
          <div className="ram">
            <h3>Resolution</h3>
            <input ref={(element)=>{boxRef4.current[0]=element}} type="checkbox" className="check" value={"720"} onChange={handlecheck4(0)}/>720p<br/>
            <input ref={(element)=>{boxRef4.current[1]=element}} type="checkbox" className="check" value={"1080"} onChange={handlecheck4(1)}/>1080p<br/>
            <input ref={(element)=>{boxRef4.current[2]=element}} type="checkbox" className="check" value={"4k"} onChange={handlecheck4(2)}/>4K<br/>
          </div>
          <div className="ram">
            <h3>Screen Size</h3>
            <input ref={(element)=>{boxRef5.current[0]=element}} type="checkbox" className="check" value={"upto24"} onChange={handlecheck5(0)}/>Up to 24"<br/>
            <input ref={(element)=>{boxRef5.current[1]=element}} type="checkbox" className="check" value={"24_32"} onChange={handlecheck5(1)}/>24" - 32"<br/>
            <input ref={(element)=>{boxRef5.current[2]=element}} type="checkbox" className="check" value={"32_40"} onChange={handlecheck5(2)}/>32" - 40"<br/>
            <input ref={(element)=>{boxRef5.current[3]=element}} type="checkbox" className="check" value={"40above"} onChange={handlecheck5(3)}/>40" & Above<br/>
          </div>
          <div className="ram">
            <h3>Refresh Rate</h3>
            <input ref={(element)=>{boxRef6.current[0]=element}} type="checkbox" className="check" value={"60Hz"} onChange={handlecheck6(0)}/>60Hz<br/>
            <input ref={(element)=>{boxRef6.current[1]=element}} type="checkbox" className="check" value={"75Hz"} onChange={handlecheck6(1)}/>75Hz<br/>
            <input ref={(element)=>{boxRef6.current[2]=element}} type="checkbox" className="check" value={"100Hz"} onChange={handlecheck6(2)}/>100Hz<br/>
            <input ref={(element)=>{boxRef6.current[3]=element}} type="checkbox" className="check" value={"144Hz"} onChange={handlecheck6(3)}/>144Hz<br/>
          </div>
        
        </div>
        <div className="allcontent">
        
          <header>
            <h1>Category : LCD</h1>
           
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
  margin-left: 300px;
  // width: 941px;
  // border:2px solid red;
}

.ram{
  // color:red;
  margin-bottom:14px;
}
.container{
  width:1300px;
  // position:absolute;
  position:relative;
  // margin-left:330px;
  margin-top:75px;
  min-height:850px;
  // border:2px solid green;
}
.container .sidebaar,.allcontent{
  display:inline-block;
  
}

.col-3{
  flex-basis:100%;
`;

