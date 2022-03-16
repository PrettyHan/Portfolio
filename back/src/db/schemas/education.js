import { Schema, model } from "mongoose";

const EducationSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        user_id: {
            type: String,
            required: true,
        },
        school: {
            type: String,
            required: true,
        },
        major: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
            default: "학교, 전공에 대한 정보입니다."
        }
    },
    {
        timestamps: true,
    }
);

const EducationModel = model("Education", EducationSchema);

export { EducationModel };
