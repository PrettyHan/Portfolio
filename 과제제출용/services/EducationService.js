import { Education } from "../db"
import { v4 as uuidv4 } from "uuid";

class EducationService {
    static async addEducation({ education_id, school, major, position }) {
      const id = uuidv4();
      const newEducation = { id, education_id,school, major, position };
  
      // db에 저장
      const createdNewUser = await Education.create({ newEducation });
      createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.
  
      return createdNewUser;
    }
    static async getEducation({education_id}) {

      const education = await Education.findById({education_id})
      if(!education) {
          const errorMessage = "해당 id를 가진 데이터는 없습니다"
          return {errorMessage}
      }
      return education
    }
}    

export {EducationService}