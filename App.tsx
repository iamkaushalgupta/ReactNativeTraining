import React from "react";
import { View } from "react-native";
 import MainStack from "./app/routes/stacknavigation";
//import ReduxApp1 from "./app/redux";
import Demo from "./app/views/redux/demo";
import ImageList from "./app/views/imageList/imageList";
import VideoList from "./app/views/videoList/videoList";
// import Focus from "./app/views/focussEffects/focus";
import UseFocusEffect from "./app/views/focussEffects/useFocusEffect";
import UseIsFocused from "./app/views/focussEffects/useisFocusEffect";
import Focus from "./app/views/focussEffects/focus";
import NavigationTask from "./app/views/navigationTask/navigationTask";
import CustomRefreshInFlatList from './app/views/customRefreshInFlatList/customRefersh' 
const App=()=>
{
  return(
    <CustomRefreshInFlatList/>
  );
}

export default App;
