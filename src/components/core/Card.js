import React from "react";
import DetailUser from "./DetailUser";
import { history } from "../../redux/configureStore";

import { Button, Div, Image, Input, Text } from "../ui";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { ImBookmark } from "react-icons/im";
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
    <Div width="100%" height="100%" backgroundColor="#ffffff">
      <Div
        width="768px"
        height="444px"
        margin="88px auto 0px auto"
        fontSize="16px"
      >
        <Text
          size="40px"
          bold
          decoration="none solid rgb(33,37,41)"
          backgroundColor="#ffffff"
          width="768px"
          height="auto"
          lineHeight="72px"
          margin="0px 0px 32px 0px"
        >
          여기에 제목이 들어갑니다.
        </Text>
        <Div
          display="flex"
          width="768px"
          height="21px"
          backgroundColor="#ffffff"
        >
          <Text
            display="inline-block"
            padding="0px 10px 0px 0px"
            weight="700"
            decoration="none solid rgb(73, 80, 87)"
            cursor="pointer"
            colorHover="#495057"
            decorationHover="underline"
            size="16px"
          >
            닉네임
          </Text>
          <Text
            display="inline-block"
            weight="1000px"
            decoration="none solid rgb(73, 80, 87)"
            size="16px"
          >
            3일 전
          </Text>
          <Div float="right">
            <Button
              width="32px"
              height="21px"
              margin="0px 0px 0px 0.5rem "
              size="16px"
              color="#868e96"
              colorHover="#212529"
              _onClick={() => {}}
            >
              통계
            </Button>
            <Button
              width="32px"
              height="21px"
              margin="0px 0px 0px 0.5rem "
              size="16px"
              color="#868e96"
              colorHover="#212529"
              _onClick={() => {
                history.push("/write/:id");
              }}
            >
              수정
            </Button>
            <Button
              width="32px"
              height="21px"
              margin="0px 0px 0px 0.5rem "
              size="16px"
              color="#868e96"
              colorHover="#212529"
              _onClick={() => {}}
            >
              삭제
            </Button>
          </Div>
        </Div>
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
        <Div
          position="relative"
          width="768px"
          height="168px"
          margin="32px 0px 0px 0px"
          padding="32px 24px"
          borderRadius="8px"
          shadow="rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;"
          transition="all 0s ease 0s"
          backgroundColor="#f8f9fa"
        >
          <Div
            width="720px"
            height="32px"
            margin="0px 0px 20px 0px"
            padding="0px 32px 0px 0px"
            backgroundColor="#f8f9fa"
            color="#495057"
          >
            <Text
              size="24px"
              weight="700"
              cursor="pointer"
              colorHover=" #868e96"
              decorationHover="underline solid rgb(134, 142, 150);"
            >
              항해99 클론코딩 8조
            </Text>
          </Div>
          <Div bookMark>
            <ImBookmark fill="#12b886" font-size="45px" />
          </Div>
          <Div
            spaceBetween
            width="720px"
            height="24px"
            margin="48px 0px 0px 0px"
            backgroundColor="#f8f9fa"
            color="#212529"
          >
            <Div cursor="pointer">
              <GoTriangleDown />
              <Text display="inline-block" margin="0px 0px 0px 4px" size="16px">
                목록 보기
              </Text>
            </Div>
            <Div spaceBetween width="80px" height="24px" fontSize="14px">
              1/3
              <Button
                width="24px"
                height="24px"
                radius="50%"
                backgroundColor="#f8f9fa"
                BG="#12b886"
              >
                <IoIosArrowDropleft font-size="25px" fill="#12b886" />
              </Button>
              <Button
                width="24px"
                height="24px"
                radius="50%"
                backgroundColor="#f8f9fa"
                BG="#12b886"
              >
                <IoIosArrowDropright font-size="25px" fill="#12b886" />
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div
        width="768px"
        height="auto"
        margin="18px auto"
        padding="36px 0px 0px 0px"
        backgroundColor="#ffffff"
      >
        <Div width="768px" height="376px" padding="0px 51px">
          <Image
            display="block"
            width="667px"
            height="376px"
            maxWidth="100%"
            src="https://assets.entrepreneur.com/content/3x2/2000/20160628101609-Coding.jpeg"
            size="cover"
            position="center"
          />
        </Div>
        <Text
          size="18px"
          lineHeight="30.6px"
          margin="50px 0px"
          decoration="none solid rgb(33, 37, 41)"
          letterSpacing="-0.072px"
          wordWrap="break-word"
          color="#212529"
          transition="all 0s ease 0s"
        >
          어제 나는 코딩을 했다. 지금도 코딩을 하고있다. 내일도 코딩을 하고
          있겠지..?
        </Text>
      </Div>
      <DetailUser />
    </Div>
  );
};

export default Card;
