// import React from 'react'
// import Home from './Home'
// import { useState } from 'react'

// const App = () => {
//   let[ color,Setcolor]
// //   let user='riya'
// //   return (
// //     <div>
// //       <Home a={user} />
// //       app file
// //     </div>
// //   )
// let [data,SetData]=useState(0)
// function done(){
//   SetData(data+1)
// }
// // function decreament({
// // SetData(data-1)
// // })

// return (
//   <div style={{backgroundColor:VideoColorSpace,height}}>
//     {/* <p>{data}</p>
//     <button onClick={done} >  click</button> */}
//     {/* <button onClick={decreament} >  -</button> */}

//   </div>
// )
//  }

// export default App


// import React from 'react'
// import {  useState } from 'react'

// const App = () => {
//   let [color,SetColor]=useState(false)
//   function done(){
//     if(color===true){
//       SetColor(false)
//     }

//    else {
//     SetColor(true)
//   }}
//   return (
//     <div style={color?{backgroundColor:'green'}:{backgroundColor:'red'}}>
//       hello
//       <button onClick={done}>click</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import  {  useState } from 'react';

// const App = () => {
//  let [time,SetTime ]=useState()
//  setInterval(()=>{
//   let date= new Date().toLocaleTimeString()
//   console.log(date,"datatat");
//   SetTime(date)

//  })

//   return (
//     <div>
//     {time} mai samay hoon
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import  {  useState } from 'react';


// const App = () => {
//   let [data,SetData]= useState('')
//   function done(e){
//     console.log(e.target.value)
//     SetData(e.target.value)
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//         <input onChange={done} type='text' placeholder='Enter your name'></input>
      
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import  {  useState } from 'react';


// const App = () => {
//   let [input,SetInput]=useState({

//   })
//   let [data,SetData]= useState('')


//   function done(e){
//     let {name,value= e,target}
//     SetData(e.target.value)
//   }
//   return (
//     <div>
//       <fieldset>
//         <form>
//           <input type='text' name='name' value= {input.name} onChange={done}></input>
//           <br></br>
//           <br></br>
//           <input type='password' name='pass value={input.pass}' onChange={done}> </input>
//           <br></br>
//           <br></br>
//           <button>save</button>

//         </form>
//       </fieldset>
      
      
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import React,{ useEffect,useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,Setcity]=useState('delhi')

//   useEffect(()=>{
//    console.log('hi');
   
//   },[])
//   function done(){
//     setCount(count+1)
//   }
//       return (
//         <div>
//           <h1>count:{count}</h1>
//           <button onClick={done}>click</button>
//         </div>
//       )
//     }
//     export default App
        
      
// import React from 'react'

// const App = () => {


//   return (
//     <div>
         
//     </div>
//   )
// }

// export default App     

// import React from 'react'
// import Navbar from ./Navbar

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// import React from 'react'

// import Home from './Home'
// import Navbar from './Navbar'
// import About from './About'
// import Contact from './Contact'
// import Login from './Login'
// import './App.css'

// import { Route,Routes } from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//         <Navbar/>
        
//             <Routes>
//                 <Route path='/' element={<Home/>}/>
//                 <Route path='/About' element={<About/>}/>
//                 <Route path='/Contact' element={<Contact/>}/>
//                 <Route path='/Login' element={<Login/>}/>

//             </Routes>

        
    
//     </div>
//   )
// }
// export default App


// import React from 'react'
// import Home from './Home'
// const App = () => {
//   return (
//     <div>
//       <Home/>
//     </div>
//   )
// }

// export default App
 
// count increase decrease by usereducer



// import React, { useReducer } from 'react'


// const App = () => {
//   function reduser(count,action){
//    if(action.type==='incre'){
//     return count+=1
//    }
//    else if(action.type==='decre'){
//     return count-=1
//    }
//    else if(action.type==='reset'){
//     return 0
//    }
//    else{
//     return count
//    }
//   }
//   let [count,dispatch]=useReducer(reduser,0)
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>{dispatch({type:"incre"})}}>++</button>
//       <button onClick={()=>{dispatch({type:"decre"})}}>--</button>
//       <button onClick={()=>{dispatch({type:"reset"})}}>reset</button>
//     </div>
//   )
// }

// export default App

// COLOR CHANGE BUTTON BY USEREDUCER

// import React, { useReducer } from 'react'


// const App = () => {
//   function reduser(color,action){
//    if(action.type==='red'){
//     return color='red'
//    }
//    else if(action.type==='blue'){
//     return color='blue'
//    }
//    else if(action.type==='green'){
//     return color='green'
//    }
//    else if(action.type==='chocolate'){
//     return color='chocolate'
//    }
//    else{
//     return color
//    }
//   }
//   let [color,dispatch]=useReducer(reduser,'white')
//   return (
//     <div style={{backgroundColor:color,height:'400px'}}>
//       {/* <h2>{color}</h2> */}
//       <button onClick={()=>dispatch({type:"red"})}>red</button>
//       <button onClick={()=>dispatch({type:"blue"})}>blue</button>
//       <button onClick={()=>dispatch({type:"green"})}>green</button>
//       <button onClick={()=>dispatch({type:"chocolate"})}>chocolate</button>
//     </div>
//   )
// }

// export default App 




// import React from 'react'
// import Navbar from ./Navbar

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

import React from 'react'

import Home from './Home'
import Navbar from './Navbar'
import About from './About'
// import Contact from './Contact'
import Login from './Login'
import Cart from './Cart'
import './App.css'

import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
        <Navbar/>
        
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                {/* <Route path='/Contact' element={<Contact/>}/> */}
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Cart' element={<Cart/>}/>

            </Routes>

        

        
    
    </div>
  )
}
export default App

