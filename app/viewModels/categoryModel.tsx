import React, { useState } from "react";
import CategoryScreen from "../views/categoryscreen/categoryScreen";
interface InputProps{
    navigation:any,
   
   }

const CategoryModel =(props:InputProps)=>{
    const {navigation} =props;
    const [category,setCategory]=useState(0)

    return(
        <CategoryScreen navigation={navigation} category={category} setCategory={(n:number)=>setCategory(n)}/>
    )
}
export default CategoryModel;