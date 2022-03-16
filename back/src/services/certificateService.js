import {Certificate} from '../db';
import {v4 as uuidv4} from 'uuid';

class certificateAuthService {
    static async addCertificate({userId, title, description,when_date}){
        // 자격증 등록
        const id = uuidv4();
        const newCertificate = {id, userId, title, description, when_date};

        const createdNewCertificate = await Certificate.create({newCertificate});
        createdNewCertificate.errorMessage = null;

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