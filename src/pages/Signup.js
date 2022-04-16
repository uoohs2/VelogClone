import React from "react";

import { Div } from "../components/ui";

const Login = (props) => {
  return (
    <Div
      width="350px"
      height="700px"
      margin="70px auto"
      textCenter
      border="1px solid lightgrey"
    >
      <Div center height="550px" border="1px solid red">
        <Div height="100px" border="1px solid lightgrey">
          <h1
            style={{
              fontSize: "2rem",
              lineHeigt: "55px",
              margin: "10px 0px",
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
        <Div height="350px" border="1px solid black">
          <hr style={{ margin: "10px 25px", border: "1px dotted lightgrey" }} />

          <Div row margin="0px 0px 15px 0px" border="1px solid lightgrey">
            <button
              style={{
                width: "300px",
                lineHeight: "35px",
                margin: "12px",
                backgroundColor: "#96f2d7",
              }}
            >
              KakaoTalk으로 로그인
            </button>
          </Div>
          <input
            type="text"
            style={{
              width: "300px",
              height: "40px",
              lineHeight: "40px",
              margin: "15px 0px 5px 0px",
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
            placeholder="아이디"
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
            placeholder="비밀번호"
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
