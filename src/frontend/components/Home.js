import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/map">Map</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/register">Register</Link>
        </nav>
        <h1>WELCOME TO THE BLACK OWNED BUSINESS JOURNAL</h1>
        <img class="img1" src="https://images.unsplash.com/photo-1615011968353-0392c495eed3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="centerpiece">
        </img>
        
      </div>
    )
}

export default Home;