import changeTheUser from "./userState";
import logStatus from "./isLogged";
import viewById from "./viewById";
import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    changeTheUser ,
    logStatus ,
    viewById
})

export default rootReducer;
