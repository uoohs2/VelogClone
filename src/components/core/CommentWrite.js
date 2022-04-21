
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import { actionCreators as commentsActions } from "../../redux/modules/comment";
import { history } from "../../redux/configureStore";
import styled from "styled-components";
import { Button, Div, Input, Text } from "../ui";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const postId = props.postId.postId;
  const [comment, setComment] = React.useState();

  const postComment = () => {
    // if (!user.is_login) {
    //   alert("로그인이 필요합니다.");
    //   history.replace("/login");
    //   return;
    dispatch(commentsActions.addCommentDB(token, comment, postId));
    setComment("");
    setTimeout(function() {
      window.location.reload('/');
    }, 1000);
   };
  React.useEffect(() => {
    dispatch(commentsActions.getCommentsDB(postId));
  }, []);

  const onChange = (e) => {
    setComment(e.target.value);
  };


  return (
    <Div
      width="768px"
      height="250px"
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
        댓글
      </Text>
      <Input
        placeholder="댓글을 작성하세요."
        _onChange={onChange}
        value={comment}
        // onSubmit={write}
        is_submit
      />
      <Button cmtBtn _onClick={postComment} text="댓글 작성"></Button>
    </Div>
  );
};

export default CommentWrite;
