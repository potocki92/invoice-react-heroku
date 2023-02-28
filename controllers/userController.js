const User = require("../models/userModel.js");

// Login User
const loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log("Firebase Login");
  User.findOne({ "user.email": email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send("User not registered");
    }
  });
};

// Register User
const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  console.log("asdad");
  User.findOne({ "user.email": email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
};

// GET
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.padrams.id);
    if (!user) {
      res.status(404).send("User not found");
      return;
    }
    res.json(user.user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { loginUser, registerUser, getUser };
