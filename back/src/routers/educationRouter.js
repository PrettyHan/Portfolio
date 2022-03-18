import is from "@sindresorhus/is";
import { Router } from "express";
import { EducationService } from "../services/EducationService";
import { login_required } from "../middlewares/login_required";
const educationRouter = Router();
// register

educationRouter.use(login_required);

educationRouter.post("/education/register", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요",
        "혹은 내용이 비어있습니다."
      )
    }
    const { userId, school, major, position } = req.body;
    const newEducation = await EducationService.addEducation({
      userId: userId,
      school: school,
      major: major,
      position: position
    });
    if (newEducation.errorMessage) {
      throw new Error(newEducation.errorMessage)
    }
    res.status(201).json(newEducation);
  } catch (e) {
    next(e)
  }
})

educationRouter.get("/education/:userId", async function (req, res, next) {
  try {
    // req (request) 에서 id 가져오기
    const userId = req.params.userId;

    // 위 id를 이용하여 db에서 데이터 찾기
    const education = await EducationService.getEducation({ userId });

    if (education.errorMessage) {
      throw new Error(education.errorMessage);
    }

    res.status(200).send(education);
  } catch (error) {
    next(error);
  }
});

educationRouter.get("/educationlist/:userId", async function (req, res, next) {
  try {
    const userId = req.params.userId // userId 를 받음
    const educationlist = await EducationService.getEducationlist({ userId }); //  userId를 ServiceLayer 의 getEducationlist에 전달
    res.status(200).send(educationlist);
  } catch (error) {
    next(error);
  }
});
educationRouter.put("/educations/:userId", async function (req, res, next) {
  try {
    const userId = req.body.userId ?? null
    const school = req.body.school ?? null; // ??는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자 반환 그렇지 않으면 왼쪽 피연산자 반환
    const major = req.body.major ?? null;
    const position = req.body.position ?? null;

    const toUpdate = { school, major, position };

    const education = await EducationService.setEducation({ userId, toUpdate }); // 업데이트 할 목록을 toUpdate 변수에 담아 ServiceLayer 의 setEducation에 전달

    if (education.errorMessage) {
      throw new Error(education.errorMessage);
    }
    res.status(200).send(education);
  } catch (error) {
    next(error);
  }
});

educationRouter.delete("/educations/:userId", async function (req, res, next) {
  try {
    // req (request) 에서 id 가져오기
    const userId = req.params.userId;

    // 위 id를 이용하여 db에서 데이터 삭제하기
    const result = await EducationService.deleteEducation({ userId });

    if (result.errorMessage) {
      throw new Error(result.errorMessage);
    }

    res.status(200).send(result, "삭제가 완료 되었습니다.");
  } catch (error) {
    next(error);
  }
});



export { educationRouter }
