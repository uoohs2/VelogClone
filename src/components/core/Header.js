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

          {/* <ImageCircle
            shape="circle"
            src="https://velog.velcdn.com/images/syounglee012/profile/153e8e10-0a34-4939-be81-7244fa41347c/social.png"
          /> */}
        </div>
      </HeaderContainer>
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
