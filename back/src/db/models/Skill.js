import { SkillModel } from "../schemas/skill";

class Skill {
  // 입력 받은 education 정보를 생성 
  static async create({ newSkill }) {
    const createdNewSkill = await SkillModel.create(newSkill);
    return createdNewSkill;
  }
  static async findById({ skillId }) {
    // 입력 받은 userId를 기준으로 db에서 하나만 검색하여 추출
    const skill = await SkillModel.findOne({ id: skillId });
    return skill;
  }
  static async findByUserId({ userId }) {
    // 입력 받은 userId를 기준으로 db에서 해당하는 모든 데이터를 검색하여 추출
    const skills = await SkillModel.find({ userId });
    return skills;
  }
  static async findBySearch({career}) {
    // 입력 받은 carrer를 기준으로 db에서 검색하여 추출
    const skills = await SkillModel.find({ career });
    return skills;

  }

  // 입력 받은 userId를 기준으로 데이터를 찾고 업데이트
  static async update({ skillId, fieldToUpdate, newValue }) {
    // ServiceLayer에서 전달받은 인자들을 findOneAndUpdate 를 통해 리턴해줌.
    const filter = { id: skillId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedSkill = await SkillModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedSkill;
  }
  static async deleteById({ userId }) {
    const deleteResult = await SkillModel.deleteOne({ userId });
    const isDataDeleted = deleteResult.deletedCount === 1;
    return isDataDeleted;
  }


}

export { Skill };
