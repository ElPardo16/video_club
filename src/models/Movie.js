import { Schema, model, models } from "mongoose";

const movieSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    languaje: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      required: true,
    },
  },

  {
    versionKey: false,
  }
);

export default models.Movie || model("Movie", movieSchema);