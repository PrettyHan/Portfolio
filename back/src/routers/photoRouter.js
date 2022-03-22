import is from "@sindresorhus/is";
import {Router} from "express";
import {loginRequired} from "../middlewares/loginRequired";
import {photoRouter} from '../services/photoService';
import multer from "multer";
const photoRouter = Router();
// 로그인 체크 여부 확인(postman 사용할 때는 있으면 로그인이 필요합니다 뜸)
//photoRouter.use(loginRequired);
const upload = multer({
    dest: 'uploads/'
});

photoRouter.post('/single/upload', upload.single('file'), (req, res, next)=>{
    const {fieldename, orifinalname, encoding, mimetype, destination, filename, path, size}
    = req.file;
    const {fileName} = req.body;
    res.json({ok: true, data: "Single Upload Ok"})
})

export {photoRouter};