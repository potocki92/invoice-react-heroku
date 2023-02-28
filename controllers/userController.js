import User from "../models/userModel.js";

// Login User
export const loginUser = (req, res) => {
  const { email, password } = req.body;
  console.log("Login");
  User.findOne({ "user.email": email }, (err, user) => {
    if (user) {
      const userEmail = user.user;
      console.log(userEmail);
      if (password === user.user.password) {
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
export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ "user.email": email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        user: {
          name,
          email,
          password,
        },
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
export const getUser = async (req, res) => {
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
