import React, {useState} from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (event) => {
        event.preventDefault();
        const newUser = {firstName, lastName, email, password,confirmPassword};
        console.log("Welcome", newUser)
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return(
        <div className="wrapper">
            <form onSubmit={createUser} className='form'>
                <div className='text-box'>
                    <label>First name: </label>
                    <input type="text" value={firstName} onChange={ (event) => setFirstName(event.target.value)} />
                </div>
                <div className='text-box'>
                    <label>Last name: </label>
                    <input type="text" value={lastName} onChange={ (event) => setLastName(event.target.value)} />
                </div>
                <div className='text-box'>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)} />
                </div>
                <div className='text-box'>
                    <label>Password: </label>
                    <input type="text" value={password} onChange={ (event) => setPassword(event.target.value)} />
                </div>
                <div className='text-box'>
                    <label>Confirm Password: </label>
                    <input type="text" value={confirmPassword} onChange={ (event) => setConfirmPassword(event.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div className='output'>
                <h4>Your Form Data</h4>
                <p>First Name {firstName} </p>
                <p>Last Name {lastName} </p>
                <p>Email {email} </p>
                <p>Password {password}</p>
                <p>Confirm Password {confirmPassword}</p>
            </div>
        </div>

    )
};


export default Form;