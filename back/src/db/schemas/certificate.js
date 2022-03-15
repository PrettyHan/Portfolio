import {Schema, model} from 'mongoose';

const CertificateSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    when_date: {
        type: Date,
        required: true,
    }
});

const CertificateModel = model("Certificate", CertificateSchema);

export {CertificateModel};