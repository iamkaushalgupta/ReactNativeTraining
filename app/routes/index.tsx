import React from "react";
import StackNav from "./stacknavigation";
import { Provider } from "react-redux";
import Store from '../redux/store'
const MainApp = () => {
    return (
    <Provider store={Store}>
    <StackNav />
    </Provider>
    )
}
export default MainApp;