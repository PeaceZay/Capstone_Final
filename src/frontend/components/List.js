import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const FindBlackOwnedBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [location, setLocation] = useState('');

  const handleLocationChange = event => {
    setLocation(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const apiKey = 'maps_key';
    const query = `black owned businesses near ${location}`;
    const url = `http://18.119.123.101:3001/api/search?search=${query}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data)
    // console.log("response", response)
    setBusinesses(data);

  //   data.map(business => {
  //     fetch('http://18.119.123.101:3001/api/boblist-post',{
  //     method: 'POST',
  //       headers: {
  //       "placeId": "place_id; charset=UTF-8",
  //       "name": "name " + trimdJWT
  //     },
  //       body: JSON.stringify(classObj)
  //   })
  //     .then(res => res.text())
  //     .then(response => {
  //       console.log("create new class response", response);
  //       //once response received, navigate back to home page
  //       navigate("/");
  //     })
  };


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>
        <button type="submit">Find BoBs NOW!</button>
      </form>


      <ul>
        {
          businesses.map(business => (


            <li key={business.id}>{business.name}</li>
          ))}
      </ul>

      {/* {businesses.length ? 
      <div>
        {businesses.map((name, index)=>(
          <p key={index} style={{color: "red"}}>business</p>
        ))}
      </div>
      : <p>No new notifications to display.</p>
      } */}

    </div>
  );
};

export default FindBlackOwnedBusinesses; 