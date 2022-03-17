import { Project } from "../db";
import { v4 as uuidv4 } from "uuid";

class ProjectService {
  static async addProject({ userId, title, content, from_date, to_date }) {
    // id로 유니크 값 사용
    const id = uuidv4();

    // db에 저장
    const newProject = { id, userId, title, content, from_date, to_date };
    const createdNewProject = await Project.create({ newProject });

    return createdNewProject;
}

  static async getProject({ projectId }) {
    // 해당 id를 가진 데이터가 db에 존재 여부 확인
    const project = await Project.findById({ projectId });
    if (!project){
        const errorMessage = "해당 id를 가진 프로젝트는 없습니다. 다시 한 번 확인해주세요.";
        return { errorMessage }
    }
    return project
  }

  static async getProjectList({ userId }) {
      const projects = await Project.findByUserId({ userId });
      return projects;
  }

  static async setProject({ projectId, toUpdate }) {
    let project = await Project.findById({ projectId })

    if (!project) {
        const errorMessage = "해당 id를 가진 프로젝트는 없습니다. 다시 한 번 확인해주세요.";
        return { errorMessage }
    }

    if(toUpdate.title){
        const fieldToUpdate = "title";
        const newValue = toUpdate.title;
        project = await Project.update({ projectId, fieldToUpdate, newValue });
    }
    if(toUpdate.content){
        const fieldToUpdate = "content";
        const newValue = toUpdate.content;
        project = await Project.update({ projectId, fieldToUpdate, newValue });
    }
    if(toUpdate.from_date){
        const fieldToUpdate = "from_date";
        const newValue = toUpdate.from_date;
        project = await Project.update({ projectId, fieldToUpdate, newValue });
    }
    if(toUpdate.to_date){
      const fieldToUpdate = "to_date";
      const newValue = toUpdate.to_date;
      project = await Project.update({ projectId, fieldToUpdate, newValue });
  }
    return project;
  }

}

export { ProjectService }
