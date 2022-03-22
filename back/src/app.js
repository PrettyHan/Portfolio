import cors from "cors";
import express from "express";
import { userAuthRouter } from "./routers/userRouter";
import { educationRouter } from "./routers/educationRouter";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { projectRouter } from "./routers/projectRouter";
import { awardRouter } from "./routers/awardRouter";
import { certificateAuthRouter} from './routers/certificateRouter';
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import _ from "lodash";

const app = express();

app.use(fileUpload({
  createParentPath: true
}));
// CORS 에러 방지
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
// express 기본 제공 middleware
// express.json(): POST 등의 요청과 함께 오는 json형태의 데이터를 인식하고 핸들링할 수 있게 함.
// express.urlencoded: 주로 Form submit 에 의해 만들어지는 URL-Encoded 형태의 데이터를 인식하고 핸들링할 수 있게 함.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

app.post('/upload',async(req,res)=>{
  try{
    if(!req.files){
      res.send({
        status: false,
        message:"파일 업로드 실패"
      });
    } else {
      let f = req.files.uploadFile;
      f.mv('./uploads/'+f.name);
      res.send({
        status: true,
        message: "파일 업로드 성공",
        data :{
          name: f.name,
          mimetype : f.mimetype,
          size: f.size
        }
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
})
// router, service 구현 (userAuthRouter는 맨 위에 있어야 함.)
app.use(userAuthRouter);
app.use(educationRouter);
app.use(projectRouter);
app.use(awardRouter);
app.use(certificateAuthRouter);
// 순서 중요 (router 에서 next() 시 아래의 에러 핸들링  middleware로 전달됨)
app.use(errorMiddleware);

export { app };
