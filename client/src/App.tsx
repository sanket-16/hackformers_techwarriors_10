import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '@pages/LandingPage';
import SearchPage from '@pages/SearchPage';
import Navbar from '@components/Navbar';
import ReactQueries from '@pages/ReactQueries';
import UserProfilePage from '@pages/UserProfilePage';
import SetUpProfile from '@pages/SetUpProfile';
import Login from '@pages/Login';
import Register from '@pages/Register';

function App() {
  const token = localStorage.getItem('token');

  return (
    <>
      <Routes>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<UserProfilePage />} />
        <Route path="/updateprofile" element={<SetUpProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
