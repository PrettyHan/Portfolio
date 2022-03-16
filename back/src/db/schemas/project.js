import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    title: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("Project", projectSchema);

export { ProjectModel };
