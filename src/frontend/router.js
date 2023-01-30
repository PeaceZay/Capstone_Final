import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Map from './components/Map'
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/list" element={<List />} /> */}
            <Route path="/map" element={<Map />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Router;