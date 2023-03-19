import Navbar from '@components/Navbar';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const Wrapper = (Component: React.FC) =>
  function HOC() {
    const token = localStorage.getItem('token');
    useEffect(() => {
      if (token) {
        const user = JSON.parse(atob(token.split('.')[1]));
        console.log(user);
      }
    }, []);

    return (
      <section className="md:px-40 px-20 bg-almost-black text-white min-h-screen min-w-screen">
        <Navbar />
        <Toaster />
        <Component />
      </section>
    );
  };

export default Wrapper;
