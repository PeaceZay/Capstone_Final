    import React, { useState, useEffect } from 'react';

    const PlacesList = () => {
      const [places, setPlaces] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://18.119.123.101:3001/api/search?search=');
          const data = await response.json();
          setPlaces(data);
        };
    
        fetchData();
      }, []);
    
      return (
        <div>
          {places.map(place => (
            <div key={place.id}>
              <h2>{place.name}</h2>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export default PlacesList;