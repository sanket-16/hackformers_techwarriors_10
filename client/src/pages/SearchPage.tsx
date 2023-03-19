import Wrapper from '@hoc/Wrapper';
import SearchCardProps from '../types/SearchCardProps';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchCard from '@components/SearchCard';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import TagProps from '../types/TagProps';
import Tag from '@components/Tag';

// const profiles: Array<SearchCardProps> = [
//   {
//     googleId: '1',
//     name: 'Gurav Dada',
//     bio: 'Hi hUIiIiIi',
//     image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
//   },
//   {
//     googleId: '2',
//     name: 'Gurav Dada',
//     bio: 'Hi hUIiIiIi',
//     image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
//   },
//   {
//     googleId: '3',
//     name: 'Gurav Dada',
//     bio: 'Hi hUIiIiIi',
//     image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
//   },
//   {
//     googleId: '4',
//     name: 'Gurav Dada',
//     bio: 'Hi hUIiIiIi',
//     image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
//   },
//   {
//     googleId: '5',
//     name: 'Gurav Dada',
//     bio: 'Hi hUIiIiIi',
//     image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
//   },
//   {
//     googleId: '6',
//     name: 'Gurav Dada',
//     bio: 'Hi hUIiIiIi',
//     image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
//   },
// ];

// const fetchDetails = async (search: string) => {
//   const response = await axios.get('http://localhost:8080/api/byname', {
//     fullname: search,
//   });
//   return response.data;
// };

const tags = [
  {
    _id: '1',
    skill: 'Javascript',
  },
  {
    _id: '2',
    skill: 'Markdown',
  },
  {
    _id: '3',
    skill: 'React',
  },
  {
    _id: '4',
    skill: 'Graphic Designer',
  },
];

const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  // const { data, isLoading, error, refetch } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: () => fetchDetails(search),
  // });
  // const queryClient = useQueryClient();
  let toastId: string;
  const { mutate } = useMutation(
    async (data: string) =>
      axios.post('http://localhost:8080/api/bytag', { Tags: data }),
    {
      onError: (error) => {
        console.log(error);
        toast.dismiss(toastId);
        toast.error('Error Occured! Please try again..', { id: toastId });
      },
      onSuccess: (receivedData) => {
        setData((prevValue) => prevValue.push(receivedData));
        console.log(data);
        toast.dismiss(toastId);
        toast.success('Added your account', { id: toastId });
      },
    }
  );
  // if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="w-full">
      <div className="flex-col gap-4">
        <label className="font-semibold text-xl" htmlFor="search">
          Search
        </label>
        <div className="flex flex-row items-center gap-2 w-full mt-4">
          <input
            type="text"
            value={search}
            className="bg-transparent border border-white rounded-md px-2 py-4 flex flex-1"
            placeholder="Type to search"
            onChange={(event) => {
              setSearch(event.target.value);
              // console.log(data);
              // queryClient.invalidateQueries(['users']);
            }}
          />
          <AiOutlineSearch size={40} />
        </div>
      </div>
      <div className="my-8">
        <h3 className="font-semibold text-xl mb-4">Tags</h3>
        <div className="flex overflow-y-scroll">
          {tags.map((tag) => (
            <div
              onClick={(event) => {
                mutate(tag.skill);
              }}
              className=" text-sm bg-transparent  text-white font-semibold  py-2 px-2 mx-2 text-center border hover:border-indigo-700  border-blue   rounded-md h-fit  "
            >
              {tag.skill}
            </div>
          ))}
        </div>
      </div>
      <h3 className="font-semibold text-xl mb-4">Search Results...</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((profile) => (
          <SearchCard key={profile._id} fullName={profile.fullName} />
        ))}
      </div>
    </div>
  );
};

export default Wrapper(SearchPage);
