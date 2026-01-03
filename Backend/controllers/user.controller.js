const Users = require("../models/user.model");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({ message: "Get Users Successfully", users });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "Get User Successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new Users({
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password,
      dateOfBirth: req.body.dateOfBirth,
      placeOfBirth: req.body.placeOfBirth,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      role: req.body.role,
    });
    await user.save();
    res.status(201).json({ message: "User Created", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Delete Successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    user.fullname = req.body.fullname || user.fullname;
    user.username = req.body.username || user.username;
    user.password = req.body.password || user.password;
    user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
    user.placeOfBirth = req.body.placeOfBirth || user.placeOfBirth;
    user.address = req.body.address || user.address;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.role = req.body.role || user.role;

    await user.save();
    res.status(200).json({ message: "User Update Successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
