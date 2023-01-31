import { Schema, model, models } from "mongoose";

const movieSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    languaje: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      require: true,
    },
  },
  
  {
    versionKey: false,
  }
);

export default models.Movie || model("Movie", movieSchema);