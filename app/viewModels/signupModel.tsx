import React, { useState } from "react";
import SignUpScreen from '../views/signupscreen/signupscreen'
import { Email, Name, Contact, Password } from "../config/validation";

const SignUpModel = () => {
    const [wrongName, setNameResult] = useState(false)
    const [wrongEmail, setEmailResult] = useState(false)
    const [wrongContact, setContactResult] = useState(false)
    const [wrongPassword, setPasswordResult] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [password, setPassword] = useState('')



    const clickHandler = () => {
        let validate = Name(name)
        setNameResult(validate);
        validate = Contact(contact)
        setContactResult(validate)
        validate = Email(email)
        setEmailResult(validate)
        validate = Password(password)
        setPasswordResult(validate)


    }

    return (
        <SignUpScreen
            wrongName={wrongName}
            wrongEmail={wrongEmail}
            wrongContact={wrongContact}
            wrongPassword={wrongPassword}
            name={name}
            email={email}
            contact={contact}
            password={password}
            setNameResult={(wrongName) => setNameResult(wrongName)}
            setEmailResult={(wrongEmail) => setEmailResult(wrongEmail)}
            setContactResult={(wrongContact) => setContactResult(wrongContact)}
            setPasswordResult={(wrongPassword) => setPasswordResult(wrongPassword)}
            setName={(name) => setName(name)}
            setEmail={(email) => setEmail(email)}
            setContact={(contact) => setContact(contact)}
            setPassword={(password) => setPassword(password)}
            clickHandler={() => clickHandler()}
        />
    )
}

export default SignUpModel;