import React, { Fragment, useState } from "react"
import './App.css'
import Unit from './components/Unit'
import Header from './components/Header'



const App =()=>{

  const [imageUrl,setImageUrl]=useState("")
  const [name,setName]=useState("")
  const [city,setCity]=useState("")
  const [position,setPosition]=useState("")

  const[myData,setMyData]=useState([])
  console.log(myData)

  console.log("Name="+name)

  

  return(
    <Fragment>
    <Header/>
    <div className="main_container">
      <div className="main_left">
        <input type="text" value={imageUrl} onChange={(e)=>{
          e.preventDefault()
          setImageUrl(e.target.value)
        }  
        }/>
        <input type="text" value={name} onChange={(e)=>{
          e.preventDefault()
          setName(e.target.value)
          console.log("target:"+e.target.value)

        }}/>
        <input type="text" value={city} onChange={(e)=>{
          e.preventDefault()
          setCity(e.target.value)

        }}/>
        <input type="text" value={position} onChange={(e)=>{
          e.preventDefault()
          setPosition(e.target.value)
        }}/>
        <button onClick={()=>{
          // console.log({
          //   imageUrl,name,city,position
          // })
          setMyData((pre)=>{
            return [
              ...pre,{
              imageUrl,
              name,
              city,
              position
              }
            ]
          })

          setImageUrl((pre)=>{
            if(pre.length>0){
              return ""
            }else{
              return pre;
            }
          })

          setName((p)=>p.length>0?"":p)
          setCity((t)=>t.length>0?"":t)
          setPosition((p)=>p.length>0?"":p)
          
        }} >Submit</button>
        {/* <button onClick={displayText}>Submit</button> */}
      </div>
      <div>

      </div>
      <div className="main_right"><h2>Data</h2>
        {myData?.map(({imageUrl,name,city,
          position},index)=>
            
            {
            
            <Unit
          // image={imageUrl}
           name={name}
           
           city={city}
           position={position}
           key={index}
           />}
          
          )
         
          }
        </div>
        {console.log("your name:"+name)}
       {/* <Unit name={name}/> */}
    </div>
    </Fragment>
    
  )
 

}



export default App;