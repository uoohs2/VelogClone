import React from "react";
import styled from "styled-components";

const Div = (props) => {
  const {
    children,
    position,
    display,
    flexDirection,
    justifyContent,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    backgroundColor,
    container,
    start,
    center,
    row,
    spaceBetween,
    spaceAround,
    textCenter,
    inline,
    _onClick,
  } = props;

  const styles = {
    children,
    position,
    display,
    flexDirection,
    justifyContent,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    backgroundColor,
    container,
    start,
    center,
    row,
    spaceBetween,
    spaceAround,
    textCenter,
    inline,
  };

  return (
    <Box onClick={_onClick} {...styles}>
      {children}
    </Box>
  );
};

Div.defaultProps = {
  children: null,
  position: "",
  display: "",
  flexDirection: "",
  justifyContent: "",
  width: "",
  height: "",
  margin: "",
  padding: "",
  border: "",
  borderRadius: "",
  backgroundColor: "",
  container: false,
  start: false,
  center: false,
  row: false,
  spaceBetween: false,
  spaceAround: false,
  textCenter: false,
  inline: false,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? "position:realative; width:100%; margin:0px auto;" : ""};
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  ${(props) => (props.inline ? "display:inline-block;" : "display:block")};
  ${(props) =>
    props.start
      ? "display:flex; flex-direction:column; align-items:center; justify-content:flex-start;"
      : ""};
  ${(props) =>
    props.center
      ? "display:flex; flex-direction:column; align-items:center; justify-content:center;"
      : ""};
  ${(props) =>
    props.row
      ? "display:flex; flex-direction:row; align-items:center; justify-content:center;"
      : ""};
  ${(props) =>
    props.spaceBetween
      ? "display:flex; flex-direction:row; align-items:center; justify-content:space-between;"
      : ""};
  ${(props) =>
    props.spaceAround
      ? "display:flex; flex-direction:row; align-items:center; justify-content:space-around;"
      : ""};

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  ${(props) => (props.textCenter ? `text-align:center;` : "")};
`;

export default Div;
