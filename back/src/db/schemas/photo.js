import {Schema, model} from "mongoose";

const photoSchema = new Schema({
    userId : {
        type: String,
        required: true,
    },
    photo : {
        type: String,
        required: true,
        default:'lion.jpg'
    }
});

const PhotoModel = model("Photo", photoSchema);

export {PhotoModel};