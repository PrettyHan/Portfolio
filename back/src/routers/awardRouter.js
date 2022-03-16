import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { AwardService } from "../services/awardService";

const awardRouter = Router();
// 로그인 체크 여부 확인
// awardRouter.use(login_required);

awardRouter.post("/award/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req (request) 에서 데이터 가져오기
    const userId = req.body.userId;
    const title = req.body.title;
    const description = req.body.description;

    // 위 데이터를 유저 db에 추가하기
    const newAward = await AwardService.addAward({
      userId: userId,
      title: title,
      description: description
    });

    res.status(201).json(newAward);
  } catch (error) {
    next(error);
  }
});


export { awardRouter }