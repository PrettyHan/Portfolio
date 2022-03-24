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
            required: false,
        },
        language: {
            type: Object, // Array 로 가공 // 조회수 user 에서 +1 로직 백엔드에서 짜보기 
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const SkillModel = model("skill", SkillSchema);

export { SkillModel };