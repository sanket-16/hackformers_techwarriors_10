const User = require("../models/user")


const createProfile = async (req,res)=>{
    // JSON.stringify(req.body)
    const{Links,Tags,fullname} = req.body;
    console.log(req.params.id )
   const user = await User.findByIdAndUpdate({_id: req.params.id}, {$set:{
    Links : Links,
    Tags: Tags,
    fullName:fullname
}}, {upsert: true}).exec()
  user.save();
 
//    res.send(user);
//    console.log(Links ,Tags, fullname);


}

const byTags = async (req,res) =>{

    const users = await User.find({Tags:req.body.Tags});
    res.send(users);

}
const byName = async (req,res) =>{

    const users = await User.find(req.body.fullname);
    res.send(users);

}

module.exports = {createProfile,byTags,byName}