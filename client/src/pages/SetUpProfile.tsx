import Tag from '@components/Tag';
import Wrapper from '@hoc/Wrapper';
import React from 'react';
import TagProps from '../types/TagProps';
import Social from '../types/Social';

const tags: Array<TagProps> = [
  {
    id: '1',
    techstack: 'Javascript',
  },
  {
    id: '2',
    techstack: 're',
  },
  {
    id: '3',
    techstack: 'dd',
  },
  {
    id: '4',
    techstack: 'ff',
  },
  {
    id: '5',
    techstack: 'aa',
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
];

const socials: Array<Social> = [
  {
    id: '1',
    title: 'Github',
    link: 'http://',
  },
  {
    id: '2',
    title: 'snapchat',
    link: 'http://',
  },
  {
    id: '3',
    title: 'instagram',
    link: 'http://',
  },
  {
    id: '4',
    title: 'only fans',
    link: 'http://',
  },
];

const SetUpProfile = () => {
  const [selectedTags, setSelectedTags] = React.useState<Array<TagProps>>([]);
  const [selectedTag, setSelectedTag] = React.useState(tags[0].techstack);

  const [selectedSocials, setSelectedSocials] = React.useState<Array<Social>>(
    []
  );
  const [selectedProfile, setSelectedProfile] = React.useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 w-full ">
        <div className=" flex flex-col my-4">
          <h3>Setup your Profile.</h3>
          <div className="flex gap-2  space-x-12 mt-6 ">
            <div>
              <p className=" text-white/50">Profile Picture :</p>
              <img
                className="w-16 rounded-full"
                src="https://avatars.githubusercontent.com/u/64531568?v=4"
                alt=""
              />
            </div>
            <div>
              <p className=" text-white/50">Name :</p>
              <h2 className="text-2xl ">Sanket Patil</h2>
            </div>
          </div>

          <div className="">
            <h3 className=" text-white/50">Add Link</h3>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
              {selectedSocials.map((social) => (
                <div className="flex flex-col" key={social.id}>
                  <label htmlFor={social.id}>{social.title}</label>
                  <input
                    id={social.title}
                    className="rounded-md p-2 text-black"
                    type="text"
                  />
                </div>
              ))}
            </div>

            <select
              value={selectedProfile}
              onChange={(e) => {
                setSelectedProfile(e.target.value);
                selectedSocials.map((social) => {
                  if (social.title === e.target.value) {
                    console.log('hit');
                    return;
                  }
                });
                setSelectedSocials((prevValue) => [
                  ...prevValue,
                  socials.find((social) => social.title === e.target.value)!,
                ]);
              }}
              className=" h-fit text-sm bg-transparent  text-white font-semibold  py-2 px-2 m-2 text-center border hover:border-indigo-700  border-blue   rounded-md "
            >
              <option
                onSelect={(e) => console.log(e)}
                className="bg-almost-black text-white  "
              >
                Add a Social Media
              </option>
              {socials.map((social) => (
                <option
                  key={social.id}
                  onSelect={(e) => console.log(e)}
                  className="bg-almost-black text-white  "
                  value={social.title}
                >
                  {social.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h3 className=" text-white/50">Add Link</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2 my-4">
            {selectedTags.map((tag) => (
              <Tag key={tag.id} {...tag} />
            ))}
            <select
              value={selectedTag}
              onChange={(e) => {
                setSelectedTag(e.target.value);
                if (selectedTag === e.target.value) {
                  return;
                }
                setSelectedTags((prevValue) => [
                  ...prevValue,
                  tags.find((tag) => tag.techstack === e.target.value)!,
                ]);
              }}
              className=" h-fit text-sm bg-transparent  text-white font-semibold  py-2 px-2 mx-2 text-center border hover:border-indigo-700  border-blue   rounded-md "
            >
              {tags.map((tag) => (
                <option
                  key={tag.id}
                  onSelect={(e) => console.log(e)}
                  className="bg-almost-black text-white  "
                  value={tag.techstack}
                >
                  {tag.techstack}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="bg-blue rounded-md px-4 py-2 m-4" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Wrapper(SetUpProfile);
