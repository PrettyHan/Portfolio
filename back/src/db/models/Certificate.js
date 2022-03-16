import {CertificateModel} from '../schemas/certificate';
import { UserModel } from '../schemas/user';

class Certificate {
    static async create({newCertificate}){
        const createCertificate = await CertificateModel.create(newCertificate);
        return createCertificate;
    }
    static async findByEmail({email}){
        const user = await UserModel.findByEmail({ email });
        return user;
    }
    static async findById({user_id}) {
        const user = await UserModel.findOne({id : user_id});
        return user;
    }
    static async findAll(){
        const users = await UserModel.find({});
        return users;
    }
    static async update({user_id,fieldToUpdate, newValue}){
        const filter = {id: user_id};
        const update = {[fieldToUpdate]: newValue};
        const option = {returnOriginal: false};

        const updateUser = await UserModel.findOneAndUpdate(user_id, filter, update);
        return updateUser;
    }
    

}

export {Certificate};