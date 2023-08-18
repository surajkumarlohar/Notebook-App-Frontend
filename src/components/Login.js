import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [credentials, setCredentials] = useState({email: "", password: ""});
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json()
        // console.log(json);
        if(json.success){
            // Save the authtoken and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/", {replace:true});
            props.showAlert("Logged in Successfully", "success")
        }
        else{
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className="container mt-2">
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" name="email" onChange={onChange} placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} id="password" name="password" className="form-control" onChange={onChange} aria-labelledby="passwordHelpBlock"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
