import is from "@sindresorhus/is";
import { Router } from "express";
import { ProjectService } from "../services/projectService";
import { login_required } from "../middlewares/login_required";


const projectRouter = Router();
// 로그인 체크 여부 확인(postman 사용할 때는 있으면 로그인이 필요합니다 뜸)
projectRouter.use(login_required);

projectRouter.post("/project/create", async function (req, res, next) {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req (request) 에서 데이터 가져오기
    const userId = req.body.userId;
    const title = req.body.title;
    const content = req.body.content;
    const f_date = req.body.f_date;
    const toDate = req.body.toDate;

    // 위 데이터를 유저 db에 추가하기
    const newProject = await ProjectService.addProject({
      userId: userId,
      title: title,
      content: content,
      f_date: f_date,
      t_date: t_date,
    });

    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
});

projectRouter.get("/projects/:id", async function (req, res, next) {
    try {
      // req (request) 에서 id 가져오기
      const projectId = req.params.id;
  
      // 위 id를 이용하여 db에서 데이터 찾기
      const project = await ProjectService.getProject({ projectId });
  
      if (project.errorMessage) {
        throw new Error(project.errorMessage);
      }
  
      res.status(200).send(project);
    } catch (error) {
      next(error);
    }
  });

  projectRouter.get("/projectlist/:userId", async function (req, res, next) {
      try {
          const userId = req.params.userId;
          const projectList = await ProjectService.getProjectList({ userId });
          res.status(200).send(projectList);
      } catch(error){
          next(error);
      }
  });

  projectRouter.put("/projects/:id", async function (req, res, next) {
      try{
          const projectId = req.params.id;
          const title = req.body.title ?? null; // ??는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자 반환 그렇지 않으면 왼쪽 피연산자 반환
          const content = req.body.content ?? null;
          const f_date = req.body.f_date ?? null;
          const t_date = req.body.t_date ?? null;

          const toUpdate = { title, content, f_date, t_date };

          const project = await ProjectService.setProject({ projectId, toUpdate });

          if (project.errorMessage) {
              throw new Error(project.errorMessage);
          }
          res.status(200).send(project);
      } catch(error) {
          next(error);
      }
  });


export { projectRouter }
