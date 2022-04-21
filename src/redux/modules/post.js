import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const ADD_TAG = "ADD_TAG";
const GET_POST = "GET_POST";
const DEL_POST = "DEL_POST";
const EDIT_POST = "EDIT_Post";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const addHashTag = createAction(ADD_TAG, (tagList) => ({ tagList }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DEL_POST, (postId) => ({ postId }));
const editPost = createAction(EDIT_POST, (postId, post) => ({
  postId,
  post,
}));

const initialState = {
  list: [],
};

const initialPost = {
  title: "",
  content: "",
  tagList: ["", ""],
  image: "",
};

const addHashTagDB = (tagList) => {
  return async function (dispatch, getState) {
    console.log(tagList);
    await axios({
      method: "POST",
      url: "http://3.38.253.146/api/post",
      data: JSON.stringify(tagList),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(addHashTag(tagList));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addPostDB = (formData) => {
  return async function (dispatch, getState) {
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    let post = {
      formData,
    };
    await axios({
      method: "POST",
      url: "http://3.38.253.146/api/post",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(addPost(post));
        dispatch(imageActions.resetPreview(post));
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // axios({
    //   method: "post",
    //   url: 'http://3.38.253.146/write_modify/user/postadd',
    //   data: formData,
    // headers:
    // { "Content-Type": "multipart/form-data",
    // Authorization: localStorage.getItem("access_token") }
    // })
  };
};

const getPostDB = () => {
  return async function (dispatch, getState) {
    await axios
      .get("http://3.38.253.146/api/post")
      .then((response) => {
        dispatch(getPost(response.data.post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const deletePostDB = (postId) => {
  return async function (dispatch, getState, { history }) {
    await axios({
      method: "DELETE",
      url: `http://3.38.253.146/api/delete/${postId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      dispatch(deletePost(response));
      history.replace("/");
    });
  };
};

const editPostDB = (postId, formData) => {
  return async function (dispatch, getState, { history }) {
    await axios({
      method: "POST",
      url: `http://3.38.253.146/api/modify/${postId}`,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data;`,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        dispatch(editPost(res));
        history.push("/");
      })
      .catch((error) => {
        window.alert("이미지,제목,내용 수정이 필요합니다.");
        console.log("게시물 수정이 실패했습니다.", error);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [ADD_TAG]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.tagList);
      }),
    [DEL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter((d) => d.id !== action.payload.postId);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(state, action);
        let index = draft.list.findIndex((p) => p.id === action.payload.postId);
        draft.list[index] = { ...draft.list[index], ...action.payload.post };
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  addHashTag,
  getPost,
  deletePost,
  addPostDB,
  addHashTagDB,
  getPostDB,
  deletePostDB,
  editPostDB,
};

export { actionCreators };
