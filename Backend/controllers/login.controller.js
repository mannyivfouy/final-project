const Users = require("../models/user.model");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid Username or Password" });
  }
  return res.json({
    message: "Login Successful",
    user: {
      id: user._id,
      username: user.username,
      role: user.role,
    },
  });
};
