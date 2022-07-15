const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const menteeSchema = new Schema(
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
    mentors: [
      {
        name: { type: String },
        mentor_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "mentors",
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

const mentees = mongoose.model("mentees", menteeSchema);

module.exports = mentees;
