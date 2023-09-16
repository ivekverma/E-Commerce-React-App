import React, { useState } from 'react';
import Context from './createContext';
// import CartProduct from '../../backend/models/CartProduct';

export default function ProductContext(props) {

    let initialProduct=[]
    let num3=0
    let len=0;
    const [nextFlag, setNextFlag] = useState(false)
    const [prevFlag, setPrevFlag] = useState(true)
    const [product, setProduct] = useState(initialProduct)
    const [cartProduct, setCartProduct] = useState(initialProduct)
    const [previous, setPrevious] = useState(initialProduct)
    const [singleProduct, setSingleProduct] = useState(initialProduct)
    const [total, setTotal] = useState(0)
    const [newNum1, setNewNum1] = useState(0)
    const [short, setShort] = useState(initialProduct)
    const [userData, setUserData] = useState(initialProduct)
    const [lastProductMobile, setLastProductMobile] = useState(initialProduct)
    const [lastProductLcd, setLastProductLcd] = useState(initialProduct)
    const [lastProductLaptop, setLastProductLaptop] = useState(initialProduct)
    const [lastProductFridge, setLastProductFridge] = useState(initialProduct)
    const [count, setCount] = useState(0)
    const [j, setJ] = useState(0)
    const [mobileCheck, setMobileCheck] = useState({name:"vivek",surname:-1})
    const [laptopCheck, setLaptopCheck] = useState({name:"vivek",surname:-1})
    const [lcdCheck, setLcdCheck] = useState({name:"vivek",surname:-1})
    const [fridgeCheck, setFridgeCheck] = useState({name:"vivek",surname:-1})
    const [alarm, setAlarm] = useState({msg:"",type:""})

    const showAlarm=(msg,type)=>{
      setAlarm({
        msg:msg,
        type:type
      })
    }
    

    const finalTotal=(price,count,length)=>{
      let newTotal=num3+price*count+newNum1;
      num3=newTotal
      console.log("num3="+num3)
      console.log(newTotal)
      setTotal(newTotal)
      if(len==length-1){
        newTotal=newTotal/2;
        console.log("newTotal = "+newTotal)
        setTotal(newTotal)
        // setNewNum1(newTotal)
      }
      else{
        setTotal(newTotal)
      }
      len++;
    }

    const addTotal=(price)=>{
      console.log(total)
      let newNum=total+parseInt(price);
      console.log(newNum)
      setTotal(newNum)
    }
    const removeTotal=(price)=>{
      console.log(total)
      let newNum=total-parseInt(price);
      console.log(newNum)
      setTotal(newNum)
    }

    const removeTotalPrice=(price,count)=>{
      console.log(total)
      console.log(price)
      console.log(count)
      let newNum=total-(parseInt(price)*parseInt(count));
      console.log(newNum)
      setTotal(newNum)
    }    


    const removeItem=async (pro)=>{
      removeTotalPrice(pro.discount_price,pro.count)
      let id=pro._id;
      const response=await fetch(`http://localhost:2999/api/product/removeItem/${id}`,{
          method:"DELETE",
      })
      // const json=await response.json();
      const newProduct=cartProduct.filter((p)=>{
        return id!==p._id
      })
      
      setCartProduct(newProduct)
      
    }


    const addquan=async (pro)=>{
      addTotal(pro.discount_price,pro.count)
      let id=pro._id;
      let userid=pro.userid
      let name=pro.name
      let brand=pro.brand
      let discount_price=pro.discount_price
      let actual_price=pro.actual_price      
      let discount=pro.discount
      let image=pro.image
      let description=pro.description
      let category=pro.category
      let __v=pro.__v
      let count=pro.count
      let operating_system=pro.operating_system
      let technology=pro.technology
      let size=pro.size
      let ram=pro.ram
      
      const response=await fetch(`http://localhost:2999/api/product/updateQuan/${id}`,{
          method:"PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body:JSON.stringify({userid,name,brand,discount_price,actual_price,discount,image,description,category,__v,count,operating_system,technology,size,ram})
      })
      const json=await response.json()
      
      let newCount=parseInt(count)+1;
      let newCartProduct=JSON.parse(JSON.stringify(cartProduct))
      for(let i=0;i<newCartProduct.length;i++){
        let ele=newCartProduct[i]
        if(ele._id==id){
          newCartProduct[i].count=newCount
        }
      }
      setCartProduct(newCartProduct)
    }


    const removequan=async (pro)=>{
      removeTotal(pro.discount_price,pro.count)
      let id=pro._id;
      let userid=pro.userid
      let name=pro.name
      let brand=pro.brand
      let discount_price=pro.discount_price
      let actual_price=pro.actual_price      
      let discount=pro.discount
      let image=pro.image
      let description=pro.description
      let category=pro.category
      let __v=pro.__v
      let count=pro.count
      let operating_system=pro.operating_system
      let technology=pro.technology
      let size=pro.size
      let ram=pro.ram

      const response=await fetch(`http://localhost:2999/api/product/removequan/${id}`,{
          method:"PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body:JSON.stringify({userid,name,brand,discount_price,actual_price,discount,image,description,category,__v,count,operating_system,technology,size,ram})
      })
      const json=await response.json()
      
      let newCount=parseInt(count)-1;
      let newCartProduct=JSON.parse(JSON.stringify(cartProduct))
      for(let i=0;i<newCartProduct.length;i++){
        let ele=newCartProduct[i]
        if(ele._id==id){
          newCartProduct[i].count=newCount
        }
      }
      setCartProduct(newCartProduct)
    }

    const getSingleProduct=(singlePro)=>{
      console.log(singlePro);
      console.log("getsinglepro comleted")
      setSingleProduct(singlePro);
    }

    const getFeaturedProduct=async (featured)=>{
      console.log("calling getfeaturedptoduct")
      let fea=featured
      const response=await fetch(`http://localhost:2999/api/product/getFeaturedProduct/${fea}`,{
            method:"GET"
        })
        const json=await response.json()
        console.log(json);
        setProduct(json);
    }

    const getProduct=async ()=>{
      console.log("calling get products")
      const response=await fetch("http://localhost:2999/api/product/getProduct",{
        method:"GET"
      })

      const json=await response.json()
      setProduct(json); 
      setPrevious(json);
      if(json.length>8){
        shortProduct(json)
      }
      else{
        setNextFlag(true);
      }
      // console.log(json)
      // console.log(previous)     
    }

    const getCartProducts=async ()=>{   
      console.log("idhar aa gaya")  

        const response=await fetch("http://localhost:2999/api/product/getCartProducts",{
          method:"GET",
          headers:{
            'auth_token':localStorage.getItem('token')
          }
        })
        const json=await response.json();
        console.log(json)
        setCartProduct(json);
        setCount(json.length)
    }


    const showCategory=async (keyword)=>{
      const response=await fetch(`http://localhost:2999/api/product/mobileProduct/${keyword}`,{
        method:"GET"
      })
      const json=await response.json()
      // console.log(json)
      setProduct(json);
      setPrevious(json);
      if(keyword==="mobile"){
        setLastProductMobile(json);
      }
      else if(keyword==="laptop"){
        setLastProductLaptop(json);
      }
      else if(keyword==="refrigerator"){
        setLastProductFridge(json);
      }
      else {
        setLastProductLcd(json);
      }
      
    }


    const sortPriceWise= async(pricetosort,cat)=>{
      let sortingprice;
      let newProduct=[]
      if(pricetosort==="all"){
        console.log("all produc calling")
        // setProduct(previous)
        let keyword=previous[0].category
        showCategory(keyword)
      }
      else if(pricetosort==="lessthan10000"){
        let demo=previous;
        console.log("less than 10000 calling")
        sortingprice=10000;
        newProduct=[];
        let j=0;
        for(let i=0;i<previous.length;i++){
          let price=parseInt(previous[i].discount_price)        
          if(price<sortingprice){
            newProduct[j]=previous[i];
            j++;
          }
        }
        setPrevious(demo)
        setProduct(newProduct);
        // setShort(newProduct)
        // setPrevious(product);
        
      }
      else if(pricetosort==="lowtohigh"){
        console.log(previous)
        console.log("calling low to high")
        let demo=previous;
        newProduct=[];
      // console.log(product)
        for(let i=0;i<previous.length;i++){           
          for(let j=i+1;j<previous.length;j++){
            let price1=parseInt(previous[i].discount_price)
            let price2=parseInt(previous[j].discount_price)
            if(price1>price2){            
              let temp=previous[i]
              previous[i]=previous[j]
              previous[j]=temp
            }            
          }      
          newProduct[i]=previous[i]
        }  
        for(let i=0;i<newProduct.length;i++){
          console.log(newProduct[i].discount_price)
        }
        setPrevious(demo)
        setProduct(newProduct);
        // setShort(array)
      }
      else if(pricetosort==="hightolow"){
        console.log("calling high to low")
        let demo=previous;
        newProduct=[];
        for(let i=0;i<previous.length;i++){           
          for(let j=i+1;j<previous.length;j++){
            let price1=parseInt(previous[i].discount_price)
            let price2=parseInt(previous[j].discount_price)
            if(price1<price2){            
              let temp=previous[i]
              previous[i]=previous[j]
              previous[j]=temp
            }            
          }      
          newProduct[i]=previous[i]  
        }  
        for(let i=0;i<previous.length;i++){
          console.log(previous[i].discount_price)
        }
        
        setPrevious(demo)
        setProduct(newProduct);
      }
      else{
        let demo=previous;
        console.log(demo)
        sortingprice=10000;
        newProduct=[];
        let j=0;
        for(let i=0;i<previous.length;i++){ 
          let price=parseInt(previous[i].discount_price)       
          if(price>sortingprice){
            newProduct[j]=previous[i];
            j++;
          }
        }
        setPrevious(demo);
        setProduct(newProduct);
        
      }    
      if(cat=="mobile"){
        setLastProductMobile(newProduct)
      }
      else if(cat=="laptop"){
        setLastProductLaptop(newProduct)
      }
      else if(cat=="fridge"){
        setLastProductFridge(newProduct)
      }
      else{
        setLastProductLcd(newProduct)
      }        
    }

   
    

    const showBrand=async (thisbrand,cat)=>{
      console.log(previous)
      console.log(thisbrand)
      let demo=previous;
      let newProduct=[]
      let j=0;
      for(let i=0;i<previous.length;i++){
        if(previous[i].brand===thisbrand){
          newProduct[j]=previous[i]
          j++
        }
      }
      if(cat=="mobile"){
        setLastProductMobile(newProduct)
      }
      else if(cat=="laptop"){
        setLastProductLaptop(newProduct)
      }
      else if(cat=="fridge"){
        setLastProductFridge(newProduct)
      }
      else{
        setLastProductLcd(newProduct)
      }
      console.log(newProduct)
      setProduct(newProduct)
      setPrevious(demo)
    }

    const getRamProduct=(thisram)=>{
      console.log(previous)
      // console.log(thisbrand)
      // let demo=previous;
      // let newProduct=[]
      // let j=0;
      // for(let i=0;i<previous.length;i++){
      //   if(previous[i].ram===thisram){
      //     newProduct[j]=previous[i]
      //     j++
      //   }
      // }
      // console.log(newProduct)
      // setProduct(newProduct)
      // setPrevious(demo)
    }

   




 


    let k=0;
    let newProduct1=[]
    const shortProduct=(pro)=>{   
      console.log("value of j"+j)
      if(j===0){
        k=0;
        console.log(j)
      
        newProduct1=[]
        for(let i=0;i<8;i++){
          newProduct1[i]=pro[k]
          k++
        }
        console.log(newProduct1)
        setShort(newProduct1)      
        setJ(8)   
      }
      else if(j===8){
        setPrevFlag(true);
      }
      else{
        
        console.log(j)
        let j1=0
        let limit=pro.length
        if(j%8===0){
          j1=j-8
          console.log("coming to if else block")
          for(let i=0;i<8;i++){
            newProduct1[i]=pro[j1]
            j1++
          }
        }
        else{
          j1=j-j%8
          console.log("coming to else else block")
          for(let i=0;i<j%8;i++){
            newProduct1[i]=pro[j1]
            j1++
          }
        }
        console.log("coming tp else block where j is greather than 8")
        if(pro.length-j===0){
          setNextFlag(true)
        }
        setShort(newProduct1)
        setJ(j1)  
        setPrevFlag(false);
      }
      
    }

    // let k=0;
    // let newProduct1=[]
    // const shortProduct=(pro)=>{   

    //   k=0;
    //   console.log(j)
    
    //   newProduct1=[]
    //   for(let i=0;i<8;i++){
    //     newProduct1[i]=pro[k]
    //     k++
    //   }
    //   console.log(newProduct1)
    //   setShort(newProduct1)
    //   // setPrevFlag(false)
    //   // if(k===8){
    //     setJ(8)
    //   // }
        
    // }


    const nextClick=()=>{
      console.log(j)
      if(j+8<product.length){
        let k=j
        newProduct1=[]
        for(let i=0;i<8;i++){
          newProduct1[i]=product[k]
          k++
        }
        console.log(newProduct1)
        setShort(newProduct1)
        setJ(k)
        setPrevFlag(false)
      }
      else{
        console.log("going to else")
        console.log(product.length)
        let k=j
        let l=product.length-k;
        newProduct1=[]
        for(let i=0;i<l;i++){
          newProduct1[i]=product[k]
          k++
        }
        console.log(newProduct1)
        setShort(newProduct1)
        setJ(k)
        setNextFlag(true);

        setPrevFlag(false)

        console.log("next button is disabled")
      }
    }

    const prevClick=()=>{
      if(j<9){
        console.log("there is no previous page")
        setPrevFlag(true);
      }
      else{
        let n=j%8
        let k=0;
        if(n==0){
          k=j-16
        }
        else{
          k=j-n-8;
        }
        // let k=product.length-n-4;
        if(k+8<product.length){
          // let k=j
          newProduct1=[]
          for(let i=0;i<8;i++){
            newProduct1[i]=product[k]
            k++
          }
          if(k<9){
            console.log("previous button is disabled")
            setPrevFlag(true);
          }
          console.log(newProduct1)
          setShort(newProduct1)
          setJ(k)
          setNextFlag(false)
          
        }
      }
    }


    const getUserData=async()=>{
      console.log("calling getuserdata")
      const response=await fetch("http://localhost:2999/api/user/getInfo",{
        method:"GET",
        headers:{
          auth_token:localStorage.getItem('token')
        }
      })
      const json=await response.json()
      console.log("calling getuserdata")
      setUserData(json)
      
      
    }

  return (
    <Context.Provider value={{product,singleProduct,cartProduct,total,short,nextFlag,prevFlag,userData,count,previous,lastProductMobile,lastProductLaptop,lastProductFridge,lastProductLcd,mobileCheck,lcdCheck,laptopCheck,fridgeCheck,setFridgeCheck,setLaptopCheck,setLcdCheck,setMobileCheck,setLastProductMobile,setLastProductLaptop,setLastProductLcd,setLastProductFridge,setPrevious,setProduct,getProduct,showCategory,sortPriceWise,getSingleProduct,getCartProducts,setCartProduct,addquan,removequan,finalTotal,removeItem,showBrand,getRamProduct,shortProduct,nextClick,prevClick,getFeaturedProduct,getUserData,setPrevFlag,setNextFlag}}>
        {props.children}
    </Context.Provider>
  )
}

