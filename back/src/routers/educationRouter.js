import { Router } from "express";
import { EducationService } from "../services/EducationService";
import { login_required } from "../middlewares/login_required";
const educationRouter = Router();
// register

educationRouter.use(login_required)

educationRouter.post("/education/register", async (req, res, next) => {
  const { college, major } = req.body;
  const newEducation = await EducationService.addUser({
    college: college, 
    major: major, 

});
})

export {educationRouter}
