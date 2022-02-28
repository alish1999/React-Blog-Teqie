import changeTheUser from "./userState";
import logStatus from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    changeTheUser ,
    logStatus
})

export default rootReducer;
