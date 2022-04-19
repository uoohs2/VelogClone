import axios from "axios";
import { produce } from "immer";
import { createAction, handleActions } from "redux-actions";

const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logout = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  userInfo: null,
  is_login: false,
};

// 회원가입
const signupDB = (id, name, pwd) => {
  return async function (dispatch, getState, { history }) {
    await axios
      .post("http://3.38.253.146/user/signup", {
        userId: id,
        userName: name,
        password: pwd,
        passwordCheck: pwd,
      })
      .then((res) => {
        history.replace("/login");
        return res;
      })
      .catch((err) => {
        console.log(err);
        window.alert("이미 사용중인 이름입니다.");
      });
  };
};

// 로그인
const loginDB = (id, pwd) => {
  return async function (dispatch, getState, { history }) {
    
    await axios
      .post("http://3.38.253.146/user/login", {
        userId: id,
        password: pwd,
      })
      .then((res) =>{
        console.log(res)
        const token = res.data.token;
        localStorage.setItem("token", token);
        dispatch(setUser(res));
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert("아이디와 비밀번호가 일치하지 않습니다.");
      });
  };
};

// 로그인유지
const loginCheckDB = () => {
  return async function (dispatch, getState, { history }) {
    await axios
      .get("http://3.38.253.146/user/loginCheck", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        dispatch(setUser(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 로그아웃
const logoutDB = () => {
  return (dispatch, getState, { history }) => {
    console.log("로그아웃 되었습니다!");
    localStorage.removeItem("token");
    dispatch(logout());
    history.replace("/");
  };
};

export default handleActions(
  {
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.userInfo = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  getUser,
  setUser,
  logout,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
