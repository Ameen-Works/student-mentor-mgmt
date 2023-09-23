const express = require("express");
const Student = require("../Models/StudentSchema");

const router = express.Router();
//get all students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (err) {
    res.status(400).send(err);
  }
};

//add Students

const addStudent = async (req, res) => {
  const addStudent = new Student({
    name: req.body.name,
    batch: req.body.batch,
    mentor: req.body.mentor ? req.body.mentor : undefined,
  });
  try {
    const newStudent = await addStudent.save();
    res.send(newStudent);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

//Students with no mentors

const studentsWithoutMentors = async (req, res) => {
  const students = await Student.find({ mentor: undefined });
  res.send(students);
};

//alter mentors

const assignMentor = async (req, res) => {
  const { id } = req.params;
  const { mentor } = req.body;
  try {
    const student = await Student.findById(id);
    student.prevMentor=student.mentor;
    student.mentor = mentor;
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

//add multiple students to mentor

const assignMentorMutliStudents = async (req, res) => {
  const { mentor, stud_list } = req.body;
  console.log(stud_list);
  try {
    stud_list.map(async (stud_id) => {
      const student = await Student.findById(stud_id);
      student.mentor = mentor;
      await student.save();
    });
    res.send("Updated Successfully");
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

//get students of mentor

const getStudentsByMentor = async (req, res) => {
  const { id } = req.params;
  try {
    const students = await Student.find({ mentor: id });
    res.send(students);
  } catch (err) {
    res.send(err);
  }
};

module.exports.allStudents=getStudents;
module.exports.addStudent=addStudent;
module.exports.studentsWithoutMentors=studentsWithoutMentors;
module.exports.assignMentor=assignMentor;
module.exports.assignMentorMutliStudents=assignMentorMutliStudents;
module.exports.getStudentsByMentor=getStudentsByMentor;

