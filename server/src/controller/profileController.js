const Profile = require("../model/profile");

const createProfile = async (req,res)=>{

   const profile = await Profile.create({
        userID : "64156c511e55b38a8e268264",
        Links :[{ title: "github" , link : "github"}],
        tags : ["C","C++"],
        Bio : "Hello",
        counts : 0
    })
    console.log(profile)
    res.status(201).json({profile})
}

const updateProfile = async (req,res) =>{
   const profile =  await Profile.findOneAndUpdate(req.params.id , {
        $set: {
           userID : req.body.userID,
           Links : req.body.Links,
           tags : req.body.tags,
           Bio : req.body.Bio,
           counts : req.body.counts

        },

    })

    res.status(201).json({"msg":"Profile Updtated"});
}

module.exports = {createProfile,updateProfile};