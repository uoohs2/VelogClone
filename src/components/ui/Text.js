import React from "react";
import styled from "styled-components";
import "../../shared/App.css";

const Text = (props) => {
  const {
    children,
    display,
    justifyContent,
    width,
    height,
    lineHeight,
    margin,
    padding,
    backgroundColor,
    border,
    radius,
    color,
    decoration,
    wordSpacing,
    letterSpacing,
    wordWrap,
    size,
    weight,
    bold,
    textAlign,
    cursor,
    opacity,
    colorHover,
    decorationHover,
    transform,
    transition,
    font,
    _onClick,
  } = props;

  const styles = {
    display,
    justifyContent,
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    radius,
    backgroundColor,
    color,
    decoration,
    wordSpacing,
    letterSpacing,
    wordWrap,
    size,
    weight,
    bold,
    textAlign,
    cursor,
    opacity,
    colorHover,
    decorationHover,
    transform,
    transition,
    font,
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
  justifyContent: "",
  width: "",
  height: "",
  lingeHeight: "",
  margin: "",
  padding: "",
  backgroundColor: "",
  border: "",
  radius: false,
  color: "",
  decoration: "",
  wordSpacing: "",
  letterSpacing: "",
  wordWrap: "",
  size: "14px",
  weight: false,
  bold: false,
  textAlign: false,
  cursor: "",
  opacity: "",
  colorHover: false,
  decorationHover: false,
  transform: "",
  transition: "",
  font: false,
  _onClick: () => {},
};

const P = styled.p`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.decoration};
  word-spacing: ${(props) => props.wordSpacing};
  letter-spacing: ${(props) => props.letterSpacing};
  word-wrap: ${(props) => props.wordWrap};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  ${(props) => (props.bold ? "font-weight:600;" : "")};
  text-align: ${(props) => props.textAlign};
  &:hover {
    cursor: ${(props) => props.cursor};
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.colorHover};
    text-decoration: ${(props) => props.decorationHover};
  }
  transform: ${(props) => props.transform};
  transition: ${(props) => props.transition};
  font-family: ${(props) => props.font};
`;

export default Text;
