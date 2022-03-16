import is from "@sindresorhus/is";
import {Router} from 'express';
import {login_required} from '../middlewares/login_required';
import { certificateAuthService } from "../services/certificateService";
import {userAuthService} from '../services/userService';

const certificateAuthRouter = Router();


certificateAuthRouter.post('/certificate/create', async function(req,res,next){
    try {
        // 사용자의 새로운 자격증 등록
        if(is.emptyObject(req.body)){
            throw new Error(
                `headers의 Content-Type을 application/json으로 설정해주세요`
            );

        }
        /// req에서 데이터 가져오기
        const title = req.body.title;
        const description = req.body.description;
        const when_date = req.body.when_date;

        // 위 데이터를 자격증 db에 추가하기
        const newCertificate = await certificateAuthService.addCertificate({
            title,
            description,
            when_date,
        });
        
        if (newCertificate.errorMessage) {
            throw new Error(newCertificate.errorMessage);
        }
        res.status(201).json(newCertificate);
        
    }
    catch(error) {
        next(error);
    }
});

certificateAuthRouter.get('/certificates/:id', login_required,async function(req, res, next){
    try{
        // 사용자가 가지고 있는 자격증 목록 얻음
        const certificates = await certificateAuthService.getCertificates();
        res.status(200).send(users);
    }catch (error){
        next(error);
    }
})

export {certificateAuthRouter};