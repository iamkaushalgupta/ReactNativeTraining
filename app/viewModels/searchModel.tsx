import React from "react";
import SearchScreen from "../views/searchScreen/searchScreen";

interface InputProps{
    navigation:any
}
const SearchModel=(props:InputProps)=>{
    const {navigation}=props
    return(
        <SearchScreen navigation={navigation}/>
    )
}

export default SearchModel;