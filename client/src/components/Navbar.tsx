import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import react from '../assets/react.svg';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const fetchDetails = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = await JSON.parse(atob(token.split('.')[1]));

    const response = await axios.get(
      `http://localhost:8080/api/byprofile/${user.userId}`
    );
    return response.data;
  }
};

const Navbar = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const user = JSON.parse(atob(token.split('.')[1]));

  }
  

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['userrr'],
    queryFn: () => fetchDetails(),
  });
  // if (isLoading) return 'Loading...';
  // if (error) return 'Error...';
  return (
    <nav className="w-full flex items-center justify-between py-8">
      <h1 className="font-bold text-2xl">
        Uni<span className="text-blue"> Link</span>
      </h1>
      <ul className="font-medium flex items-center my-4 gap-4">
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to={token !== '' || undefined ? '/user' : '/login'}>
            <button className=" flex items-center gap-2 bg-blue rounded-md px-4 py-2">
              {token !== '' || undefined ? (
                <div className="flex items-center gap-2">
                  <FaUserAlt /> {data.fullName}
                </div>
              ) : (
                'Login'
              )}
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
