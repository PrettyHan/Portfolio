import {CertificateModel} from '../schemas/certificate';

class Certificate {
    static async create({newCertificate}){
        const createCertificate = await CertificateModel.create(newCertificate);
        return createCertificate;
    }
    

}

export {Certificate};