import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    children,
    float,
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    radius,
    backgroundColor,
    BG,
    color,
    colorHover,
    size,
    bold,
    text,
    is_float,
    tagBtn,
    opacity,
    _onClick,
  } = props;

  const styles = {
    float,
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    radius,
    backgroundColor,
    BG,
    color,
    colorHover,
    size,
    bold,
    text,
    is_float,
    tagBtn,
    opacity,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
      </React.Fragment>
    );
  }

  if (tagBtn) {
    return (
      <React.Fragment>
        <TagBtn onClick={_onClick}>{text ? text : children}</TagBtn>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <ButtonDefault {...styles} onClick={_onClick}>
        {text ? text : children}
      </ButtonDefault>
    </React.Fragment>
  );
};

Button.defaultProps = {
  children: null,
  float: false,
  width: "",
  height: "",
  lineHeight: "",
  margin: "",
  padding: "",
  border: "",
  radius: "false",
  backgroundColor: "",
  BG: "",
  color: "",
  colorHover: false,
  size: "14px",
  bold: false,
  text: false,
  is_float: false,
  tagBtn: false,
  opacity: "",
  _onClick: () => {},
};

const ButtonDefault = styled.button`
  float: ${(props) => props.float};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  &:hover {
    background-color: ${(props) => props.BG};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
  }
`;

const FloatButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 36px;
  font-weight: bold;
  background-color: #96f2d7;
  color: white;
`;

const TagBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none solid rgb(18, 184, 134);
  word-spacing: 0px;
  background-color: #f8f9fa;
  color: #12b886;
  height: 32px;
  width: 112px;
  margin: 0 14px 14px 0;
  padding: 5px 16px 0 16px;
  display: inline-flex;
  justify-content: space-around;
  transform: none;
  transition: all 0s ease 0s;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
