import { useState, useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Tag from '@components/Tag';
import Wrapper from '@hoc/Wrapper';
import TagProps from '../types/TagProps';
import Social from '../types/Social';

// const tags: Array<TagProps> = [
//   {
//     id: '1',
//     skill: 'Javascript',
//   },
//   {
//     id: '2',
//     skill: 're',
//   },
//   {
//     id: '3',
//     skill: 'dd',
//   },
//   {
//     id: '4',
//     skill: 'ff',
//   },
//   {
//     id: '5',
//     skill: 'aa',
//   },
//   {
//     id: '6',
//     skill: 'Javascript',
//   },
//   {
//     id: '7',
//     skill: 'Javascript',
//   },
//   {
//     id: '8',
//     skill: 'Javascript',
//   },
// ];

const socials: Array<Social> = [
  {
    id: '1',
    title: 'Github',
    link: '',
  },
  {
    id: '2',
    title: 'Linkedin',
    link: '',
  },
  {
    id: '3',
    title: 'LeetCode',
    link: '',
  },
  {
    id: '4',
    title: 'Behance',
    link: '',
  },
  {
    id: '5',
    title: 'Other',
    link: '',
  },
];

type DataType = {
  fullname: string;
  Links: [
    {
      title: string;
      link: string;
    }
  ];
  Tags: [''];
};

const fetchDetails = async () => {
  const response = await axios.get('http://localhost:8080/tag');
  return response.data;
};

const SetUpProfile = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<Array<TagProps>>([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [selectedSocials, setSelectedSocials] = useState<Array<Social>>([]);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [color, setColor] = useState('white');
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUser(user.userId);
    }
  }, []);
  let toastId: string;
  const { data: tags, isLoading } = useQuery<Array<TagProps>>({
    queryFn: fetchDetails,
    queryKey: ['tags'],
  });
  const { mutate } = useMutation(
    async (Data: DataType) =>
      axios.patch(`http://localhost:8080/api/createProfile/${user}`, {
        Data,
      }),
    {
      onError: (error) => {
        console.log(error);
        toast.dismiss(toastId);
        toast.error('Error Occured! Please try again..', { id: toastId });
      },
      onSuccess: (data) => {
        console.log(data);
        toast.dismiss(toastId);
        toast.success('Added your account', { id: toastId });
        // navigate('/login');
      },
    }
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log();
        mutate({ Tags: selectedTags, Links: selectedSocials, fullname: name });
      }}
    >
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 w-full ">
        <div className=" flex flex-col my-4">
          <h3>Setup your Profile.</h3>
          <div className="flex gap-2  space-x-12 mt-6 ">
            <div>
              <p className=" text-white/50">Profile Picture :</p>
              <FaUserAlt
                size={80}
                className={`border border-${color} text-${color} rounded-full p-2 m-20`}
              />
            </div>
            <div>
              <p className=" text-white/50">Name :</p>
              <input
                id={name}
                className="rounded-md p-2 text-black"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="">
            <h3 className=" text-white/50">Add Link:</h3>

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
          <h3 className=" text-white/50">Add Skill: </h3>
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
                  tags.find((tag) => tag.skill === e.target.value),
                ]);
              }}
              className=" h-fit text-sm bg-transparent  text-white font-semibold  py-2 px-2 mx-2 text-center border hover:border-indigo-700  border-blue   rounded-md "
            >
              {!isLoading &&
                tags!.map((tag) => (
                  <option
                    key={tag._id}
                    onSelect={(e) => console.log(e)}
                    className="bg-almost-black text-white  "
                    value={tag.skill}
                  >
                    {tag.skill}
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
