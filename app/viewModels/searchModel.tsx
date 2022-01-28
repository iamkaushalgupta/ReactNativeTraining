import React, { useState } from "react";
import SearchScreen from "../views/searchScreen/searchScreen";

interface InputProps{
    navigation:any
}
const SearchModel=(props:InputProps)=>{
    const {navigation}=props
    const [render,setRender]=useState(false)
React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRender(!render)      
    });
    return unsubscribe;
  }, [navigation,render]);

    return(
        <SearchScreen navigation={navigation}/>
    )
}

export default SearchModel;