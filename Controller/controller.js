import User from "../Model/model.user.js";

export const Signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error creating user" });
  }
};
