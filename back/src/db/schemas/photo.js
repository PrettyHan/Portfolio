import {Schema, model} from "mongoose";

const photoSchema = new Schema({
    imagePath: String,
    image: String,
});

const PhotoModel = model("Photo", photoSchema);

export {PhotoModel};