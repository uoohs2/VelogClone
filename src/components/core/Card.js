import React from "react";
import styled from "styled-components";
import { Button, Div, Image, Input, Text } from "../ui";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { ImBookmark } from "react-icons/im";
import DetailUser from "./DetailUser";
import { useSelector } from "react-redux";

const Card = (props) => {
  console.log(props.data);
  const postInfo = props.data;

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);

    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }

    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }

    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  return (
    <Main>
      <UpperBox>
        <Text
          size="40px"
          bold
          decoration="none solid rgb(33,37,41)"
          backgroundColor="#ffffff"
          width="768px"
          height="72px"
        >
          {postInfo.title}
        </Text>
        <PostInfo>
          <UserId>{postInfo.userName}</UserId>
          <PostDate>{timeForToday(postInfo.date)}</PostDate>
        </PostInfo>
        <Div
          width="768px"
          height="46px"
          margin="14px 0px -14px 0px"
          backgroundColor="#ffffff"
        >
          <Button tagBtn>네이버웹툰</Button>
          <Button tagBtn> 신입개발자</Button>
          <Button tagBtn> 회고</Button>
        </Div>
        <SubTitle>
          <SubInfo>
            <div className="info">{postInfo.content}</div>
            <div class="bookmark">
              <ImBookmark />
            </div>
          </SubInfo>

          <MenuBox>
            <Menu>
              <GoTriangleDown />
              목록보기
            </Menu>
            <Arrow>
              1/3
              <IoIosArrowDropleft size="20" color="#12B886" />
              <IoIosArrowDropright size="20" color="" />
            </Arrow>
          </MenuBox>
        </SubTitle>
        <PostImage src={postInfo.image}/>
      </UpperBox>
      <MiddleBox>
        {postInfo.content}
      </MiddleBox>
      <DetailUser data={props.data} />
    </Main>
  );
};

export default Card;

const Main = styled.div`
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  width: 100%;
  height: 100%;
  display: block;
  background-color: #ffffff;
`;

const PostInfo = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(73, 80, 87);
  word-spacing: 0px;
  height: 21px;
  width: 768px;
  background-color: #ffffff;
  display: flex;
`;
const UserId = styled.div`
  font-size: 16px;
  font-weight: 1000;
  text-decoration: none solid rgb(73, 80, 87);
  word-spacing: 0px;
  background-color: #ffffff;
  height: auto;
  width: auto;
  display: inline;
  cursor: pointer;
  padding-right: 10px;
`;
const PostDate = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(73, 80, 87);
  word-spacing: 0px;
  background-color: #ffffff;
  height: auto;
  width: auto;
  display: inline;
`;
const SubTitle = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #f8f9fa;
  color: #212529;
  height: 168px;
  width: 768px;
  margin: 32px 0 0 0;
  padding: 32px 24px 32px 24px;
  position: relative;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: block;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
const SubInfo = styled.div`
  font-size: 24px;
  font-weight: 700;
  word-spacing: 0px;
  color: #495057;
  background-color: #f8f9fa;
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    color: #868e96;
    text-decoration: underline solid rgb(134, 142, 150);
  }
  .bookmark {
    color: #12b886;
    font-size: 45px;
    margin-top: -32px;
  }
`;
const MenuBox = styled.div`
  background-color: #f8f9fa;
  color: #212529;
  height: 24px;
  width: 720px;
  margin: 48px 0 0 0;
  display: flex;
  justify-content: space-between;
`;
const Menu = styled.div`
  font-size: 16px;
  line-height: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #f8f9fa;
  background-position: 0% 0%;
  color: #212529;
  height: 24px;
  width: 97.625px;
  margin: 0 0 0 -5px;
  min-height: auto;
  min-width: auto;
  display: flex;
  cursor: pointer;
`;
const Arrow = styled.div`
  background-color: #f8f9fa;
  background-position: 0% 0%;
  color: #212529;
  height: 24px;
  width: 92.9844px;
  min-height: auto;
  min-width: auto;
  display: flex;
  justify-content: space-between;
`;
const PostImage = styled.div`
  height: 414px;
  width: 768px;
  margin: 32px 0 0 0;
  max-height: 1742px;
  max-width: 100%;
  display: block;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

const UpperBox = styled.div`
  height: 889px;
  width: 768px;
  margin: 88px 148px 0 148px;
  display: block;
  font-size: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  margin: 0px auto;
`;

const MiddleBox = styled.div`
  font-size: 18px;
  letter-spacing: -0.072px;
  line-height: 30.6px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  height: 100%;
  width: 768px;
  display: block;
  color: #212529;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  word-wrap: break-word;
  margin: 0px auto;
`;
