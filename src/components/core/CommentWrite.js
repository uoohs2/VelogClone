import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../../redux/modules/comment";
import { history } from "../../redux/configureStore";

import styled from "styled-components";
import { Button, Div, Input, Text } from "../ui";

const CommentWrite = (props) => {
  const { data } = props;
  console.log(props);

  const [comment, setCommentText] = React.useState();
  const onChange = (e) => {
    setCommentText(e.target.value);
  };

  const user = useSelector((state) => state.user);

  const write = () => {
    if (!user.is_login) {
      alert("로그인이 필요합니다.");
      history.replace("/login");
      return;
    }
    // dispatch(commentActions.addCommentDB(userId, postId, comment));
    setCommentText("");
  };
  return (
    <Div
      width="768px"
      height="158px"
      margin="100px auto 0px auto"
      color="#212529"
    >
      <Text
        width="768px"
        height="27px"
        lineHeight="27px"
        margin="24px 0px 16px 0px"
        color="#212529"
        size="18px"
        decoration="none solid rgb(33, 37, 41);"
        bold
      >
        8개의 댓글
      </Text>
      <Input
        placeholder="댓글을 작성하세요."
        _onChange={onChange}
        value={comment}
        onSubmit={write}
        is_submit
      />
      <Button cmtBtn _onClick={write} text="댓글 작성"></Button>
    </Div>
  );
};

export default CommentWrite;
