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
    size,
    bold,
    text,
    is_float,
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
    size,
    bold,
    text,
    is_float,
    opacity,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
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
  radius: false,
  backgroundColor: "",
  BG: "",
  color: "",
  size: "14px",
  bold: false,
  text: false,
  is_float: false,
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

export default Button;
