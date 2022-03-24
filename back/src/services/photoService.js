import {Photo} from "../db";
import {v4 as uuidv4} from "uuid";

const user = {
    uploadProfile: async (req, res) =>{
        const image = req.file.path;
        console.log(req.file);
        if (image === undefined){
            return res.status(400).send(util.fail(400, "이미지가 존재하지 않습니다."));
        }
        res.status(200).send(util.success(200, "파일 업로드 성공", uploadFile));
    }
}

const util = {
    success: (status, message, data)=>{
        return {
            status: status,
            success: true,
            message: message,
            data: data
        }
    },
    fail : (status,message) =>{
        return {
            status: status,
            success: false,
            message: message
        }
    }
}

export {user,util};