const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports = {
  registerUser: async (req, res) => {
    try {
      const {
        email, password, passwordCheck, username,
      } = req.body;

      if (!email || !password || !passwordCheck || !username) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }

      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: 'Password needs to be 6 or more characters.' });
      }

      if (password !== passwordCheck) {
        return res.status(400).json({ message: 'Passwords do not match.' });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          message: 'Email is in use. Message admins for more information.',
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const hashedUser = new User({
        email,
        password: hashedPassword,
        username,
      });

      const savedUser = await hashedUser.save();

      return res.json(savedUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Missing required fields.' });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: 'No account with this email exists.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials.' });
      }

      // jwt.sign takes a payload and a secret
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({
        token,
        user: {
          id: user._id,
          username: user.username,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.userId);
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  tokenIsValid: async (req, res) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) {
        return res.json(false);
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (!verified) {
        return res.json(false);
      }

      const user = await User.findById(verified.id);
      if (!user) {
        return res.json(false);
      }

      return res.json(true);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  findOneUser: async (req, res) => {
    try {
      const user = await User.findById(req.userId);
      return res.json({
        id: user._id,
        username: user.username,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
