import React, { useState } from 'react';
import axios from 'axios';
import './Navbar.css';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';

const ariaLabel = { 'aria-label': 'description' };



const Login = (props) => {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  }
  );

  return (
    <div className='login'>

    </div>
    )
}

export default Login;
  
  
  // This is the old Login function
  // 
  //   let navigate = useNavigate();
  
  //   const { isLoading, error, user, loginWithRedirect, logout } = useAuth0();
  //   const handleLogin = () => {
  //     loginWithRedirect({});
  //     if (isLoading) {
  //       console.log("isLoading")
  //     }
  //   };
  //   if (error) {
      
  //   }
  //   if (user) {
  //   return <Dashboard />;
  //   }
  //   return <loginButton onclick = {handleLogin()} />
    
  //   const handleChange = (e) => {
  //     console.log(e.target.value)
  //     setCredentials({
  //       ...credentials,
  //       [e.target.name]: e.target.value
  //     })
  //   }
  
  // const loggingIn = (e) => {
  //   e.preventDefault();
  //   document.cookie = "loggedIn=true;max-age=60*100000"
  //   navigate("/Dashboard");
  // };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(credentials)
  //   axios.post('http://localhost:3000/login', {
  //     email: credentials.email,
  //     password: credentials.password
  //   })
  //   .then(response=>{
  //     console.log(response);
  //     document.cookie = `jwt=${response.headers.authorization};max-age=60*1000`;
  //     document.cookie = `userID=${response.data.userID};max-age=60*1000`
  //     loggingIn()
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
    
    
  // }
  // This is the old Return statement
// 
// <div style={{
//   margin: 'auto',
//   textAlign: 'center',
//     color: 'black'
//     }}>
//          <nav>
//   <Link to="/">Home</Link> |{" "}
//   <Link to="/map">Map</Link> |{" "}
//   <Link to="/dashboard">Dashboard</Link> |{" "}
//   <Link to="/register">Register</Link>
// </nav>
//       <h2 style={{Color: '#808080'}}>Log In </h2>
//       <form onSubmit={(e) => {handleSubmit(e)}}>
//         <Input sx={{width: '30%', color:'black'}} 
//         placeholder="Email" 
//         inputProps={ariaLabel} 
//         name="email" 
//         type="text" value={credentials.email} 
//         onChange={(e) => {handleChange(e)}}/>
//         <br/>
//         <TextField
//         sx={{width: '30%', margin: '3%'}}
//         id="filled-password-input"
//         label="Password"
//         type="password"
//         autoComplete="current-password"
//         variant="filled"
//         name="password" 
//         value={credentials.password} 
//         onChange={(e) => {handleChange(e)}}
//       />

//         <br/>
//         <Button variant="outlined" type="submit" value="Submit" sx={{margin: '3%', color: "#800080 "}}>Submit</Button>
//       </form>
//       <br></br> 
//       <h5> <Link to="/Register">New to All M.E? Register here!</Link></h5>
//   </div>

















// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     //  perform your login logic here
//       // Get the values of the email and password fields
//   const email = password.current.value;
//   const password = username.current.value;

//   // Validate the email and password fields
//   if (!email || !password) {
//     setError("Email and password are required");
//     return;
//   }
//   const data = res.json();

//     console.log(`Username: ${username} Password: ${password}`);
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <label>
//         username:
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };
