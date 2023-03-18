import Wrapper from '@hoc/Wrapper';
import SearchCardProps from '../types/SearchCardProps';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchCard from '@components/SearchCard';
import { useState } from 'react';
import TagProps from '../types/TagProps';
import Tag from '@components/Tag';

const profiles: Array<SearchCardProps> = [
  {
    googleId: '1',
    name: 'Gurav Dada',
    bio: 'Hi hUIiIiIi',
    image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
  },
  {
    googleId: '2',
    name: 'Gurav Dada',
    bio: 'Hi hUIiIiIi',
    image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
  },
  {
    googleId: '3',
    name: 'Gurav Dada',
    bio: 'Hi hUIiIiIi',
    image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
  },
  {
    googleId: '4',
    name: 'Gurav Dada',
    bio: 'Hi hUIiIiIi',
    image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
  },
  {
    googleId: '5',
    name: 'Gurav Dada',
    bio: 'Hi hUIiIiIi',
    image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
  },
  {
    googleId: '6',
    name: 'Gurav Dada',
    bio: 'Hi hUIiIiIi',
    image: 'https://avatars.githubusercontent.com/u/89473596?v=4',
  },
];

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

const SearchPage = () => {
  const [search, setSearch] = useState('');
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
            onChange={(event) => setSearch(event.target.value)}
          />
          <AiOutlineSearch size={40} />
        </div>
      </div>
      <div className="my-8">
        <h3 className="font-semibold text-xl mb-4">Tags</h3>
        <div className="flex overflow-y-scroll">
          {tags.map((tag) => (
            <Tag key={tag.id} {...tag} />
          ))}
        </div>
      </div>
      <h3 className="font-semibold text-xl mb-4">Search Results...</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <SearchCard key={profile.googleId} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default Wrapper(SearchPage);
