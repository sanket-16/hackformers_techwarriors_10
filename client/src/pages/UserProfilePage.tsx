import Tag from '@components/Tag';
import Wrapper from '@hoc/Wrapper';
import TagProps from '../types/TagProps';
import { BsFillEyeFill, BsFillPencilFill } from 'react-icons/bs';

const tags: Array<TagProps> = [
  {
    id: '1',
    techstack: 'Javascript',
  },
  {
    id: '2',
    techstack: 'Javascript',
  },
  {
    id: '3',
    techstack: 'Javascript',
  },
  {
    id: '4',
    techstack: 'Javascript',
  },
  {
    id: '5',
    techstack: 'Javascript',
  },
  {
    id: '6',
    techstack: 'Javascript',
  },
  {
    id: '7',
    techstack: 'Javascript',
  },
  {
    id: '8',
    techstack: 'Javascript',
  },
  {
    id: '9',
    techstack: 'Javascript',
  },
  {
    id: '10',
    techstack: 'Javascript',
  },
  {
    id: '11',
    techstack: 'Javascript',
  },
  {
    id: '12',
    techstack: 'Javascript',
  },
  {
    id: '13',
    techstack: 'Javascript',
  },
  {
    id: '14',
    techstack: 'Javascript',
  },
  {
    id: '15',
    techstack: 'Javascript',
  },
];

const UserProfilePage = () => {
  return (
    <div className="bg-almost-black flex  flex-col items-center text-white w-full">
      <div className="1 w-full flex flex-col justify-center items-center ">
        <img
          className="rounded-full w-24 "
          src="https://avatars.githubusercontent.com/u/89473596?s=400&u=c88f8aa5296f46989495bb3b240a1582d27f0cee&v=4"
          alt="img"
        />

        <h1 className=" text-white text-3xl">Omkar Gurav</h1>

        <h3>MU | IT Engineering | 3rd Year </h3>

        <div className="flex flex-wrap justify-center gap-2 text-center mt-4  ">
          {tags.map((tag) => (
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
          <div className="flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center">
            <img
              className="w-10 rounded-full mr-4 "
              src="https://avatars.githubusercontent.com/u/64531568?v=4"
              alt=""
            />
            <span>Check Out my github</span>
          </div>
          <div className="flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center">
            <img
              className="w-10 rounded-full mr-4 "
              src="https://avatars.githubusercontent.com/u/64531568?v=4"
              alt=""
            />
            <span>Check Out my github</span>
          </div>
          <div className="flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center">
            <img
              className="w-10 rounded-full mr-4 "
              src="https://avatars.githubusercontent.com/u/64531568?v=4"
              alt=""
            />
            <span>Check Out my github</span>
          </div>
          <div className="flex  bg-transparent  text-white font-semibold  py-2 px-2 text-center border hover:border-indigo-700  border-blue rounded-md  items-center">
            <img
              className="w-10 rounded-full mr-4 "
              src="https://avatars.githubusercontent.com/u/64531568?v=4"
              alt=""
            />
            <span>Check Out my github</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper(UserProfilePage);
