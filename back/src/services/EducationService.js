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
}    

export {EducationService}