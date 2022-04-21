import React from "react";
import styled from "styled-components";

const Div = (props) => {
  const {
    children,
    position,
    display,
    flexDirection,
    justifyContent,
    float,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    shadow,
    boxShadow,
    transition,
    backgroundColor,
    overflow,
    color,
    cursor,
    opacity,
    colorHover,
    container,
    box,
    center,
    row,
    textCenter,
    fontSize,
    inline,
    bookMark,
    modalContainer,
    modalBox,
    velogCard,
    _onClick,
  } = props;

  const styles = {
    children,
    position,
    display,
    flexDirection,
    justifyContent,
    float,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    shadow,
    boxShadow,
    transition,
    backgroundColor,
    overflow,
    color,
    cursor,
    opacity,
    colorHover,
    container,
    box,
    center,
    row,
    textCenter,
    fontSize,
    inline,
    bookMark,
    modalContainer,
    modalBox,
    velogCard,
  };
  if (bookMark) {
    return (
      <React.Fragment>
        <Bookmark onClick={_onClick} {...styles}>
          {children}
        </Bookmark>
      </React.Fragment>
    );
  }

  if (modalContainer) {
    return (
      <React.Fragment>
        <ModalContainer onClick={_onClick} {...styles}>
          {children}
        </ModalContainer>
      </React.Fragment>
    );
  }

  if (modalBox) {
    return (
      <React.Fragment>
        <ModalBox onClick={_onClick} {...styles}>
          {children}
        </ModalBox>
      </React.Fragment>
    );
  }

  if (velogCard) {
    return (
      <React.Fragment>
        <VelogCard onClick={_onClick} {...styles}>
          {children}
        </VelogCard>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Box onClick={_onClick} {...styles}>
        {children}
      </Box>
    </React.Fragment>
  );
};

Div.defaultProps = {
  children: null,
  position: "",
  display: "",
  flexDirection: "",
  justifyContent: "",
  float: false,
  width: "",
  height: "",
  margin: "",
  padding: "",
  border: "",
  borderRadius: "",
  shadow: false,
  boxShadow: "",
  transition: "",
  backgroundColor: "",
  overflow: "",
  color: "",
  cursor: "",
  opacity: "",
  colorHover: false,
  container: false,
  start: "",
  center: false,
  row: false,
  textCenter: false,
  fontSize: "false",
  inline: false,
  bookMark: false,
  modal: false,
  velogCard: false,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? "position:realative; width:100%; margin:0px auto;" : ""};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  float: ${(props) => props.float};
  ${(props) => (props.inline ? "display:inline-block;" : "display:block")};
  ${(props) =>
    props.center
      ? "display:flex; flex-direction:column; align-items:center; justify-content:center"
      : ""};
  ${(props) =>
    props.row
      ? "display:flex; flex-direction:row; align-items:center; justify-content:center"
      : ""};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.shadow};
  transition: ${(props) => props.transition};
  background-color: ${(props) => props.backgroundColor};
  overflow: hidden;
  ${(props) => (props.textCenter ? `text-align:center;` : "")};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  &:hover {
    cursor: ${(props) => props.cursor};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
  }
`;

const Bookmark = styled.div`
  position: absolute;
  top: 0;
  right: 24px;
  display: block;
  width: 32px;
  height: 48px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  z-index: 9999;
`;

const ModalBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  width: 1000px;
  height: 700px;
  padding: auto 0px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
`;

const VelogCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 400px;
  margin: 16px;
  border-radius: 4px;
  background-color: #f8f9fa;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px);
    box-shadow: rgb(0 0 0 / 11%) 0px 12px 20px 0px;
  }
`;

export default Div;
