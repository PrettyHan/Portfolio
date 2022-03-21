import {Schema, model} from "mongoose";

const photoSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    }
});

const PhotoModel = model("Photo", photoSchema);

export {PhotoModel};