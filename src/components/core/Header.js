import React from "react";
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

  //로그인 후
  if (isLocal) {
    return (
      <React.Fragment>
        <Div spaceBetween container height="64px" padding="0px 88px">
          <Text
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
<<<<<<< HEAD
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
=======
        </TextLogo>
        <div className="rightside">
          <div className="icon0">
            <BsFillSunFill size="25" />
          </div>
          <div className="icon1">
            <BsSearch size="20" />
          </div>

          <WriteButton>새 글 작성</WriteButton>
          <WriteButton onClick={() => {}}>로그아웃</WriteButton>

          <ImageCircle
            shape="circle"
            src="https://velog.velcdn.com/images/syounglee012/profile/153e8e10-0a34-4939-be81-7244fa41347c/social.png"
          />
        </div>
      </HeaderContainer>
>>>>>>> d97018cfddcfb14d03875c5299b6a795d1b6b924
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

<<<<<<< HEAD
=======
const HeaderContainer = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
  width: 95%;
  margin: auto;
  height: 48px;
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  padding: 20px 0px 50px;
  justify-content: space-between;
  .rightside {
    display: flex;
    .icon0 {
      margin: 6px 0px;
    }
  }
  .icon1 {
    margin: 8px 20px 0px 20px;
  }
`;

const HeaderRight = styled.div`
  justify-content: space-between;
  width: auto;
`;

const TextLogo = styled.p`
  font-size: xx-large;
  font-family: "Fira Mono";
  font-weight: 700;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  position: relative;
  top: -5px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const WriteButton = styled.button`
  width: 90px;
  height: 33px;
  border-radius: 33px;
  margin: 0px 12px 0px 0px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.main_black};
  background-color: #ffffff;
  border: 1.5px solid;
  border-color: ${(props) => props.theme.main_black};
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.main_black};
    color: ${(props) => props.theme.main_white};
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  min-width: 80px;
  height: 33px;
  border-radius: 33px;
  margin: 5px;
  padding: 7px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.main_white};
  background-color: ${(props) => props.theme.main_black};
  border: 1.5px solid;
  border-color: ${(props) => props.theme.main_black};
  outline: none;
  &:hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

const ImageCircle = styled.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 0px 10px 3px 3px;

`;
>>>>>>> d97018cfddcfb14d03875c5299b6a795d1b6b924
export default Header;
