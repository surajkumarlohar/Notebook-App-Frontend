import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(props) {

  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // const {name, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: credentials.name, email: credentials.email, password: credentials.password})
    })
    const json = await response.json()
    // console.log(json);
    if(json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken);
      navigate("/login", {replace:true});
      props.showAlert("Account Created Successfully", "success")
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
      <h2>Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} placeholder="Enter your Name"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" name="password" onChange={onChange} className="form-control" minLength={8} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" id="cpassword" name="cpassword" onChange={onChange} className="form-control" minLength={8} required/>
            <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters, numbers and special characters and must not contain spaces or emoji.
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
