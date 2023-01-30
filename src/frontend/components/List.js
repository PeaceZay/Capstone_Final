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
      const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setBusinesses(data.results);
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
          {businesses.map(business => (
            <li key={business.id}>{business.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FindBlackOwnedBusinesses; 