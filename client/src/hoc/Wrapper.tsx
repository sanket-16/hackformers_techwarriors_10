import Navbar from '@components/Navbar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
    // const { data, isLoading, error, refetch } = useQuery(['user'], () => {
    //   return axios.get('http://localhost:8080/google');
    // });
    return (
      <section className="md:px-40 px-20 bg-almost-black text-white min-h-screen min-w-screen">
        <Navbar />
        <Component />
      </section>
    );
  };

export default Wrapper;
