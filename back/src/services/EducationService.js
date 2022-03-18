import { Education } from "../db"
import { v4 as uuidv4 } from "uuid";
// educatuinRouter에 사용 할 Service 함수 등록
class EducationService {
  // Post("/education/register") / 함수 
  static async addEducation({ userId, school, major, position }) {
    const id = uuidv4();
    const newEducation = { id, userId, school, major, position };

    // db에 저장
    const createdNewUser = await Education.create({ newEducation });
    createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewUser;
  }
  // Get ("/education/:userId") / 함수 
  static async getEducation({ userId }) {
    
    const education = await Education.findById({ userId })
    if (!education) {
      const errorMessage = "해당 id를 가진 데이터는 없습니다"
      return { errorMessage }
    }
    return education
  }
  // Get ("/educationlist/:userId") / 함수
  static async getEducationlist({ userId }) {
    const educations = await Education.findByUserId({ userId });
    return educations;
  }
  // Put ("/educations/:userId") / 함수
  static async setEducation({ userId, toUpdate }) {
    let education = await Education.findById({ userId })

    if (!education) {
      const errorMessage = "해당 id를 가진 프로젝트는 없습니다. 다시 한 번 확인해주세요.";
      return { errorMessage }
    }

    if (toUpdate.school) {
      const fieldToUpdate = "school";
      const newValue = toUpdate.school;
      education = await Education.update({ userId, fieldToUpdate, newValue });
    }
    if (toUpdate.major) {
      const fieldToUpdate = "major";
      const newValue = toUpdate.major;
      education = await Education.update({ userId, fieldToUpdate, newValue });
    }
    if (toUpdate.position) {
      const fieldToUpdate = "position";
      const newValue = toUpdate.position;
      education = await Education.update({ userId, fieldToUpdate, newValue });
    }
    return education;
  }

}

export { EducationService }