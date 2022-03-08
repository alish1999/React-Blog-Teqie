import * as React from "react"

import Main from "./Screens/Main"
import Login from "./Screens/Login"
import CreateBlog from "./Screens/CreateBlog"
import {Route, Routes } from 'react-router-dom';
import ViewMore from "./Screens/ViewMore"
import ViewDrafts from "./Screens/ViewDrafts"
import UpdateBlog from "./Screens/UpdateBlog";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports"
import {withAuthenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig)

function App()
{
    
    return(
     <div >   
        
    <Routes>
            <Route path="/" element={  <Login/>  } />
            <Route path="/main" element={<Main/>} />
            <Route path="/create" element={<CreateBlog/>} />
            <Route path="/viewdrafts" element={<ViewDrafts/>} />
            <Route path="/viewmore/:id" element={<ViewMore/>} />
            <Route path="/update/:id" element={<UpdateBlog/>} />
    </Routes>
    </div>

    
    )
}

export default App;