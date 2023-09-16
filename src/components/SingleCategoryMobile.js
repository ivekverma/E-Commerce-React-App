import React, { useContext, useEffect, useState,useRef } from "react";
import { styled } from "styled-components";
import Context from "../context/createContext";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";
export default function SingleCategory(props) {
  const navigate = useNavigate();
  // const [check, setCheck] = useState({refBox:"",ind:"not"})
  // const [check1, setCheck1] = useState("")
  // const [check2, setCheck2] = useState(-1)
  const context = useContext(Context);
  const {
    product,
    getProduct,
    showCategory,
    sortPriceWise,
    showBrand,
    getRamProduct,
    setPrevious,
    setProduct,
    previous,
    lastProductMobile,
    setLastProductMobile,
    setLastProductLcd,
    setLastProductFridge,
    setLastProductLaptop,
    mobileCheck,
    setMobileCheck,
    setFridgeCheck,
    setLaptopCheck,
    setLcdCheck
    
  } = context;

    useEffect(() => {
      setFridgeCheck({name:"vivek",surname:-1})
      setLaptopCheck({name:"vivek",surname:-1})
      setLcdCheck({name:"vivek",surname:-1})
      if(mobileCheck.surname!==-1){
        
        if(mobileCheck.name==="boxRef"){
          boxRef.current[mobileCheck.surname].checked=true;
        }
        else if(mobileCheck.name==="boxRef1"){
          boxRef1.current[mobileCheck.surname].checked=true;
        }
        else if(mobileCheck.name==="boxRef2"){
          boxRef2.current[mobileCheck.surname].checked=true;
        }
        else if(mobileCheck.name==="boxRef5"){
          boxRef5.current[mobileCheck.surname].checked=true;
        }
        
      }
      else{
        console.log("not going inseid if statement")
      }
      setLastProductLcd([])
      setLastProductLaptop([])
      setLastProductFridge([])
      if(lastProductMobile.length<1){
        showCategory("mobile");        
      }
      else{
        let newProduct=[]
        for(let i=0;i<lastProductMobile.length;i++){
          newProduct[i]=lastProductMobile[i]
        }
        setProduct(newProduct)
      }
        

    }, []);
    // console.log("check index "+check.ind)
    

  console.log("coming to single category");


  const handlecheck4=(e)=>{
    if(e.target.value==="laptop"){
      navigate('/singlecategorylaptop')
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


  let obj=[]
  const boxRef=useRef(obj);
  const handlecheck1=(index)=>(e)=>{
    uncheckAll()
    console.log(e.target.value);
    if(e.target.value==="all"){
      showCategory("mobile");
    }
    else{      
      showBrand(e.target.value,"mobile");
    }
    for(let i=0;i<boxRef.current.length;i++){
      if(i===index){
        boxRef.current[i].checked=true;
      }      
    }
    setMobileCheck({name:"boxRef",surname:index})
    console.log(index)
    // console.log(check2)

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

    sortPriceWise(e.target.value,"mobile");
    setMobileCheck({name:"boxRef1",surname:index})
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
    setLastProductMobile(newProduct)
    setMobileCheck({name:"boxRef2",surname:index})
    setPrevious(demo)
  }


  let obj5=[]
  const boxRef5=useRef(obj5)
  const handlecheck5=(index)=>(e)=>{
    uncheckAll()
    for(let i=0;i<boxRef5.current.length;i++){
      if(index===i){
        boxRef5.current[i].checked=true
      }
    }
    let demo=previous
    let newProduct=[]
    let j=0
    for(let i=0;i<previous.length;i++){
      if(previous[i].technology===e.target.value){
        newProduct[j]=previous[i]
        j++
      }
    }
    setPrevious(demo)
    setProduct(newProduct)
    setLastProductMobile(newProduct)
    setMobileCheck({name:"boxRef5",surname:index})
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
    let demo=previous
    let newProduct=[]
    let j=0
    for(let i=0;i<previous.length;i++){
      if(previous[i].storage===e.target.value){
        newProduct[j]=previous[i]
        j++
      }
    }
    setPrevious(demo)
    setProduct(newProduct)
    setLastProductMobile(newProduct)
    setMobileCheck({name:"boxRef6",surname:index})
    
  }
 
  const uncheckAll=()=>{
    for(let i=0;i<boxRef.current.length;i++){      
        boxRef.current[i].checked=false      
    }
    for(let i=0;i<boxRef1.current.length;i++){      
        boxRef1.current[i].checked=false      
    }
    for(let i=0;i<boxRef2.current.length;i++){      
        boxRef2.current[i].checked=false      
    }
    for(let i=0;i<boxRef5.current.length;i++){     
        boxRef5.current[i].checked=false      
    }
    for(let i=0;i<boxRef6.current.length;i++){     
        boxRef6.current[i].checked=false      
    }
  }



  return (
    <Wrapper className="wrapper">
      <div className="container">
        <div className="sidebaar">
          <div className="ram">
            <h3>Other Category</h3>
            <input type="checkbox" className="check" value={"laptop"} onChange={handlecheck4} />Laptop<br/>
            <input type="checkbox" className="check" value={"refrigerator"} onChange={handlecheck4}/>Refrigerator<br/>
            <input type="checkbox" className="check" value={"lcd"} onChange={handlecheck4}/>LCD<br/>
            <input type="checkbox" className="check" value={"all"} onChange={handlecheck4}/>All<br/>
           
          </div>
          <div className="ram">
            <h3>Brand</h3>
            <input ref={(element)=>{boxRef.current[0]=element}} type="checkbox" className="check"  value={"Samsung"} onChange={handlecheck1(0)} />Samsung<br/>
            <input ref={(element)=>{boxRef.current[1]=element}} type="checkbox" className="check" value={"Apple"} onChange={handlecheck1(1)}/>Apple<br/>
            <input ref={(element)=>{boxRef.current[2]=element}} type="checkbox" className="check" value={"Redmi"} onChange={handlecheck1(2)}/>Redmi<br/>
            <input ref={(element)=>{boxRef.current[3]=element}} type="checkbox" className="check" value={"Vivo"} onChange={handlecheck1(3)}/>Vivo<br/>
            <input ref={(element)=>{boxRef.current[4]=element}} type="checkbox" className="check" value={"all"} onChange={handlecheck1(4)}/>All<br/>
            {/* <button onClick={checkAll}>Check All</button>
            <button onClick={uncheckAll}>Uncheck All</button> */}
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
            <input ref={(element)=>{boxRef2.current[0]=element}} type="checkbox" className="check" value={"4GB"} onChange={handlecheck3(0)}/>4GB<br/>
            <input ref={(element)=>{boxRef2.current[1]=element}} type="checkbox" className="check" value={"6GB"} onChange={handlecheck3(1)}/>6GB<br/>
            <input ref={(element)=>{boxRef2.current[2]=element}} type="checkbox" className="check" value={"8GB"} onChange={handlecheck3(2)}/>8GB<br/>
          </div>
          <div className="ram">
            <h3>Technoogy</h3>
            <input ref={(element)=>{boxRef5.current[0]=element}} type="checkbox" className="check" value={"4G"} onChange={handlecheck5(0)}/>4G<br/>
            <input ref={(element)=>{boxRef5.current[1]=element}} type="checkbox" className="check" value={"5G"} onChange={handlecheck5(1)}/>5G<br/>
          </div>
          <div className="ram">
            <h3>Storage</h3>
            <input ref={(element)=>{boxRef6.current[0]=element}} type="checkbox" className="check" value={"64GB"} onChange={handlecheck6(0)}/>64GB<br/>
            <input ref={(element)=>{boxRef6.current[1]=element}} type="checkbox" className="check" value={"128GB"} onChange={handlecheck6(1)}/>128GB<br/>
          </div>
        
        </div>
        <div className="allcontent">
        
          <header>
            <h1>Category : Mobile</h1>
           
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

.imageDiv{
  min-width:264px;
}
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

.container{
  width:1300px;
  // position:absolute;
  position:relative;
  // margin-left:330px;
  margin-top:75px;
  min-height:740px;
  // border:2px solid green;
}
.container .sidebaar,.allcontent{
  display:inline-block;  
}

.col-3{
  flex-basis:100%;
`;

