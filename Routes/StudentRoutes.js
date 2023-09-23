const express = require("express");
const { allStudents, studentsWithoutMentors, getStudentsByMentor, addStudent, assignMentor, assignMentorMutliStudents } = require("../Controller/StudentActions");

// import { allStudents } from "../Controller/StudentActions";

const router = express.Router();

router.get("/", allStudents);
router.get("/without-mentors",studentsWithoutMentors);
router.get("/mentor-students/:id",getStudentsByMentor);

router.post("/",addStudent);

router.patch("/assign-mentor/:id",assignMentor);
router.patch("/assign-mentor-multiStudents",assignMentorMutliStudents);



module.exports = router;
