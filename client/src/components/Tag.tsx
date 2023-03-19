import React from 'react';
import TagProps from '../types/TagProps';

const Tag = ({ skill, mutate }) => {
  return (
    <div
      onClick={(event) => {
        mutate(skill);
      }}
      className=" text-sm bg-transparent  text-white font-semibold  py-2 px-2 mx-2 text-center border hover:border-indigo-700  border-blue   rounded-md h-fit  "
    >
      {skill}
    </div>
  );
};

export default Tag;
