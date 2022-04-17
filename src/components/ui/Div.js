import React from "react";
import styled from "styled-components";

const Div = (props) => {
  const {
    children,
    position,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    backgroundColor,
    container,
    box,
    center,
    row,
    textCenter,
    inline,
    _onClick,
  } = props;

  const styles = {
    children,
    position,
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    backgroundColor,
    container,
    box,
    center,
    row,
    textCenter,
    inline,
  };

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
  width: "",
  height: "",
  margin: "",
  padding: "",
  border: "",
  borderRadius: "",
  backgroundColor: "",
  container: false,
  box: false,
  center: false,
  row: false,
  textCenter: false,
  inline: false,
  _onClick: () => {},
};

const Box = styled.div`
  ${(props) =>
    props.container ? "position:realative; width:100%; margin:0px auto;" : ""};
  position: ${(props) => props.position};
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
  background-color: ${(props) => props.backgroundColor};
  ${(props) => (props.textCenter ? `text-align:center;` : "")};
`;

export default Div;
