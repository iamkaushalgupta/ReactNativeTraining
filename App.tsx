import React from "react";
import { View } from "react-native";
 import MainStack from "./app/routes/stacknavigation";
//import ReduxApp1 from "./app/redux";
import Timing_animation from "./app/views/basics/timing";
import Decay_animation from "./app/views/basics/decay";
import Event_animation from "./app/views/basics/event";
import FadeInOutOnPress from "./app/views/fadeInOutOnPress/fadeInOutOnPress";


const App=()=>
{
  return(
    <FadeInOutOnPress/>
  );
}

export default App;
