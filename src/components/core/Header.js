import React from "react";
import styled from "styled-components";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <HeaderContainer>
        <TextLogo
          onClick={() => {
            history.push("/");
          }}
        >
          velog
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
    </React.Fragment>
  );
};


const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(247, 247, 247, 0.8)",
    transition: "opacity 2000ms ease-in-out",
  },
  content: {
    width: "650px",
    height: "510px",
    margin: "auto",
    border: "none",
    boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.1)",
  },
};

const CloseButton = styled.img`
  width: 11px;
  position: absolute;
  top: 30px;
  right: 30px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderContainer = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
  width: 100%;
  margin: auto;
  height: 48px;
  padding: 16px;
  display: flex;
  box-sizing: border-box;
  padding: 20px 0px 50px 0px;
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
