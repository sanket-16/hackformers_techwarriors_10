const User = require('../models/user');
const jwt = require('jsonwebtoken');

jwtSecret = 'SHHH';
const signup = async (req, res) => {
  const { username, password } = req.body.data;

  // console.log(username, password);

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  const user = new User({ username, password });

  await user.save();

  const token = jwt.sign({ userId: user._id }, jwtSecret);

  res.status(201).json({ message: 'User created', token });
};

const signin = async (req, res) => {
  const { username, password } = req.body.data;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign({ userId: user._id }, jwtSecret);

  res.json({ message: 'Signed in successfully', token });
};

module.exports = { signin, signup };
