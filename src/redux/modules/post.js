import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";
import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const DEL_POST = "DEL_POST";
const EDIT_POST = "EDIT_Post";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const deletePost = createAction(DEL_POST, (postId) => ({ postId }));
const editPost = createAction(EDIT_POST, (postId, post) => ({
  postId,
  post,
}));
const token = sessionStorage.getItem("token");
const initialState = {
  list: [],
};

const initialPost = {
  title: "",
  content: "",
  image: "",
};

const addPostDB = (formData) => {
  return async function (dispatch, getState) {
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    let post = {
      ...initialPost,
      formData,
    };

   
    try {
      await axios({
        method: "POST",
        url: "http://3.38.253.146/api/post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      dispatch(addPost(post));
      dispatch(imageActions.resetPreview(post));
    } catch (error) {
      console.log(error);
    }

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
        console.log(response);

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
      url: "http://3.38.253.146/api/delete/:postId",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      // dispatch(deletePost(postId))
      history.replace("/");
    });
  };
};

const editPostDB = (postId, formData) => {
  console.log(postId, formData);
  return async function (dispatch, getState, { history }) {
    console.log(postId, formData);
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
        console.log(res);
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
  getPost,
  deletePost,
  addPostDB,
  getPostDB,
  deletePostDB,
  editPostDB,
};

export { actionCreators };
