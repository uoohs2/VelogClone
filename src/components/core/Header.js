import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { history } from "../../redux/configureStore";

import Login from "../../pages/Login";

import { Button, Div, Image, Text } from "../ui";
import { BsFillSunFill, BsSearch } from "react-icons/bs";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const isLocal = localStorage.getItem("token") ? true : false;
  const [modal, setModal] = React.useState(false);

  // 메인페이지일때
  const logoMain = window.location.pathname === "/";

  //로그인 후
  if (isLocal && is_login) {
    return (
      <React.Fragment>
        <Div spaceBetween container height="64px" padding="0px 88px">
          {logoMain && (
            <Div row>
              <Text
                font="FiraMono"
                width="auto"
                height="30px"
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
            </Div>
          )}
          {!logoMain && (
            <Div row>
              <Image
                width="28px"
                height="28px"
                src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1228368893321736193%2FOv0og7E8_400x400.jpg"
                alt="logo"
                size="cover"
                position="center"
                radius="4px"
              />
              <Text
                font="FiraMono"
                width="auto"
                height="24px"
                margin="0px 0px 0px 16px"
                size="24px"
                weight="700"
                wordSpacing="0px"
                decoration="none solid rgb(33, 37, 41);"
                cursor="pointer"
                _onClick={() => {
                  history.push("/");
                }}
              >
                {props.data.userName}.log
              </Text>
            </Div>
          )}
          <Div spaceBetween width="350px" height="40px">
            <Button
              width="40px"
              height="40px"
              radius="50%"
              BG="#ECECEC"
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              <BsFillSunFill size="24" />
            </Button>
            <Button
              width="40px"
              height="40px"
              radius="50%"
              BG="#ECECEC"
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
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
                setModal(false);
                dispatch(userActions.logoutDB());
              }}
            >
              로그아웃
            </Button>
            <Div
              cursor="pointer"
              _onClick={(e) => {
                window.alert("Comming Soon!");
              }}
            >
              <Image
                shape="circle"
                width="40px"
                height="40px"
                size="cover"
                position="center"
              />
            </Div>
          </Div>
        </Div>
      </React.Fragment>
    );
  }

  //로그인 전
  return (
    <React.Fragment>
      <Div spaceBetween container height="64px" padding="0px 88px">
        {logoMain && (
          <Div row>
            <Text
              font="FiraMono"
              width="auto"
              height="30px"
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
          </Div>
        )}
        {!logoMain && (
          <Div row>
            <Image
              width="28px"
              height="28px"
              src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1228368893321736193%2FOv0og7E8_400x400.jpg"
              alt="logo"
              size="cover"
              position="center"
              radius="4px"
            />
            <Text
              font="FiraMono"
              width="auto"
              height="24px"
              margin="0px 0px 0px 16px"
              size="24px"
              weight="700"
              wordSpacing="0px"
              decoration="none solid rgb(33, 37, 41);"
              cursor="pointer"
              _onClick={() => {
                history.push("/");
              }}
            >
              {props.data.userName}.log
            </Text>
          </Div>
        )}
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
              setModal(true);
            }}
          >
            로그인
          </Button>
          {modal ? <Login setModal={setModal} /> : null}
        </Div>
      </Div>
    </React.Fragment>
  );
};

export default Header;
