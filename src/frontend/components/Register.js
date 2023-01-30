import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState(' ');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      // successfully registered
    } else {
      // display an error message
    }
  };

  return (
    <div className='register'>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/map">Map</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> 

      </nav>

      <div className='registerCont'>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="location" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <button type="submit" onSubmit={"/Login"}>Register</button>
      </form>
      </div>
    </div>

    
  );
//  NEED TO WRITE IF STATEMENT TO CHECK IF ALREADY REGISTERED
// Need to store information in database to get back token.

  
}

export default Register;