import {CertificateModel} from '../schemas/certificate';

class Certificate {
    static async create({newCertificate}){
        const createCertificate = await CertificateModel.create(newCertificate);
        return createCertificate;
    }

    static async findById({certificateId}) {
        const certificate = await CertificateModel.findOne({id : certificateId});
        return certificate;
    }
    static async findByUserId({ userId }){
        const certificates = await CertificateModel.find({userId});
        return certificates;
    }
    static async update({certificateId,fieldToUpdate, newValue}){
        const filter = {id: certificateId};
        const update = {[fieldToUpdate]: newValue};
        const option = {returnOriginal: false};

        const updateCertificate = await CertificateModel.findOneAndUpdate( filter, update, option);
        return updateCertificate;
    }
    

}

export {Certificate};