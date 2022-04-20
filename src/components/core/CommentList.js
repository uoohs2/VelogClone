import React, { useEffect } from "react";
import { actionCreators as commentsActions } from "../../redux/modules/comment";
import styled from "styled-components";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useDispatch, useSelector} from "react-redux";
import moment from "moment";
import "moment/locale/ko";


const CommentList = (props) => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const postId = props.data.postId;

  useEffect(() => {
    dispatch(commentsActions.getCommentsDB());
  }, []);
  const comments = useSelector((state) => state.comment.comments);
  console.log(comments);

  const deleteComment = (token, commentId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch(commentsActions.deleteCommentDB(token, commentId, postId));
      window.alert("댓글이 삭제되었습니다.");
      // window.location.reload("/");
    } else {
      return;
    }
  };
  return (
    <>
      {comments.map((comment) => (
        <LowerBox>
          <div className="user">
            <div className="info">
              <div className="image" src="" />
              <div className="userinfo">
                <div className="name">{comment.userName}</div>
                <div className="date">
                  {moment(comment.dateComment).fromNow()}
                </div>
              </div>
              <div
                className="delete"
                onClick={() => {
                  deleteComment(token, comment.commentId);
                  
                }}
              >
                삭제
              </div>
            </div>
          </div>
          <div className="comment">{comment.comment}</div>
          <div className="reply">
            <div className="p"> 2개의 답글</div>
          </div>
        </LowerBox>
      ))}
      ;
    </>
  );
};

export default CommentList;

const LowerBox = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 100%;
  width: 768px;
  margin: 0px auto;
  display: block;
  margin-top: 50px;
  border-bottom: 1px solid #d2d2d2;
  .user {
    height: 54px;
    width: 768px;
    margin: 0 0 24px 0;
    display: flex;
    box-sizing: border-box;
    .info {
      display: flex;
      height: 38px;
      width: 900px;
      margin: 0 0 0 16px;
      min-height: auto;
      min-width: auto;
      background-color: #ffffff;
      background-position: 0% 0%;
      color: #212529;

      .image {
        background-color: black;
        min-width: 50px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-image: url("https://media-exp1.licdn.com/dms/image/C4E03AQGtG9jkaxC8fA/profile-displayphoto-shrink_200_200/0/1642491716240?e=1654732800&v=beta&t=ybTk8DM0kp5ikq_66mSvLYb0oqmSOjiOFJ636kjGfHs");
        background-size: cover;
        margin: 3px 15px 3px -15px;
        cursor: pointer;
      }
      .userinfo {
        padding-top: 10px;

        .name {
          font-size: 16px;
          font-weight: 700;
          line-height: 16px;
          word-spacing: 0px;
          background-color: #ffffff;
          background-position: 0% 0%;
          color: #212529;
          cursor: pointer;
          height: auto;
          width: 200px;
        }
        .date {
          font-size: 14px;
          line-height: 14px;
          text-decoration: none solid rgb(134, 142, 150);
          word-spacing: 0px;
          height: 14px;
          width: 100px;
          display: block;
          margin: 8px 0 0 0;
          background-color: #ffffff;
          background-position: 0% 0%;
          color: #868e96;
        }
      }
      .delete {
        margin-left: 450px;
        margin-top: 10px;
        width: 45px;
        height: 25px;
        justify-content: center;
        padding: 6px 0px 0px 7px;
        background-color: #dfdfdf;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  .comment {
    font-size: 18px;
    letter-spacing: -0.072px;
    line-height: 30.6px;
    text-decoration: none solid rgb(33, 37, 41);
    word-spacing: 0px;
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #212529;
    height: 30.5938px;
    width: 768px;
    margin: 18px 0 18px 0;
    display: block;
    box-sizing: border-box;
    word-wrap: break-word;
  }
  .reply {
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #20c997;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none solid rgb(32, 201, 151);
    word-spacing: 0px;
    display: flex;
    height: 21.5px;
    width: 768px;
    margin: 12px 0 20px 0;
    cursor: pointer;
    .p {
      color: #20c997;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
