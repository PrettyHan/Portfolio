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
}

export { AwardService }