import * as React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter} from 'react-router-dom';
import store from "./store";
import { Provider } from "react-redux";

store.subscribe(() => console.log(store.getState()))
/*import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);*/

ReactDOM.render(
 <React.StrictMode>
   <Provider store ={store}>
    <BrowserRouter>
    
        <App />
    
    </BrowserRouter>

    </Provider>
</React.StrictMode>
, document.getElementById("root"))
