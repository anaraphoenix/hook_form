import React, {useState} from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 

    const createUser = (event) => {
        event.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted( true );
    };
    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
	}   else {
            return "Welcome, please submit the form";
	}
};
    
    return(
        <div className="wrapper">
            <div className='form-input'>
                <form onSubmit={createUser} className='form'>
                <h3>{ formMessage() }</h3>
                    <div className='text-box'>
                        <label>First name: </label>
                        <input type="text" value={firstName} onChange={ (event) => setFirstName(event.target.value)}/>
                        {firstName.length < 2 ? (
                            <p>First name must be at least 2 characters!</p>
                        ): null}
                    </div>
                    <div className='text-box'>
                        <label>Last name: </label>
                        <input type="text" value={lastName} onChange={ (event) => setLastName(event.target.value)}/>
                        {lastName.length < 2 ? (
                            <p>Last name must be at least 2 characters!</p>
                        ): null}
                    </div>
                    <div className='text-box'>
                        <label>Email: </label>
                        <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)}/>
                        {email.length < 5 ? (
                            <p>Email address must be at least 5 characters!</p>
                        ): null}
                    </div>
                    <div className='text-box'>
                        <label>Password: </label>
                        <input type="password" value={password} onChange={ (event) => setPassword(event.target.value)} />
                        {password.length < 8 ? (
                            <p>Password must be at least 8 characters!</p>
                        ): null}
                    </div>
                    <div className='text-box'>
                        <label>Confirm Password: </label>
                        <input type="password" value={confirmPassword} onChange={ (event) => setConfirmPassword(event.target.value)}/>
                        {confirmPassword !== password ? 
                        <p>Password and confirm password do not match!</p>:null}
                    </div>
                        <input type="submit" value="Create User"/>
                </form>
            </div>
            <div className='output'>
                <h4>Your Form Data</h4>
                <p>First Name <span> {firstName} </span></p> 
                <p>Last Name <span> {lastName} </span></p>
                <p>Email <span> {email} </span></p>
                <p>Password <span> {password} </span></p>
                <p>Confirm Password <span> {confirmPassword} </span></p>
            </div>
        </div>

    )
};


export default Form;