import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { history } from "../../redux/configureStore";

import styled from "styled-components";
import { Button, Div, Image, Text } from "../ui";
import { BsFillSunFill, BsSearch } from "react-icons/bs";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const isLocal = localStorage.getItem("token") ? true : false;

  // if (window.location.pathname === "/write") return null;

  //로그인 후
  if (isLocal && is_login) {
    return (
      <React.Fragment>
        <Div spaceBetween container height="64px" padding="0px 88px">
          <Text
            font="FiraMono"
            width="71px"
            height="24px"
            size="24px"
            weight="700"
            wordSpacing="0px"
            decoration="none solid rgb(33, 37, 41);"
            cursor="pointer"
            _onClick={() => {
              history.push("/");
            }}
          >
            velog
          </Text>
          <Div spaceBetween width="350px" height="40px">
            <Button width="40px" height="40px" radius="50%" BG="#ECECEC">
              <BsFillSunFill size="24" />
            </Button>
            <Button width="40px" height="40px" radius="50%" BG="#ECECEC">
              <BsSearch size="18" />
            </Button>
            <Button
              width="110px"
              height="32px"
              margin="0px 5px 0px 0px"
              padding="1px 10px"
              bold
              border="1px solid black"
              radius="33px"
              opacity="0.6"
              _onClick={() => {
                history.push("/write");
              }}
            >
              새 글 작성
            </Button>
            <Button
              width="80px"
              height="33px"
              margin="0px 20px 0px 0px"
              padding="7px"
              border="1px solid black"
              radius="33px"
              bold
              opacity="0.6"
              _onClick={() => {
                dispatch(userActions.logoutDB());
              }}
            >
              로그아웃
            </Button>
            <Image
              shape="circle"
              width="40px"
              height="40px"
              size="cover"
              position="center"
            />
          </Div>
        </Div>
      </React.Fragment>
    );
  }

  //로그인 전
  return (
    <React.Fragment>
      <Div spaceBetween container height="64px" padding="0px 88px">
        <Text
          font="FiraMono"
          width="71px"
          height="24px"
          size="24px"
          weight="700"
          wordSpacing="0px"
          decoration="none solid rgb(33, 37, 41);"
          cursor="pointer"
          _onClick={() => {
            history.push("/");
          }}
        >
          velog
        </Text>
        <Div spaceBetween width="172px" height="40px">
          <Button width="40px" height="40px" radius="50%" BG="#ECECEC">
            <BsFillSunFill size="24" />
          </Button>
          <Button width="40px" height="40px" radius="50%" BG="#ECECEC">
            <BsSearch size="18" />
          </Button>

          <Button
            width="80px"
            height="33px"
            margin="5px"
            padding="7px"
            border="1px solid black"
            radius="33px"
            bold
            opacity="0.6"
            _onClick={() => {
              history.push("/login");
            }}
          >
            로그인
          </Button>
        </Div>
      </Div>
    </React.Fragment>
  );
};

// const modalStyle = {
//   overlay: {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: "rgba(247, 247, 247, 0.8)",
//     transition: "opacity 2000ms ease-in-out",
//   },
//   content: {
//     width: "650px",
//     height: "510px",
//     margin: "auto",
//     border: "none",
//     boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
//   },
// };

// const CloseButton = styled.img`
//   width: 11px;
//   position: absolute;
//   top: 30px;
//   right: 30px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

export default Header;
