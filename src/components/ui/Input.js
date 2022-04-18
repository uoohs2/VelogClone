import React from "react";
import { Div, Text } from "./index";
import styled from "styled-components";

const Input = (props) => {
  const {
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    repeat,
    value,
    rows,
    is_submit,
    onSubmit,
  } = props;

  const styles = {
    width,
    height,
    lineHeight,
    margin,
    padding,
    border,
  };
  if (multiLine) {
    return (
      <Div>
        <Text>{label}</Text>
        <Textarea
          {...styles}
          value={value}
          rows={rows}
          placeholder={placeholder}
          onChange={_onChange}
        ></Textarea>
      </Div>
    );
  }

  if (repeat) {
    return (
      <Div>
        <UserInput
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      </Div>
    );
  }

  return (
    <Div>
      {label && <Text>{label}</Text>}
      {is_submit ? (
        <InputDefault
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        />
      ) : (
        <InputDefault
          {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        />
      )}
    </Div>
  );
};
Input.defaultProps = {
  width: "",
  height: "",
  lineHeight: "",
  margin: "",
  padding: "",
  border: "",
  multiLine: false,
  repeat: false,
  label: false,
  type: "",
  placeholder: "",
  value: "",
  rows: "",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const InputDefault = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
`;

const UserInput = styled.input`
  width: 300px;
  height: 40px;
  line-height: 40px;
  margin: 5px 0px;
  :focus {
    outline: 2px solid lightgrey;
  }
`;

const Textarea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
`;

export default Input;
