const tag = require('../models/tag');

const addTag = async (req, res) => {
  const tags = await tag.create({ skill: req.body.skill });
  console.log(tags);
  res.send(tags);
};

const getTags = async (req, res) => {
  const tags = await tag.find();
  console.log(tags);
  res.send(tags);
};

module.exports = { addTag, getTags };
