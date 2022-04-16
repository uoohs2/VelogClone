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
  title : "",
  content : "",
  image : "",
};

const addPostDB = (formData) => {
  return async function (dispatch, getState) {
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    let post = {
      ...initialPost,
      formData,
    };
   
    console.log(formData);
    
    try {
      await axios({
        method: "POST",
        url: "https://62565de452d8738c692e515a.mockapi.io/posts",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      });
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
      .get("https://62565de452d8738c692e515a.mockapi.io/posts")
      .then((response) => {
        dispatch(getPost(response.data));
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
      url: `http://15.164.163.116/api/post/delete/${postId}`,
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
  return async function (dispatch, getState, { history }) {
    if (!postId) {
      console.log("게시물 정보를 찾을 수 없어요.");
      return;
    }
    const _image = getState().image.preview;

    const _post_index = getState().post.list.findIndex(
      (p) => p.postId === postId
    );
    const _post = getState().post.list[_post_index];
    let post = {
      ..._post,
      formData,
    };

    await axios({
      method: "post",
      url: `http://52.78.194.238/api/postEdit/${postId}`,
      data: formData,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        dispatch(editPost(post));
        history.push("/main");
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
