import Tag from '@components/Tag';
import Wrapper from '@hoc/Wrapper';
import TagProps from '../types/TagProps';
import { BsFillEyeFill, BsFillPencilFill } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FaUserAlt } from 'react-icons/fa';

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

const UserProfilePage = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['user-details'],
    queryFn: () => fetchDetails(),
  });
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Error...</h3>;
  return (
    <div className="bg-almost-black flex  flex-col items-center text-white w-full">
      <div className="1 w-full flex flex-col justify-center items-center ">
        <FaUserAlt className="rounded-full border border-white p-2" size={80} />

        <h1 className=" text-white text-3xl">{data.fullName}</h1>

        <h3>MU | IT Engineering | 3rd Year </h3>

        <div className="flex flex-wrap justify-center gap-2 text-center mt-4  ">
          {data.Tags.map((tag) => (
            <Tag key={tag.id} {...tag} />
          ))}
        </div>

        <span className="flex gap-2 items-center text-sm text-white font-semibold  py-1 px-4 text-center  bg-blue rounded-md my-8 ">
          {/* reacticons */}
          <BsFillEyeFill />
          20 Profile Views
        </span>

        <button className="flex items-center gap-2 text-sm bg-transparent  text-white font-semibold  py-2 px-4 mx-2 text-center border hover:border-indigo-700  border-blue rounded-md mt-4">
          <BsFillPencilFill />
          Edit Profile
        </button>
      </div>

      <div className="2 flex flex-col justify-start w-full  ">
        <div className=" left-0 top-0">Link</div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-6  items-center w-full ">
          {data.Links.map((link) => {
            <a
              href={link.url}
              className="flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center"
            >
              <img
                className="w-10 rounded-full mr-4 "
                src="https://avatars.githubusercontent.com/u/64531568?v=4"
                alt=""
              />
              <span>{link.title}</span>
            </a>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Wrapper(UserProfilePage);
