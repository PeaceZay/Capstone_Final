import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAcYs4bzax_teU9wNAs11AYPSJshGkSDVs"
  });
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <GoogleMap zoom={1} center={{ lat: 0, lng: 0 }} mapContainerClassName="map">
      <Marker position={{ lat: 0, lng: 0 }} />
    </GoogleMap>
  );
}





// const MapContainer = ({ google }) => {
//   useEffect(() => {
//     console.log(google);
//   }, [google]);

//   return (
//     <Map
//       google={google}
//       zoom={14}
//       initialCenter={{
//         lat: 37.7749,
//         lng: -122.4194
//       }}
//     />
//   );
// };

//  GoogleApiWrapper({
//   apiKey: 'YOUR_API_KEY'
// })(MapContainer);

export default Map;
