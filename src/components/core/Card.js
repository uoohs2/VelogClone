import React from "react";
import { history } from "../../redux/configureStore";
import post from "../../redux/modules/post";
import { Button, Div, Image, Input, Text } from "../ui";

import moment from "moment";
import "moment/locale/ko";
import { GoTriangleDown } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { actionCreators as postActions } from "../../redux/modules/post";
import { ImBookmark } from "react-icons/im";

const Card = (props) => {
  const dispatch = useDispatch();
  const postInfo = props.data;
  const tag = postInfo.tagList;
  const postId = props.data.postId;
  const tagList = String(tag).split(",");
  
  const user_info = useSelector((state) => state.user.userInfo.userId);


  const checkLog = () => {
    if (user_info) {
      return user_info
    }
  };

  const delete_post = () => {
    dispatch(postActions.deletePostDB(postId));
  };

  return (
    <Div width="100%" height="100%" backgroundColor="#ffffff">
      <Div
        width="768px"
        height="444px"
        margin="88px auto 0px auto"
        font-size="16px"
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
          {postInfo.title}
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
            _onClick={(e) => {
              window.alert("Comming Soon!");
            }}
          >
            {postInfo.userName}
          </Text>
          <Text
            display="inline-block"
            weight="1000px"
            decoration="none solid rgb(73, 80, 87)"
            size="16px"
          >
            {moment(postInfo.date).fromNow()}
          </Text>
          <Div float="right">
            {/* <Button
              width="32px"
              height="21px"
              margin="0px 0px 0px 0.5rem "
              size="16px"
              color="#868e96"
              colorHover="#212529"
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              통계
            </Button> */}
            {props.data.userId == checkLog() ? (
                    <Button
                    width="32px"
                    height="21px"
                    margin="0px 0px 0px 0.5rem "
                    size="16px"
                    color="#868e96"
                    colorHover="#212529"
                    _onClick={() => {
                        history.push(`/Edit/${postInfo._id}`);
                      }}
                    >
                    수정
                    </Button>
                  ) : null}
      
          
            {props.data.userId == checkLog() ? (
                    <Button
                    width="32px"
                    height="21px"
                    margin="0px 0px 0px 0.5rem "
                    size="16px"
                    color="#868e96"
                    colorHover="#212529"
                    _onClick={() => {
                        delete_post(props.data._id);
                      }}
                    >
                    삭제
                    </Button>
                  ) : null}
          
          
          
          </Div>
        </Div>
        <Div
          width="768px"
          height="46px"
          margin="14px 0px -14px 0px"
          backgroundColor="#ffffff"
        >
          {tagList.map((tag, i) => (
            <Button
              key={tag + i}
              tagBtn
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              {tag}
            </Button>
          ))}
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
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              Series
            </Text>
          </Div>
          <Div bookMark>
            <ImBookmark fill="#12b886" fontSize="45px" />
          </Div>
          <Div
            spaceBetween
            width="720px"
            height="24px"
            margin="48px 0px 0px 0px"
            backgroundColor="#f8f9fa"
            color="#212529"
          >
            <Div
              cursor="pointer"
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              <GoTriangleDown />
              <Text display="inline-block" margin="0px 0px 0px 4px" size="16px">
                목록 보기
              </Text>
            </Div>
            <Div
              spaceBetween
              width="80px"
              height="24px"
              font-size="14px"
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              1/3
              <Button
                width="24px"
                height="24px"
                radius="50%"
                backgroundColor="#f8f9fa"
                BG="#12b886"
              >
                <IoIosArrowDropleft fontSize="25px" fill="#12b886" />
              </Button>
              <Button
                width="24px"
                height="24px"
                radius="50%"
                backgroundColor="#f8f9fa"
                BG="#12b886"
              >
                <IoIosArrowDropright fontSize="25px" fill="#12b886" />
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div
        width="768px"
        height="auto"
        margin="18px auto"
        backgroundColor="#ffffff"
      >
        <Div>
          <Image
            display="block"
            width="770px"
            height="376px"
            maxWidth="100%"
            src={postInfo.image}
            size="contain"
            position="center"
            repeat="no-repeat"
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
          {postInfo.content}
        </Text>
      </Div>
    </Div>
  );
};

export default Card;
