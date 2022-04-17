import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

import styled from "styled-components";
import { Button, Div, Image, Input, Text } from "../components/ui";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  //이메일형식 확인
  const isId = (email) => {
    let pattern =
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-zA]([-_.0-9a-zA-Z])*.([a-zA-Z])/;
    return pattern.test(email); // 맞으면 true, 틀리면 false반환
  };

  //로그인함수
  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("빈칸을 입력해주세요.");
      return;
    }

    if (!isId(id)) {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }

    dispatch(userActions.loginDB(id, pwd));
  };
  return (
    <Div
      width="350px"
      height="680px"
      margin="70px auto"
      padding="32px 0px"
      textCenter
    >
      <Div
        center
        height="400px"
        margin="12px 0px"
        padding="10px 0px"
        border="1px solid lightgrey"
      >
        <Div center height="100px">
          <Text size="2rem" bold>
            Velog Signup
          </Text>
        </Div>
        <Div height="300px">
          <Input
            type="text"
            width="300px"
            height="40px"
            lineHeight="40px"
            margin="15px 0px 5px 0px"
            placeholder="아이디"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Input
            type="password"
            width="300px"
            height="40px"
            lineHeight="40px"
            margin="5px 0px"
            placeholder="비밀번호"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <Button
            width="300px"
            lineHeight="35px"
            margin="12px"
            backgroundColor="#96f2d7"
            _onClick={login}
          >
            로그인
          </Button>
          <Line />
          <Div row margin="15px 0px">
            <Image
              src="https://w.namu.la/s/059f8bf3e629d3f2e343fe3f3f10809022d58800962db675d233429660bf98d9ceccd60e23b1324d090c87485833b10c2c4503c93a230003ba67d5fcafa527930174f8daf70b9e9cb534ed3c2d096f775663373e7e848fad3f0e0445cf2a9e7e"
              alt="kakao"
              width="20px"
              height="20px"
            />
            <Button margin="20px 10px" size="0.9em">
              KakaoTalk으로 로그인
            </Button>
          </Div>
        </Div>
      </Div>
      <Div border="1px solid lightgrey" margin="12px 0px">
        <Text display="inline-block" size="0.9em">
          계정이 없으신가요?
        </Text>
        <Button
          width="70px"
          height="40px"
          lineHeight="40px"
          margin="10px 5px"
          bold
          size="0.9em"
          color="#39b7ab"
          _onClick={() => {
            history.push("/signup");
          }}
        >
          가입하기
        </Button>
      </Div>
    </Div>
  );
};

export default Login;

const Line = styled.hr`
  margin: 10px 25px;
  border: 1px dotted lightgrey;
`;
