import is from "@sindresorhus/is";
import {Router} from 'express';
import {login_required} from '../middlewares/login_required';
import { certificateAuthService } from "../services/certificateService";

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
        const userId = req.body.userId;
        const title = req.body.title;
        const description = req.body.description;
        const when_date = req.body.when_date;

        // 위 데이터를 자격증 db에 추가하기
        const newCertificate = await certificateAuthService.addCertificate({
            userId,
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

certificateAuthRouter.get('/certificates/:id',async function(req, res, next){
    try{
        // 사용자가 가지고 있는 자격증 목록 얻음
        const certificateId = req.params.id;
        const certificates = await certificateAuthService.getCertificates({certificateId});
        res.status(200).send(certificates);
    }catch (error){
        next(error);
    }
})

certificateAuthRouter.put('/certificates/:id',login_required,
    async function (req,res,next){
        try {
            //URI로부터 사용자 id 추출
            const certificateId = req.params.id;
            // body data로부터 업데이트할 사용자 정보를 추출
            const title = req.body.title ?? null;
            const description = req.body.description ?? null;
            const when_date = req.body.when_date ?? null;

            const toUpdate = {title, description, when_date};
            // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트. 업데이트 내용 없을 시 생략
            const updateCertificate = await certificateAuthService.setCertificate({certificateId,toUpdate});

            if(updateCertificate.errorMessgae) {
                throw new Error(updateCertificate.errorMessgae);
            }
            
            res.status(200).json(updateCertificate);
        } catch(error){
            next(error);
        }
    }
)

export {certificateAuthRouter};