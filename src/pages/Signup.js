import React from "react";
import { useState, useRef } from "react";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

import Login from "./Login";

import styled from "styled-components";
import { Button, Div, Image, Input, Text } from "../components/ui";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [userId, setId] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  //모달
  const [modal, setModal] = React.useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const outModal = useRef();
  // const isModal = props.setModal;
  // const closeModal = (e) => {
  //   if (modal && outModal.current === e.target) {
  //     isModal(false);
  //   }
  // };

  // 아이디(이메일) 조건
  const isId = (email) => {
    let pattern =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-zA]([-_.0-9a-zA-Z])*.([a-zA-Z])/;
    return pattern.test(email); // 맞으면 true, 틀리면 false반환
  };

  // 비밀번호 조건
  const isPwd = (pwd) => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pattern.test(pwd); // 맞으면 true, 틀리면 false반환
  };

  const signup = () => {
    //입력값 빠짐
    if (
      userId === "" ||
      userName === "" ||
      password === "" ||
      passwordCheck === ""
    ) {
      window.alert("빈칸을 입력해주세요.");
      return;
    }

    //이메일형식 확인
    if (!isId(userId)) {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }

    //비밀번호형식 확인
    if (!isPwd(password)) {
      window.alert(
        "비밀번호는 최소 8자, 하나 이상의 문자와 숫자로 입력해주세요."
      );
      return;
    }

    //비밀번호 확인
    if (password !== passwordCheck) {
      window.alert("비밀번호가 다릅니다.");
      return;
    }

    dispatch(userActions.signupDB(userId, userName, password, passwordCheck));
  };

  //카카오
  //카카오
  const REST_API_KEY = "ebb64769e9ae562700e77df6554c840d";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <React.Fragment>
      <Div modalContainer>
        <Div modalBox>
          <Div
            width="500px"
            height="680px"
            margin="70px auto"
            padding="32px 0px"
            textCenter
          >
            <Image
              src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
              alt="kakao"
              width="100%"
              height="490px"
              size="cover"
              position="center"
            />
          </Div>
          <Div
            width="350px"
            height="700px"
            margin="20px auto"
            padding="32px 0px"
            textCenter
          >
            <Div
              center
              height="510px"
              margin="12px 0px"
              border="1px solid lightgrey"
            >
              <Div height="100px">
                <Text
                  font="FiraMono"
                  size="2rem"
                  lineHeight="55px"
                  margin="5px 0px 15px 0px"
                  bold
                >
                  Velog Signup
                </Text>
                <Text width="270px" size="1.2rem">
                  개발자를 위한 블로그 서비스에 가입해보세요.
                </Text>
              </Div>
              <Div height="360px">
                <Div row margin="5px 0px 15px 0px">
                  <Div
                    row
                    width="300px"
                    height="35px"
                    margin="20px 0px 10px 0px"
                    borderRadius="5px"
                    backgroundColor="#63e6be"
                  >
                    <Div inline width="20px">
                      <Image
                        src="https://w.namu.la/s/059f8bf3e629d3f2e343fe3f3f10809022d58800962db675d233429660bf98d9ceccd60e23b1324d090c87485833b10c2c4503c93a230003ba67d5fcafa527930174f8daf70b9e9cb534ed3c2d096f775663373e7e848fad3f0e0445cf2a9e7e"
                        alt="kakao"
                        width="20px"
                        height="20px"
                      />
                    </Div>
                    <Button
                      width="170px"
                      backgroundColor="#63e6be"
                      // _onClick={kakaoLogin}
                    >
                      <a href={KAKAO_AUTH_URL}>KakaoTalk으로 로그인</a>
                    </Button>
                  </Div>
                </Div>
                <Line />
                <Input
                  repeat
                  type="text"
                  placeholder="아이디"
                  _onChange={(e) => {
                    setId(e.target.value);
                  }}
                />
                <Input
                  repeat
                  type="text"
                  placeholder="사용자 이름"
                  _onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <Input
                  repeat
                  type="password"
                  placeholder="비밀번호"
                  _onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Input
                  repeat
                  type="password"
                  placeholder="비밀번호 확인"
                  _onChange={(e) => {
                    setPasswordCheck(e.target.value);
                  }}
                />
                <Button
                  width="300px"
                  lineHeight="35px"
                  margin="12px"
                  backgroundColor="#63e6be"
                  _onClick={signup}
                >
                  가입
                </Button>
              </Div>
            </Div>
            <Div border="1px solid lightgrey" margin="12px 0px">
              <Text display="inline-block" size="0.9em">
                계정이 있으신가요?
              </Text>
              <Button
                width="50px"
                height="40px"
                lineHeight="40px"
                margin="10px 5px"
                bold
                size="0.9em"
                color="#20c997"
                _onClick={(e) => {
                  setModal(true);
                }}
              >
                로그인
              </Button>
              {modal ? <Login /> : null}
            </Div>
          </Div>
        </Div>
      </Div>
      )
    </React.Fragment>
  );
};

export default Signup;

const Line = styled.hr`
  margin: 10px 25px 15px 25px;
  border: 1px dotted lightgrey;
`;
