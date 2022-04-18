import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CommentList from "./CommentList";

const DetailUser = (props) => {
  console.log(props);
  return (
    <>
      <LowerUserInfo>
        <User>
          <div>
            <ImageCircle
              shape="circle"
              src="https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202010/26/NEWS1/20201026063015355wgfm.jpg"
            />
          </div>
          <UserName>{props.data.userName}</UserName>
        </User>
        <hr className="line" />
        <ThreeIcons>
          <GitHubIcon sx={{ fontSize: 35 }} />
          <div className="icons">
            <HomeIcon sx={{ fontSize: 35 }} />
          </div>
          <EmailOutlinedIcon sx={{ fontSize: 35 }} />
        </ThreeIcons>
      </LowerUserInfo>
      <CommentList data={props}/>
    </>
  );
};

export default DetailUser;

const LowerUserInfo = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 221px;
  width: 768px;
  display: block;

  margin: 0px auto;
  .line {
    color: 1px solid gray;
    margin: 30px auto;
  }
`;
const User = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 128px;
  width: 100%;
  display: flex;
  margin-top: 150px;
`;
const ImageCircle = styled.div`
  min-width: 128px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  margin: 3px 15px 3px 3px;
  background-color: black;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  margin: auto 0px;
  color: #212529;
  height: auto;
  width: auto;
  display: inline;
  cursor: pointer;
`;

const ThreeIcons = styled.div`
  background-color: #ffffff;
  color: #868e96;
  height: 36px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  .icons {
    width: 35px;
    height: 36px;
    margin: 0px 10px 0px 10px;
  }
`;

const LowerBox = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 100%;
  width: 768px;
  margin: 0px auto;
  display: block;
  border: 1px solid blue;
  margin-top: 100px;
`;
