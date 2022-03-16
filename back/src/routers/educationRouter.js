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
    const { school, major, position } = req.body;
    const newEducation = await EducationService.addEducation({
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

export { educationRouter }
