const User = require('../models/user');

const createProfile = async (req, res) => {
  // JSON.stringify(req.body)
  const { Links, Tags, fullname } = req.body;
  console.log(req.params.id);
  const user = await User.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        Links: Links,
        Tags: Tags,
        fullName: fullname,
      },
    }
  ).exec();
  user.save();

  res.send(user);
  console.log(Links, Tags, fullname);
};

const byProfile = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

const byTags = async (req,res) =>{

    const users = await User.find({Tags:req.body.Tags});
    res.send(users);

}
const byName = async (req,res) =>{

    console.log(req.body)
    const users = await User.find({fullName:req.body.fullName}).catch((e)=>console.log(e.message));
    res.send(users);
   
}

module.exports = {byProfile,byName,byProfile,createProfile,byTags}
