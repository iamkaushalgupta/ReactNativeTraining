import React from "react";
import { InputText } from "../common";

interface InputProps {
    name: string
    email: string
    contact: string
    password: string

}

const Name = (props: string) => {

    const nameregEx = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

    if (!nameregEx.test(props)) {
        return true
    } else {
        return false
    }


}


const Contact = (props: string) => {

    const contactRegEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!contactRegEx.test(props)) {
        return true
    } else {
        return false
    }


}

const Email = (props: string) => {

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(props)) {
        return true
    } else {
        return false
    }


}

const Password = (props: string) => {
    if (props.length < 5) {
        return true
    }
    else {
        return false
    }

}


export { Name, Contact, Email, Password };