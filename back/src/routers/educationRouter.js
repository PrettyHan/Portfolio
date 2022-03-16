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
    const { education_id, school, major, position } = req.body;
    const newEducation = await EducationService.addEducation({
      education_id: education_id,
      school: school,
      major: major,
      position: position
    });
    if(newEducation.errorMessage) {
      throw new Error(newEducation.errorMessage)
    }
    res.status(201).json(newEducation);
  } catch (e) {
    next(e)
  }
})

educationRouter.get("/education/:id", async function (req, res, next) {
  try {
    // req (request) 에서 id 가져오기
    const education_id = req.params.id;

    // 위 id를 이용하여 db에서 데이터 찾기
    const education = await EducationService.getEducation({ education_id });

    if (education.errorMessage) {
      throw new Error(education.errorMessage);
    }

    res.status(200).send(education);
  } catch (error) {
    next(error);
  }
});





export { educationRouter }
