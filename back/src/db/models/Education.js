import { EducationModel } from "../schemas/education";

class Education {
   // 입력 받은 education 정보를 생성 
  static async create({ newEducation }) {
    const createdNewEducation = await EducationModel.create(newEducation);
    return createdNewEducation;
  }

  static async findBySchool({ school }) {
    // 입력 받은 school을 기준으로 db에서 검색하여 추출
    const findNewEducation = await EducationModel.findOne({school})
    return findNewEducation
  }

  static async findByMajor ({major}) {
    // 입력 받은 major를 기준으로 db에서 검색하여 추출
    const findNewEducation = await EducationModel.findOne({major})
    return findNewEducation
  }

  static async findByStatus ({position}) {
    // 입력 받은 position을 기준으로 db에서 검색하여 추출
    const findNewEducation = await EducationModel.findOne({position})
    return findNewEducation
  }
  static async findById({ education_id }) {
    const education = await EducationModel.findOne({ id: education_id });
    return education;
  }
  static async findByUserId({ education_id }) {
    const educations = await EducationModel.find({ id: education_id });
    return educations;
  }
  static async update({ education_id, fieldToUpdate, newValue }) {
    const filter = { id: education_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedEducation = await EducationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedEducation;
  }

}

export { Education };
