import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    children,
    display,
    width,
    height,
    lineHeight,
    margin,
    border,
    color,
    decoration,
    wordSpacing,
    size,
    weight,
    bold,
    textAlign,
    cursor,
    _onClick,
  } = props;

  const styles = {
    display,
    width,
    height,
    lineHeight,
    margin,
    border,
    color,
    decoration,
    wordSpacing,
    size,
    weight,
    bold,
    textAlign,
    cursor,
  };

  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  display: "",
  width: "",
  height: "",
  lingeHeight: "",
  margin: "",
  border: "",
  color: "",
  decoration: "",
  wordSpacing: "",
  size: "14px",
  weight: false,
  bold: false,
  textAlign: false,
  cursor: "",
  _onClick: () => {},
};

const P = styled.p`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.decoration};
  word-spacing: ${(props) => props.wordSpacing};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  ${(props) => (props.bold ? "font-weight:600;" : "")};
  text-align: ${(props) => props.textAlign};
  &:hover {
    cursor: ${(props) => props.cursor};
  }
`;

export default Text;
