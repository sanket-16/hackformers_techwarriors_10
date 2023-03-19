const tag = require('../models/tag')


const addTag = async(req, res) =>{
   const tags = await tag.create({skill: req.body.skill})
   console.log(tags);
   res.send(tags)
}

module.exports = {addTag};