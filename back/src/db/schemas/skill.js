import { Schema, model } from "mongoose";

const SkillSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        career: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const SkillModel = model("Career", SkillSchema);

export { SkillModel };
