import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentsActions } from "../redux/modules/comment";
import { actionCreators as postActions } from "../redux/modules/post";

const Detail = (props) => {
  const [comment, setComment] = useState("");
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  const post_list = useSelector((state) => state);
  console.log(post_list);
  const post = post_list.find((p) => p._id === params.postid);
  const comments_list = useSelector((state) => state.comment.comments);
  const user_info = useSelector((state) => state.User);
  
  
  const parseToken = (token = null) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  const checkLog = () => {
    if (token) {
      const current_id = parseToken(token);
      return current_id.userId;
    }
  };

  useEffect(() => {
    dispatch(commentsActions.getCommentsDB(post._id));
  }, []);

  const postComment = () => {
    dispatch(commentsActions.addCommentDB(token, comment, post._id));
    setComment("");
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const deletePost = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(postActions.deletePostDB(post._id));
      window.alert("삭제되었습니다.");
      history.goBack();
    } else {
      return;
    }
  };

  const deleteComment = (Id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentsActions.deleteCommentDB(Id));
      window.alert("댓글이 삭제되었습니다.");
    } else {
      return;
    }
  };

  return (
    <React.Fragment>
      
      <Box>

        <NameTag>
          <N>
            <ImageCircle />
            <h5>Id</h5>
          </N>
          <BtnGroup>
            {/* {post.userId === user_info.user.userId ? (
              <button onClick={deletePost}>삭제하기</button>
            ) : null} */}
          </BtnGroup>
        </NameTag>
        <PosterBox>
          <Text>
            <div>{post.title}</div>

            <br />
            {post.content}
          </Text>
        </PosterBox>

        <Box1>
          {comments_list.map((comment) => (
            <SmallBox>
              <ImageCircle src={comment.userImageUrl} />
              <Text>{comment.userId}</Text>
              <Group1>
                <Text> {comment.comment}</Text>
                <Text1> {comment.createAt}</Text1>
                {comment.userId == checkLog() ? (
                  <button
                    onClick={() => {
                      deleteComment(comment._id);
                    }}
                  />
                ) : null}
              </Group1>
            </SmallBox>
          ))}
        </Box1>

        <SmallBox1>
          <Input
            placeholder="Leave a comment here"
            value={comment}
            onChange={onChange}
          />

          <Button
            onClick={() => {
              postComment();
            }}
          >
            Submit
          </Button>
        </SmallBox1>
      </Box>
    </React.Fragment>
  );
};

export default Detail;

const NameTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const PosterBox = styled.div`
  display: flex;
  padding: 0px 16px;
  margin-bottom: 20px;
  align-items: flex-start;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;
  padding-top: 20px;
  height: 100%;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #394481;
  color: #394481;
  margin: 0 1em;
  padding: 0.6em 0.8em;
  border-radius: 50px;
  font-size: medium;
  cursor: pointer;
  &:hover {
    border: 3px solid #394481;
  }
`;

const SmallBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  float: left;
`;

const SmallBox1 = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: left;
  align-items: flex-end;
  float: left;
`;

const BigBox = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #394481;
  padding: 0 1em;
  margin: 1em;
  width: 600px;
  height: 700px;
  border-radius: 30px;
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  overflow: auto;
  width: 560px;
  height: 300px;
`;

const ImageRect = styled.div`
  border-radius: 30px;
  display: flex;
  width: 600px;
  height: 700px;
  background-image: url(${(props) => props.src});
  background-size: cover;
`;

const ImageCircle = styled.div`
  min-width: 50px;
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 3px 10px 3px 3px;
`;
const Input = styled.input`
  border: 1px solid #394481;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Text = styled.div`
  color: "#222831";
  font-size: 15px;
  padding: 0 4px;
`;
const Text1 = styled.div`
  color: "#222831";
  font-size: 11px;
  justify-content: right;
`;

const EDBtn = styled.button`
  padding: 5px;
  margin-left: 10px;
`;
const BtnGroup = styled.div`
  padding: 16px;
  margin-left: 65px;
  display: flex;
`;

const Group1 = styled.div`
  justify-content: space-between;
  display: flex;
`;

const N = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 4px;
`;
