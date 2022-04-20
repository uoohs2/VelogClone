import React from "react";
import { Button, Div, Input, Text } from "../ui";
import styled from "styled-components";

const HashTag = (props) => {
  const [tagItem, setTagItem] = React.useState("");
  const [tagList, setTagList] = React.useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
    console.log(updatedTagList);
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  return (
    <WholeBox>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <Div
              key={index}
              spaceBetween
              width="auto"
              height="30px"
              lineHeight="20px"
              margin="0px 0px 10px 10px"
              borderRadius="30px"
              backgroundColor="#f8f9fa"
              cursor="pointer"
              _onClick={deleteTagItem}
            >
              <Text
                display="flex"
                justifyContent="space-between"
                margin="5px"
                padding="10px"
                size="16px"
                color="#12b886"
              >
                {tagItem}
              </Text>
            </Div>
          );
        })}
        <TagInput
          type="text"
          placeholder="태그를 입력하세요"
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={onKeyPress}
        />
      </TagBox>
    </WholeBox>
  );
};

const WholeBox = styled.div`
  height: 50px;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  width: 700px;
  margin: 15px 0px;
`;

const TagInput = styled.input`
  display: inline-flex;
  margin-left: 5px;
  background: transparent;
  outline: none;
  line-height: 1.5rem;
  font-size: 1.1rem;
  color: #212529;
  cursor: text;
`;

export default HashTag;
