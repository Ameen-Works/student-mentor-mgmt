const {
  getMentors,
  getMentorById,
  addMentor,
} = require("../Controller/MentorActions");

const router = require("express").Router();

router.get("/", getMentors);
router.get("/mentor/:id", getMentorById);

router.post("/", addMentor);

module.exports = router;
