import RegEx from "./regEx"
const emailValidation=(value:string)=>{
    if (RegEx.email.test(value))
        return false
    else
        return true
}

const usernameValidation=(value:string)=>{
    if (RegEx.username.test(value))
        return false
    else
        return true

}

const passwordValidation=(value:string)=>{
    if(RegEx.password.test(value))
            return false
        else
            return true
}
export {emailValidation, usernameValidation, passwordValidation };
