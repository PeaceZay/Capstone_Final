import React from 'react'
import { Link } from "react-router-dom";
import InteractiveList from './Icons';
import FindBlackOwnedBusinesses from './List';
import PlacesCard from './Places';



function Dashboard() {
  return (
    
    
    <div>
      <nav>
    <Link to="/">Home</Link> |{" "}
    <Link to="/map">Map</Link> |{" "}
    <Link to="/login">Login</Link> |{" "}
    <Link to="/register">Register</Link>
  </nav>
    <h1>Explore New Stores</h1>
  <img class="img2" src="https://images.unsplash.com/photo-1602296751203-b9aa27fe9426?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="dashboard"></img>
      <h2>Write and Save your Experience</h2>
  <FindBlackOwnedBusinesses/>  
  <PlacesCard/>
  <InteractiveList/>
  </div>
    
  )
}

export default Dashboard