import sweetAlert from "../utils/sweetAlert";
import { instance } from "../axios/axios";

export const userLogin = async (user) => {
  try {
    const data = await instance.post("/api/user/login", user);
    if (data.data.statusCode === 200) {
      sweetAlert(1000, "success", "로그인 성공");
    }
    return data;
  } catch (error) {
    sweetAlert(1000, "error", "로그인 실패");
  }
};

export const userSignup = async (user) => {
  try {
    const data = await instance.post("/api/user/signup", user);
    sweetAlert(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", "회원가입 실패");
  }
};

export const userLogout = async (post) => {
  try {
    const data = await instance.post("/api/user/logout", post);
    sweetAlert(1000, "success", "로그아웃 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", "로그아웃 실패");
  }
};

export const userIdCheck = async (post) => {
  try {
    const data = await instance.post("/api/user/username", post);
    sweetAlert(1000, "success", "아이디 중복 확인 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", "로그아웃 실패");
  }
};

export const userPasswordCheck = async (post) => {
  try {
    const data = await instance.post("/api/user/nickname", post);
    sweetAlert(1000, "success", "닉네임 중복 확인 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", "로그아웃 실패");
  }
};

export const postSignout = async (post) => {
  try {
    const data = await instance.put("/api/withdrawal", post);
    sweetAlert(1000, "success", "회원탈퇴 성공");
    return data;
  } catch (error) {
    sweetAlert(1000, "error", "로그아웃 실패");
  }
};
