import React,{useEffect,useState} from 'react'
import Nav from "./component/Nav"
import Home from './pages/Home'
import Details from './pages/Details'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  

  return (
    <>
      <Nav/>
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/details" element={<Details/>}/>
        

      </Routes>
    </>
  )
}

export default App