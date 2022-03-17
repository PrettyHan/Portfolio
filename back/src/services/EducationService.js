import { Education } from "../db"
import { v4 as uuidv4 } from "uuid";

class EducationService {
  static async addEducation({ school, major, position }) {
    const id = uuidv4();
    const newEducation = { id, school, major, position };

    // db에 저장
    const createdNewUser = await Education.create({ newEducation });
    createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewUser;
  }
  static async getEducation({ education_id }) {

    const education = await Education.findById({ education_id })
    if (!education) {
      const errorMessage = "해당 id를 가진 데이터는 없습니다"
      return { errorMessage }
    }
    return education
  }
  static async getEducationlist({ education_id }) {
    const educations = await Education.findByUserId({ education_id });
    return educations;
  }
  static async setEducation({ education_id, toUpdate }) {
    let education = await education.findById({ education_id })

    if (!education) {
      const errorMessage = "해당 id를 가진 프로젝트는 없습니다. 다시 한 번 확인해주세요.";
      return { errorMessage }
    }

    if (toUpdate.school) {
      const fieldToUpdate = "school";
      const newValue = toUpdate.school;
      education = await Project.update({ education_id, fieldToUpdate, newValue });
    }
    if (toUpdate.major) {
      const fieldToUpdate = "major";
      const newValue = toUpdate.major;
      education = await Project.update({ education_id, fieldToUpdate, newValue });
    }
    if (toUpdate.school) {
      const fieldToUpdate = "school";
      const newValue = toUpdate.school;
      education = await Project.update({ education_id, fieldToUpdate, newValue });
    }
    return project;
  }

}

export { EducationService }