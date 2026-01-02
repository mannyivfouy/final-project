const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  createStudent,
  getStudentById,
  deleteStudentById,
  updateStudentById,
} = require("../controllers/student.controller");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.delete("/:id", deleteStudentById)
router.put("/:id", updateStudentById)

module.exports = router;
