import React from "react";
import MainStack from "./stacknavigation";
import { Provider } from "react-redux";
import Store from '../redux/store'
const MainApp=()=>{
    return(
    <Provider store={Store}>
    <MainStack/>
    </Provider>
    )
}
export default MainApp;