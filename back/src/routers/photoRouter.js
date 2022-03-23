import is from "@sindresorhus/is";
import {Router} from "express";
import {loginRequired} from "../middlewares/loginRequired";
// import {photoRouter} from '../services/photoService';
import multer from "multer";
const photoRouter = Router();
// 로그인 체크 여부 확인(postman 사용할 때는 있으면 로그인이 필요합니다 뜸)
photoRouter.use(loginRequired);

photoRouter.get('/users/:id')
photoRouter.put('/users/:id',async(req,res)=>{
    try{
      if(!req.files){
        res.send({
          status: false,
          message:"파일 업로드 실패"
        });
      } else {
        const file = req.files.uploadFile;
        file.mv('./uploads/'+file.name);
        res.send({
          status: true,
          message: "파일 업로드 성공",
          data :{
            name: file.name,
            mimetype : file.mimetype,
            size: file.size
          }
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  })



export {photoRouter};

