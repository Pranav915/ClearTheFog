const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mentorsSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    about: {
      type: String,
    },
    mentees: [
      {
        name: { type: String },
        mentee_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "mentees",
        },
        start: {
          type: Date,
        },
        end: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const mentors = mongoose.model("mentors", mentorsSchema);

module.exports = mentors;
