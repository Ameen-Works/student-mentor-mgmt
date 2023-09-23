const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    default: undefined,
    ref: "Mentor",
  },
  prevMentor: {
    type: mongoose.Schema.Types.ObjectId,
    default: undefined,
    ref: "Mentor",
  },
});

module.exports = mongoose.model("students", StudentSchema);
