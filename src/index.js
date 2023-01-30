import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
