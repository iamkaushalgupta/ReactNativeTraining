import RegEx from "./regex";
const validation = (type:any, value: any) => {
    if (type == 'email') {
        if (!RegEx.email.test(value))
            return true
        else
            return false
    }
    else if (type == 'contact') {
        if (!RegEx.contact.test(value))
            return true
        else
            return false
    }
    else if (type == 'name') {
        if (!RegEx.name.test(value))
            return true
        else
            return false
    }
    else if (type == 'idCard') {
        if (!RegEx.idCard.test(value))
            return true
        else
            return false
    }
    else if (type == 'gender') {
        if (!(value.toLowerCase()=='male' || value.toLowerCase()=='female' ))
            return true
        else
            return false
    }
    else if (type == 'username') {
        if (!RegEx.username.test(value))
            return true
        else
            return false
    }
    else if (type == 'cardnumber') {
        if (!RegEx.cardnumber.test(value))
            return true
        else
            return false
    }
    else if (type == 'cvv') {
        if (!RegEx.cvv.test(value))
            return true
        else
            return false
    }
    return(false)
}

export default validation;