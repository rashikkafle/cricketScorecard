import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CricSC from './CricSC.jsx'
import Cricket from './Cricket.jsx'
import Secondinning from './Secondinning.jsx'
import Test from './test.jsx'
import './App.css'


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Cricket/>}/>
    <Route path='/CricSC' element={<CricSC/>}/>
    <Route path='/Secondinning' element={<Secondinning/>}/>
    <Route path='/Test' element={<Test/>}/>
   </Routes>

   </>
  )
}

export default App