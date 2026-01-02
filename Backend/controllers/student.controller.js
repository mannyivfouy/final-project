const Students = require("../models/student.model");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Students.find();
    res.status(200).json({ message: "Get Students Successfully", students });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    res.status(200).json({ message: "Get Student Successfully", student });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createStudent = async (req, res) => {
  try {
    const student = new Students({
      fullname: req.body.fullname,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
      placeOfBirth: req.body.placeOfBirth,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });

    await student.save();

    res.status(201).json({ message: "Student Created", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteStudentById = async (req, res) => {
  try {
    const student = await Students.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Student Delete Successfully", student });
  } catch (err) {}
};

exports.updateStudentById = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Students.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student Not Found" });
    }

    student.fullname = req.body.fullname || student.fullname;
    student.gender = req.body.gender || student.gender;
    student.dateOfBirth = req.body.dateOfBirth || student.dateOfBirth;
    student.placeOfBirth = req.body.placeOfBirth || student.placeOfBirth;
    student.address = req.body.address || student.address;
    student.email = req.body.email || student.email;
    student.phoneNumber = req.body.phoneNumber || student.phoneNumber;

    await student.save();
    res.status(200).json({ message: "Student Update Successfully", student });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
