import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentsActions } from "../../redux/modules/comment";
import { history } from "../../redux/configureStore";
import styled from "styled-components";
import { Button, Div, Input, Text } from "../ui";

const CommentWrite = (props) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const post = useSelector((state) => state.post.list);
  const postId = props.postId.postId;
  const userId = props.postId.userId;
  
  console.log(postId, token);

  const [comment, setComment] = React.useState();
 

 
  const postComment = () => {
    // if (!user.is_login) {
    //   alert("로그인이 필요합니다.");
    //   history.replace("/login");
    //   return;
    // }
    dispatch(commentsActions.addCommentDB(token, comment, postId));
    setComment("");
  };

  React.useEffect(() => {
    dispatch(commentsActions.getCommentsDB(postId));
  }, []);


  const onChange = (e) => {
    setComment(e.target.value);
  };

  // const deletePost = () => {
  //   if (window.confirm("당신의 추억을 삭제하시겠습니까?")) {
  //     dispatch(postActions.deletePostDB(post._id));
  //     window.alert("추억이 삭제되었습니다.");
  //     history.goBack();
  //   } else {
  //     return;
  //   }
  // };

  // const deleteComment = (Id) => {
  //   if (window.confirm("정말 삭제하시겠습니까?")) {
  //     dispatch(commentsActions.deleteCommentDB(Id));
  //     window.alert("댓글이 삭제되었습니다.");
  //   } else {
  //     return;
  //   }
  // };
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
        // onSubmit={write}
        is_submit
      />
      <Button cmtBtn _onClick={postComment} text="댓글 작성"></Button>
    </Div>
  );
};

export default CommentWrite;
