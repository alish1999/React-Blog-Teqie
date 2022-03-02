import * as React from "react"

import Main from "./Main"
import Login from "./Login"
import CreateBlog from "./CreateBlog"
import {Route, Routes } from 'react-router-dom';
import ViewMore from "./ViewMore"
import ViewDrafts from "./ViewDrafts"
import UpdateBlog from "./UpdateBlog";





export default function App()
{
    
    return(
        
    <Routes>
            <Route path="/" element={  <Login/>  } />
            <Route path="/main" element={<Main/>} />
            <Route path="/create" element={<CreateBlog/>} />
            <Route path="/viewdrafts" element={<ViewDrafts/>} />
            <Route path="/viewmore/:id" element={<ViewMore/>} />
            <Route path="/update/:id" element={<UpdateBlog/>} />
    </Routes>
   
    
    )
}