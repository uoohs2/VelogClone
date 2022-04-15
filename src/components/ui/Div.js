import React from "react";
import styled from "styled-components";

const Div = (props) => {
  const { children } = props;

  const styles = {};

  return <Container {...styles}>{children}</Container>;
};

Div.defaultProps = {
  children: null,
};

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  /* border: 1px solid red; */
`;

export default Div;
