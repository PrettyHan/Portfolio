import {User, Certificate} from '../db';
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import jwt from 'jsonwebtoken';

class certificateAuthService {
    static async addCertificate({title, description,when_date}){
        // 자격증 등록
        const newCertificate = {title, description, when_date};

        const createNewCertificate = await Certificate.create({newCertificate});
        createNewCertificate.errorMessage = null;

        return createdNewCertificate;
    }
    // 자격증 목록 불러오기
    static async getCertificates({}){
        const  certificates = await Certificate.findAll();
        return certificates;
    }
    // 자격증 내용 수정
    static async setCertificate({toUpdate}){
        const certificate = await Certificate.findById(certificateId);
        
        if(toUpdate.title) {
            const fieldToUpdate = "title";
            const newValue = toUpdate.title;
            certificate = await Certificate.update({fieldToUpdate,newValue});
        }

        if(toUpdate.description) {
            const fieldToUpdate = "description";
            const newValue = toUpdate.description;
            certificate = await Certificate.update({fieldToUpdate,newValue});
        }

        if (toUpdate.when_date) {
            const fieldToUpdate = "when_date";
            const newValue = toUpdate.when_date;
            certificate = await Certificate.update({fieldToUpdate,newValue});
        }
        return certificate;
    }
}
export {certificateAuthService};