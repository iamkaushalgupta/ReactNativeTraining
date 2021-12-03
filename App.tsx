
import React from "react";
import { View } from "react-native";
 import MainStack from "./app/routes/stacknavigation";
//import ReduxApp1 from "./app/redux";
import Demo from "./app/views/redux/demo";
import RazorPay from './app/views/razorPay/RazorPay'

const App=()=>
{
  return(
    <MainStack/>
  );
}

export default App;
