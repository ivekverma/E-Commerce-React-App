import React, { useContext } from 'react'
import { styled } from 'styled-components'
import mobile from '../image/mobile1.webp'
import { useNavigate } from 'react-router-dom'
import laptop from '../image/laptop1.webp'
import lcd from '../image/lcd1.webp'
import fridge from '../image/fridge2.webp'
import Context from '../context/createContext'
export default function SpecialProduct() {
    const navigate=useNavigate()
    const context=useContext(Context)
    const {showCategory}=context;
    const array=[
        {
            "name":"mobile",
            "img":mobile,
            "desc":"Discover a world of possibilities with our website's extensive mobile range,catering to every budget and preferences.From affordable options,experience reliable connectivity and essential features that keep you connected.No matter your choice,our mobile bring quality and value to your fingertips. Find your perfect match today and elevate tour mobile experience.",
            "class":""
        },
        {
            "name":"laptop",
            "img":laptop,
            "desc":"Whether you're a student,professional, or creative, we have the perfect laptop for you. Experience seamless multitasking and powerful performance with the latest processors and ample RAM. Stay connected wherever you go with fast Wi-Fi and versatile connectivity options.Discover the ultimate blend of style,performance and innovation-explore out laptop collection today.",
            "class":""
        },
        {
            "name":"lcd",
            "img":lcd,
            "desc":"Experience visual brilliance like never before with our website's cutting-edge LCD desplay.Immerse yourself in stunning clarity and vibrant colors that bring your content to life.Whether you're a gamer, a movie enthusiast, or a professional seeking precise visuals, our LCD collection offers the perfect solution.",
            "class":""
        },
        {
            "name":"refrigerator",
            "img":fridge,
            "desc":"Explore a range of sleek and innovative refrigerators designed to elevate your kitchen experience.From state of the art  samrt features that allows you to control tempreture remotely.Producing lasting fresg=hness with features like Hygiene Fresh+ & Door Cooling+ The range enables you effortless connectivity with AIThinQ(Wi-Fi).",
            "class":"imageDiv"
        }
    ]

    const handleImage=(sp)=>{
        showCategory(sp.name)
        if(sp.name==="laptop"){
            navigate('/singlecategorylaptop')
            // console.log("calling laptop ")
        }
        else if(sp.name==="lcd"){
            navigate('/singlecategorylcd')
            // console.log("calling laptop ")
        }
        else if(sp.name==="mobile"){
            navigate('/singlecategorymobile')
            // console.log("calling laptop ")
        }
        else{
            navigate('/singlecategoryrefrigerator')
            // console.log("calling mobile")
        }
    }

  return (
    <Wrapper>
        <div className='container'>
            <div className='row1'>
            <span style={{"text-align":"center","margin":"20px"}} className='heading'>Available Category</span>
            </div>
           
            <div className='rowProduct'>
                {array.map((sp)=>{
                    return <div className='col2'>
                                <div>
                                    <img className={sp.class} src={sp.img} onClick={()=>{handleImage(sp)}}></img>
                                </div>
                                <div className='content'>
                                    <h2>{sp.name}</h2>
                                    <p>{sp.desc}</p>
                                </div>                                
                           </div> 
                })}
                               
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.imageDiv{
    width: 300px;
    padding: 0 70px;
}
.content{
    color: red;
    letter-spacing: 0.3px;
    padding: 28px;
    /* justify-content: space-evenly; */
    line-height: 22px;
    text-align: justify;
}
.col2{
    display: flex;
    align-items: center;
    flex-basis: 49%;
    // border: 2px solid black;
    margin: 6px;
    box-shadow:0 0 10px 3px rgba(0,0,0,0.4);
    transition:all 0.3s;
}
.col2:hover{
    transform:translateY(-2px);
    box-shadow:0 0 3px 3px rgba(0,0,0,0.4);
}
.container{
    width:100%;
    padding:0;
}
img{
    width:300px;
    height:300px;
    cursor:pointer;
}
h2{
    text-transform:uppercase;
    margin-bottom:22px;
    font-family: cursive;
}
p{
    font-size:15px;
    font-family: cursive;
}

`;
