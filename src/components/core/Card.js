import React from "react";
import styled from "styled-components";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { ImBookmark } from "react-icons/im";

const Card = () => {
  return (
    <Main>
      <UpperBox>
        <Title>여기는 제목이 들어갑니다</Title>
        <PostInfo>
          <UserId>닉네임</UserId>
          <PostDate>3일 전</PostDate>
        </PostInfo>
        <Tags>
          <TagInfo>네이버웹툰</TagInfo>
          <TagInfo> 신입개발자</TagInfo>
          <TagInfo> 회고</TagInfo>
        </Tags>
        <SubTitle>
          <SubInfo>
            <div className="info">항해99 클론코딩 8조</div>

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
              <IoIosArrowDropright size="20" color="#12B886" />
            </Arrow>
          </MenuBox>
        </SubTitle>
        <PostImage />
      </UpperBox>
      <MiddleBox>내용이 들어갑니다</MiddleBox>
      <LowerBox>댓글이 들어갑니다</LowerBox>
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
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  height: 72px;
  width: 768px;
  display: block;
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
const Tags = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  height: 46px;
  width: 768px;
  margin: 14px 0 -14px 0;
  min-height: 14px;
  display: block;
`;
const TagInfo = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none solid rgb(18, 184, 134);
  word-spacing: 0px;
  background-color: #f8f9fa;
  color: #12b886;
  height: 32px;
  width: 112px;
  margin: 0 14px 14px 0;
  padding: 10px 16px 0 16px;
  display: inline-flex;
  justify-content: space-around;
  cursor: pointer;
  box-sizing: border-box;
  transform: none;
  transition: all 0s ease 0s;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
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
    color: #495057;
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
  background-image: url("https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg");
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
  border: 2px solid orange;
  margin: 0px auto;
`;
const LowerBox = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 100%;
  width: 768px;
  margin: 0px auto;
  display: block;
  border: 2px solid green;
`;

const NameTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const PosterBox = styled.div`
  display: flex;
  padding: 0px 16px;
  margin-bottom: 20px;
  align-items: flex-start;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #394481;
  color: #394481;
  margin: 0 1em;
  padding: 0.6em 0.8em;
  border-radius: 50px;
  font-size: medium;
  cursor: pointer;
  &:hover {
    border: 3px solid #394481;
  }
`;

const SmallBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  float: left;
`;

const SmallBox1 = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: left;
  align-items: flex-end;
  float: left;
`;
