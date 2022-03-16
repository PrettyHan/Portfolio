class userAuthService {
    static async addEducation({ school, major, user_status }) {

      const newEducation = { school, major, user_status };
  
      // db에 저장
      const createdNewUser = await User.create({ newEducation });
      createdNewUser.errorMessage = null; // 문제 없이 db 저장 완료되었으므로 에러가 없음.
  
      return createdNewUser;
    }
}    