import { Award } from "../db";
import { v4 as uuidv4 } from "uuid";

class AwardService {
  static async addAward({ userId, title, description }) {
    // id로 유니크 값 사용
    const id = uuidv4();

    // db에 저장
    const newAward = { id, userId, title, description };
    const createdNewAward = await Award.create({ newAward });

    return createdNewAward;
}

  static async getAward({ awardId }) {
    // 해당 id를 가진 데이터가 db에 존재 여부 확인
    const award = await Award.findById({ awardId });
    if (!award){
        const errorMessage = "해당 id를 가진 수상 이력은 없습니다. 다시 한 번 확인해주세요.";
        return { errorMessage }
    }
    return award
  }

  static async getAwardList({ userId }) {
      const awards = await Award.findByUserId({ userId });
      return awards;
  }

  static async setAward({ awardId, toUpdate }) {
    let award = await Award.findById({ awardId })

    if (!award) {
        const errorMessage = "해당 id를 가진 수상 이력은 없습니다. 다시 한 번 확인해주세요.";
        return { errorMessage }
    }

    if(toUpdate.title){
        const fieldToUpdate = "title";
        const newValue = toUpdate.title;
        award = await Award.update({ awardId, fieldToUpdate, newValue });
    }
    if(toUpdate.description){
        const fieldToUpdate = "description";
        const newValue = toUpdate.description;
        award = await Award.update({ awardId, fieldToUpdate, newValue });
    }
    return award;
  }

}

export { AwardService }