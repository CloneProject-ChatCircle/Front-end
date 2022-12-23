import Lottie from "lottie-react";
import { loginside_image } from "../assets";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ".././css/login.css";
import { useInputs } from "../core/hooks/useInputs";

const LoginBtn = styled.button`
  background-color: rgb(251, 245, 245);
  border: none;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  font-size: 24px;
  :hover {
    background-color: rgb(242, 246, 247);
  }
`;

const CheckDupliBtn = styled.button`
  background-color: rgb(232, 232, 232);
  border-radius: 10px;
  border: none;
  width: 100px;
  height: 30px;
  font-size: 18px;
  :hover {
    background-color: rgb(214, 238, 244);
  }
`;

const BG = styled.div`
  background-color: rgb(214, 238, 244);
  width: 80%;
  top: 0;
  position: absolute;
  height: 700px;
  z-index: -9999;
`;

const LoginImage = styled.div`
  width: 950px;
  height: 700px;
  background-color: rgb(214, 238, 244); ;
`;

const FormInner = styled.form`
  margin-top: 50px;
  margin-left: 60px;
  width: 400px;
  font-size: 22px;

  p {
    margin-top: 15px;
  }
  input {
    margin-top: 10px;
    width: 350px;
    height: 40px;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 22px;
  }
  .login_btn {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    .login_signup_btn {
      cursor: pointer;
      width: 250px;
      background-color: white;
      font-size: 20px;
      height: 20px;
      margin-top: 40px;
      :hover {
        text-decoration: underline;
      }
    }
  }
  .signup_btn {
    margin-left: 15px;
    margin-top: 50px;
    .goback_btn {
      margin-left: 30px;
    }
  }
`;

const Inner = styled.section`
  width: 1200px;
  background-color: white;
  margin: auto;
  display: flex;
  .loginside_image {
    height: 700px;
  }
  .form_wrapper {
    position: relative;
    margin: auto;
    .form_title {
      margin-left: 60px;
      font-size: 42px;
    }
  }
`;

const Login = () => {
  const [isSingup, setIsSingup] = useState(false);
  const [inputs, onChangeInput, clearInput, setInputs] = useInputs();

  const { userId, password, passwordCheck, nickName } = inputs;

  useEffect(() => {
    clearInput();
  }, []);

  const onSubmitUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName: userId,
      nickName: nickName,
      password: password,
    };
    console.log(newUser);
  };

  const is_username = (asValue) => {
    const regExp = /^[a-zA-Z0-9]{4,12}$/;
    //   닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.
    return regExp.test(asValue);
  };

  const is_password = (asValue) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;

    //   비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자(0-9), 특수문자로 구성됩니다."

    return regExp.test(asValue);
  };

  const onClickInformBtn = (e) => {
    e.preventDefault();
    if (
      isSingup &&
      !window.confirm("가입정보가 사라질 수 있습니다. 정말 돌아가시겠습니까?")
    )
      return;
    setIsSingup(!isSingup);
  };
  return (
    <>
      <Inner className="inner">
        <LoginImage className="login_image">
          <Lottie animationData={loginside_image} className="loginside_image" />
        </LoginImage>
        <div className="form_wrapper">
          <p className="form_title">{isSingup ? "회원가입" : "로그인"}</p>
          {isSingup ? (
            <FormInner onSubmit={onSubmitUser}>
              <p>아이디</p>
              <input
                type="text"
                placeholder="아이디를 입력해주세요"
                name="userId"
                value={userId || ""}
                onChange={onChangeInput}
              />
              <CheckDupliBtn>중복확인</CheckDupliBtn>
              <p>비밀번호</p>
              <input
                type="password"
                placeholder="8~20자,알파벳 대소문자,숫자,특수문자"
                name="password"
                value={password || ""}
                onChange={onChangeInput}
              />
              <p>비밀번호 확인</p>
              <input
                type="password"
                placeholder="비밀번호를 한번더 입력해주세요"
                name="passwordCheck"
                value={passwordCheck || ""}
                onChange={onChangeInput}
              />
              <p>닉네임</p>
              <input
                type="text"
                placeholder="4~12자,알파벳 대소문자,숫자"
                name="nickName"
                value={nickName || ""}
                onChange={onChangeInput}
              />
              <CheckDupliBtn>중복확인</CheckDupliBtn>
              <div className="signup_btn">
                <LoginBtn>회원가입 하기</LoginBtn>
                <LoginBtn onClick={onClickInformBtn} className="goback_btn">
                  이전으로
                </LoginBtn>
              </div>
            </FormInner>
          ) : (
            <FormInner className="form_inner">
              <p className="login_id_label">아이디</p>
              <input type="text" />
              <p>비밀번호</p>
              <input type="password" />
              <div className="login_btn">
                <LoginBtn>로그인하기</LoginBtn>
                <LoginBtn
                  onClick={onClickInformBtn}
                  className="login_signup_btn"
                >
                  회원가입이 필요하신가요?
                </LoginBtn>
              </div>
            </FormInner>
          )}
        </div>
      </Inner>
      <BG />
    </>
  );
};

export default Login;
