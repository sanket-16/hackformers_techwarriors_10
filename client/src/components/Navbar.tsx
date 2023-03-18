import { useState } from 'react';
import react from '../assets/react.svg';
const Navbar = () => {
  const [isLogedIn, setIsLogedIn] = useState(true);

  return (
    <nav className="w-full flex items-center justify-between py-8">
      <h1 className="font-bold text-2xl">
        Uni<span className="text-blue">Link</span>
      </h1>
      <ul className="font-medium flex items-center my-4 gap-4">
        <li>Search</li>
        <li>
          <button className=" flex items-center gap-2 bg-blue rounded-md px-4 py-2">
            {isLogedIn ? (
              <div className="flex items-center gap-2">
                <img src={react} alt="pfp" className="w-6" /> Name
              </div>
            ) : (
              'Login'
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
