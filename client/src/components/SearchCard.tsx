import SearchCardProps from '../types/SearchCardProps';

const SearchCard = ({ image, name, bio }: SearchCardProps) => {
  return (
    <div className="grid grid-cols-3 border-2 border-white px-4 py-6 rounded-md">
      <img
        src={image}
        className="w-20 col-span-1 rounded-full"
        alt="profile icon"
      />
      <div>
        <p className="text-semibold">{name}</p>
        <p className="text-white/50">{bio}</p>
      </div>
    </div>
  );
};

export default SearchCard;
