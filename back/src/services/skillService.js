import { Skill } from "../db"
import { v4 as uuidv4 } from "uuid";
// educatuinRouter에 사용 할 Service 함수 등록
class SkillService {
  // Post("/skill/create") / 함수 
  static async addSkill({ userId, career, language }) {
    const id = uuidv4();
    const languageList = Object.values(language)
    const newSkill = { id, userId, career, languageList };

    // db에 저장
    const createdNewSkill = await Skill.create({ newSkill });
    createdNewSkill.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.

    return createdNewSkill;
  }
  // Get ("/getSkill/:userId") / 함수 
  static async getSkill({ skillId }) {

    const skill = await Skill.findById({ skillId })
    if (!skill) {
      const errorMessage = "해당 id를 가진 데이터는 없습니다"
      return { errorMessage }
    }
    return skill
  }
  // Get ("/getSkilllist/:userId") / 함수
  static async getSkilllist({ userId }) {
    const skills = await Skill.findByUserId({ userId });
    return skills;
  }

  static async getSkillListByCareer({career}) {
    const skills = await Skill.findByCareer({career});
    return skills;
  }

  // Put ("/skills/:skillId") / 함수
  static async setSkill({ skillId, toUpdate }) {
    let skill = await Skill.findById({ skillId })

    if (!skill) {
      const errorMessage = "해당 id를 가진 데이터는 없습니다. 다시 한 번 확인해주세요.";
      return { errorMessage }
    }

    if (toUpdate.career) {
      const fieldToUpdate = "career";
      const newValue = toUpdate.career;
      skill = await Skill.update({ skillId, fieldToUpdate, newValue });
    }
    if (toUpdate.language) {
      const fieldToUpdate = "language";
      const newValue = toUpdate.language;
      skill = await Skill.update({ skillId, fieldToUpdate, newValue });
    }
    return skill;
  }
  static async deleteSkill({ userId }) {
    const isDataDeleted = await Skill.deleteById({ userId });

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!isDataDeleted) {
      const errorMessage =
        "해당 userId를 가진 데이터는 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    return { status: "ok" };
  }
}


export { SkillService }