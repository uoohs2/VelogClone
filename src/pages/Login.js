import React from "react";

import { Div } from "../components/ui";

const Signup = (props) => {
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
          <h1
            style={{
              fontSize: "2rem",
            }}
          >
            Velog Signup
          </h1>
        </Div>
        <Div height="300px">
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
            로그인
          </button>
          <hr style={{ margin: "10px 25px", border: "1px dotted lightgrey" }} />
          <Div row margin="15px 0px">
            <img
              src="https://w.namu.la/s/059f8bf3e629d3f2e343fe3f3f10809022d58800962db675d233429660bf98d9ceccd60e23b1324d090c87485833b10c2c4503c93a230003ba67d5fcafa527930174f8daf70b9e9cb534ed3c2d096f775663373e7e848fad3f0e0445cf2a9e7e"
              alt="kakao"
              width="20px"
              height="20px"
            />
            <p style={{ margin: "20px 10px", fontSize: "0.9em" }}>
              KakaoTalk으로 로그인
            </p>
          </Div>
        </Div>
      </Div>
      <Div border="1px solid lightgrey" margin="12px 0px">
        <p style={{ display: "inline-block", fontSize: "0.9em" }}>
          계정이 없으신가요?
        </p>
        <button
          style={{
            width: "70px",
            height: "40px",
            lineHeight: "40px",
            margin: "10px 5px",
            fontWeight: "bold",
            fontSize: "0.9em",
            backgroundColor: "white",
            color: "#39b7ab",
          }}
        >
          가입하기
        </button>
      </Div>
    </Div>
  );
};

export default Signup;
