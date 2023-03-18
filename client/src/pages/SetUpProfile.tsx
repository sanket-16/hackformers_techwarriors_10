import Tag from '@components/Tag';
import Wrapper from '@hoc/Wrapper'
import React from 'react'
import TagProps from '../types/TagProps';
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

const socials = [
    {
        id: '1',
        title: 'Github',
        link: 'http://'
    },
    {
        id: '2',
        title: 'snapchat',
        link: 'http://'
    },
    {
        id: '3',
        title: 'instagram',
        link: 'http://'
    },
    {
        id: '4',
        title: 'only fans',
        link: 'http://'
    },


];

const SetUpProfile = () => {
    const [selectedTags, setSelectedTags] = React.useState<Array<TagProps>>([]);
    const [selectedTag, setSelectedTag] = React.useState(tags[0].techstack);

    const [selectedSocials, setSelectedSocials] = React.useState([])
    const [selectedProfile, setSelectedProfile] = React.useState('')



    return (


        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log(e.target[0].id)

            }} className='grid grid-cols-1  md:grid-cols-2 w-full '>
            <div className=' flex flex-col'>
                <h3>Setup your Profile.</h3>
                <div className='flex gap-2  space-x-12 mt-6 '>
                    <div>
                        <p className=' text-white/50' >Profile Picture :</p>
                        <img className='w-16 rounded-full' src="https://avatars.githubusercontent.com/u/64531568?v=4" alt="" />
                    </div>
                    <div>
                        <p className=' text-white/50' >Name :</p>
                        <h2 className='text-2xl '>Sanket Patil</h2>
                    </div>
                </div>


                <div className=''>
                    <h1>Add Link</h1>
                    
                    {selectedSocials.map((social ) => (
                        <input key={social.id} id={social.title} type="text" />
                     
                ))}

                    <select value={selectedProfile} onChange={(e) => {
                        setSelectedProfile(e.target.value)
                        if (selectedProfile === e.target.value) {
                            return;
                        }
                        setSelectedSocials([...selectedSocials, socials.find((social) => social.title === e.target.value)])

                    }} className=' h-fit text-sm bg-transparent  text-white font-semibold  py-2 px-2 mx-2 text-center border hover:border-indigo-700  border-blue   rounded-md '>
                        {socials.map((social) =>
                            <option key={social.id} onSelect={(e) => console.log(e)} className='bg-almost-black text-white  ' value={social.title}>{social.title}</option>
                        )}

                    </select>


                </div>

            </div>



            <div className='grid grid-cols-3 md:grid-cols-5'>

                {selectedTags.map((tag) => (
                    <Tag  key={tag.id} {...tag} />
                ))}
                <select value={selectedTag} onChange={(e) => {
                    setSelectedTag(e.target.value)
                    if (selectedTag === e.target.value) {
                        return;
                    }
                    setSelectedTags([...selectedTags, tags.find((tag) => tag.techstack === e.target.value)])

                }} className=' h-fit text-sm bg-transparent  text-white font-semibold  py-2 px-2 mx-2 text-center border hover:border-indigo-700  border-blue   rounded-md '>
                    {tags.map((tag) =>
                        <option key={tag.id} onSelect={(e) => console.log(e)} className='bg-almost-black text-white  ' value={tag.techstack}>{tag.techstack}</option>
                    )}

                </select>
            </div>
            <button type='submit'  >submit</button>
        </form>

    )
}

export default Wrapper(SetUpProfile)
