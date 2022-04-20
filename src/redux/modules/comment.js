import { createAction, handleActions } from "redux-actions";
import axios from "axios";

// action
const ADD = "comment/ADD";
const LOAD = "comment/LOAD";
const DELETE = "comment/DELETE";
const GET_COMMENTS = "GET_COMMENTS";
const EDIT = "comment/EDIT";

// action creator

// compponents
// actions
// reducers
// middleware

const addComment = createAction(ADD, (comment) => ({ comment }));
const getComments = createAction(LOAD, (comment) => ({ comment }));
const deleteComment = createAction(DELETE, (commentId) => ({ commentId }));
const editComment = createAction(EDIT, (coId, newContent) => ({
  coId,
  newContent,
}));

// initialState
const initialState = {
  comments: [],
};

//middleware
// (*) async getComments()
// make axios.get call here (?)

export const getCommentsDB = (postId) => async (dispatch, getState) => {
  await axios
    .get(`http://3.38.253.146/api/detail/${postId}`)
    .then((response) => {
      console.log(response);
      dispatch(getComments(response.data.comment));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addCommentDB = (token, comment, postId) => {
  return function (dispatch, getState) {
    console.log(token, comment, postId);
    axios
      .post(
        `http://3.38.253.146/api/comment/${postId}`,
        {
          token: token,
          postId: postId,
          comment: comment,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        dispatch(addComment(response.data.list));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


const deleteCommentDB = (token, commentId, postId) => {
  return async function (dispatch, getState) {
    await axios({
      method: "DELETE",
      url: `http://3.38.253.146/api/comment/${postId}`,
      data: {
        commentId: commentId,
      },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        dispatch(deleteComment(commentId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [ADD]: (state, action) => {
      console.log(action.payload.comments);
      return {
        ...state,
        comments: state.comments.concat(action.payload.comments),
      };
    },

    [LOAD]: (state, action) => {
      console.log(action.payload.comments);

      return {
        ...state,
        comments: action.payload.comment,
      };
    },

    [DELETE]: (state, action) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment._id !== action.payload.commentId
        ),
      };
    },

    [EDIT]: (state, action) => {
      // 배열에서 특정값을 찾아서 불변성 유지하면서 수정해주기
      const data = action.payload.newContent;
      return {
        ...state,
        comments: state.comments.map((comment, idx) => {
          if (comment.id === data.id) {
            return (state.comments[idx] = data);
          } else {
            return comment;
          }
        }),
      };
    },
  },
  initialState
);

const actionCreators = {
  addCommentDB,
  getCommentsDB,
  deleteCommentDB,
};

export { actionCreators };
