const express = require("express");
const Mentor = require("../Models/MentorSchema");
const router = express.Router();

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.send(mentors);
  } catch (err) {
    res.status(400).send(err);
  }
};

const addMentor = async (req, res) => {
  const { name, email, course } = req.body;
  const addMentor = new Mentor({
    name: name,
    email: email,
    course: course,
  });
  try {
    const newMentor = await addMentor.save();
    res.send(newMentor);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

const getMentorById = async (req, res) => {
  const { id } = req.params;
  try {
    const mentor = await Mentor.findById({ _id: id });
    res.status(200).send(mentor);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

module.exports.getMentors=getMentors;
module.exports.getMentorById=getMentorById;
module.exports.addMentor=addMentor;

