import Wrapper from '@hoc/Wrapper';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

type DataType = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let toastId: string;
  const { mutate } = useMutation(
    async (data: DataType) =>
      axios.patch('http://localhost:8080/api/signin', { data }),
    {
      onError: (error) => {
        console.log(error);
        toast.dismiss(toastId);
        toast.error('Error Occured! Please try again..', { id: toastId });
      },
      onSuccess: (data) => {
        console.log(data);
        toast.dismiss(toastId);
        toast.success('Logged In successfully.', { id: toastId });
        localStorage.setItem('token', data.data.token);
      },
    }
  );
  return (
    <div className="h-full w-full flex flex-col items-center justify-center mt-12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate({ username: email, password });
        }}
        className="md:w-1/2 w-ful h-full flex flex-col gap-4 border-2 border-white rounded-md px-8 py-4"
      >
        <h2 className="w-full text-center font-bold text-2xl">Login</h2>
        <div className="w-full flex flex-col">
          <label className="text-white/50" htmlFor="email">
            Email Address:
          </label>
          <input
            className="rounded-md p-2 text-black"
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col">
          <label className="text-white/50" htmlFor="email">
            Password:
          </label>
          <input
            className="rounded-md p-2 text-black"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="w-full rounded-md bg-blue py-2 my-8" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Wrapper(Login);
