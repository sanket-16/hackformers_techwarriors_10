import Tag from '@components/Tag';
import Wrapper from '@hoc/Wrapper';
import React from 'react';

const UserProfilePage = () => {
  return (

    <div className='bg-almost-black flex  flex-col items-center text-white w-full'>

      <div className='1 w-full flex flex-col justify-center items-center '>

        <img className='rounded-full w-24 ' src="https://avatars.githubusercontent.com/u/89473596?s=400&u=c88f8aa5296f46989495bb3b240a1582d27f0cee&v=4" alt="img" />

        <h1 className=' text-white text-3xl'>Omkar Gurav</h1>

        <h3>MU | IT Engineering | 3rd Year </h3>

        <div className='grid grid-cols-3 sm:grid-cols-5 gap-8 text-center mt-4  items-center  '>
          <Tag techstack="javascript" />
          <Tag techstack="javascript" />
          <Tag techstack="javascript" />
          <Tag techstack="javascript" />
          <Tag techstack="javascript" />
        </div>


        <span className='text-sm bg-transparent  text-white font-semibold  py-2 px-6 text-center border hover:border-indigo-700  border-blue   rounded-md mt-4 '>
          {/* reacticons */}
          20 Profile Views
        </span>

        <button className='text-sm bg-transparent  text-white font-semibold  py-2 px-4 mx-2 text-center border hover:border-indigo-700  border-blue rounded-md mt-4'>Edit Profile</button>


      </div>

  
      <div className='2 flex flex-col justify-start w-full  '>

        <div className=' left-0 top-0'>Link</div>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-6  items-center w-full '>
            <div className='flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center'>
              <img className='w-10 rounded-full mr-4 ' src="https://avatars.githubusercontent.com/u/64531568?v=4" alt="" />
              <span>Check Out my github</span>
            </div>
            <div className='flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center'>
              <img className='w-10 rounded-full mr-4 ' src="https://avatars.githubusercontent.com/u/64531568?v=4" alt="" />
              <span>Check Out my github</span>
            </div>
            <div className='flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center'>
              <img className='w-10 rounded-full mr-4 ' src="https://avatars.githubusercontent.com/u/64531568?v=4" alt="" />
              <span>Check Out my github</span>
            </div>
            <div className='flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center'>
              <img className='w-10 rounded-full mr-4 ' src="https://avatars.githubusercontent.com/u/64531568?v=4" alt="" />
              <span>Check Out my github</span>
            </div>

            
            

        </div>

      </div>
    </div>


  );
};

export default Wrapper(UserProfilePage);
