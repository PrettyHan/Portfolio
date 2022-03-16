import {User, Certificate} from '../db';
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';

class certificateAuthService {
    static async addCertificate({title, description,when_date}){
        const newCertificate = {title, description, when_date};

        const createNewCertificate = await Certificate.create({newCertificate});
        createNewCertificate.errorMessage = null;

        return createdNewCertificate;
    }
    static async getCertificates({}){
        const  certificates = await Certificate.findAll();
        return certificates;
    }
}
export {certificateAuthService};