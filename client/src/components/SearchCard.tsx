import { FaUserAlt } from 'react-icons/fa';
import SearchCardProps from '../types/SearchCardProps';

const SearchCard = ({ fullName, bio }) => {
  return (
    <div className="grid grid-cols-3 border-2 border-white px-4 py-6 rounded-md">
      <FaUserAlt size={60} className="border border-white p-2 rounded-full" />
      <div>
        <p className="text-semibold">{fullName}</p>
        <p className="text-white/50">{bio}</p>
      </div>
    </div>
  );
};

export default SearchCard;
