import React from "react";

import { Div } from "../components/ui";

const Login = (props) => {
  return (
    <Div
      width="350px"
      height="700px"
      margin="70px auto"
      padding="32px 0px"
      textCenter
    >
      <Div center height="510px" margin="12px 0px" border="1px solid lightgrey">
        <Div height="100px">
          <h1
            style={{
              fontSize: "2rem",
              lineHeigt: "55px",
              margin: "15px 0px",
            }}
          >
            Velog Login
          </h1>
          <h2
            style={{
              width: "270px",
              fontSize: "1.2rem",
            }}
          >
            개발자를 위한 블로그 서비스에 가입해보세요.
          </h2>
        </Div>
        <Div height="360px">
          <Div row margin="0px 0px 15px 0px">
            <Div
              row
              width="300px"
              height="35px"
              margin="20px 0px 10px 0px"
              borderRadius="5px"
              backgroundColor="#96f2d7"
            >
              <Div inline width="20px" margin="0px 5px">
                <img
                  src="https://w.namu.la/s/059f8bf3e629d3f2e343fe3f3f10809022d58800962db675d233429660bf98d9ceccd60e23b1324d090c87485833b10c2c4503c93a230003ba67d5fcafa527930174f8daf70b9e9cb534ed3c2d096f775663373e7e848fad3f0e0445cf2a9e7e"
                  alt="kakao"
                  width="20px"
                  height="20px"
                />
              </Div>
              <button
                style={{
                  width: "150px",
                  backgroundColor: "#96f2d7",
                }}
              >
                KakaoTalk으로 로그인
              </button>
            </Div>
          </Div>
          <hr style={{ margin: "10px 25px", border: "1px dotted lightgrey" }} />
          <input
            type="text"
            style={{
              width: "300px",
              height: "40px",
              lineHeight: "40px",
              margin: "10px 0px 5px 0px",
              border: "1px solid lightgrey",
            }}
            placeholder="아이디"
          />
          <input
            type="text"
            style={{
              width: "300px",
              height: "40px",
              lineHeight: "40px",
              margin: "5px 0px 5px 0px",
              border: "1px solid lightgrey",
            }}
            placeholder="사용자 이름"
          />
          <input
            type="text"
            style={{
              width: "300px",
              height: "40px",
              lineHeight: "40px",
              margin: "5px 0px 5px 0px",
              border: "1px solid lightgrey",
            }}
            placeholder="비밀번호"
          />
          <input
            type="text"
            style={{
              width: "300px",
              height: "40px",
              lineHeight: "40px",
              margin: "5px 0px",
              border: "1px solid lightgrey",
            }}
            placeholder="비밀번호 확인"
          />
          <button
            style={{
              width: "300px",
              lineHeight: "35px",
              margin: "12px",
              backgroundColor: "#96f2d7",
            }}
          >
            가입
          </button>
        </Div>
      </Div>
      <Div border="1px solid lightgrey" margin="12px 0px">
        <p style={{ display: "inline-block", fontSize: "0.9em" }}>
          계정이 있으신가요?
        </p>
        <button
          style={{
            width: "50px",
            height: "40px",
            lineHeight: "40px",
            margin: "10px 5px",
            fontWeight: "bold",
            fontSize: "0.9em",
            backgroundColor: "white",
            color: "#39b7ab",
          }}
        >
          로그인
        </button>
      </Div>
    </Div>
  );
};

export default Login;
