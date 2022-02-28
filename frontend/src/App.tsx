import * as React from "react"

import Main from "./Main"
import Login from "./Login"
import ProductScreen from "./ProductScreen"
import {Route, Routes } from 'react-router-dom';





export default function App()
{
    
    return(
        
    <Routes>
            <Route path="/" element={  <Login/>  } />
            <Route path="/product/:id" element={<ProductScreen/> }/>
            <Route path="/main" element={<Main/>} />
    </Routes>
   
    
    )
}