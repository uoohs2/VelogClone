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
  userInfo: {
    userId: "",
    userName: "",
    userNo: null,
  },
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
        window.alert("회원가입이 완료되었습니다.");
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
      .then((res) => {
        console.log(res);
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

//카카오로그인
const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    console.log(code);
    axios
      .get(`http://3.38.253.146/oauth/kakao/callback?code=${code}`)
      .then((res) => {
        // console.log("res", res);
        const token = res.data.user.token;
        const userId = res.data.user.userId;
        const userName = res.data.user.userName;
        console.log(userName);
        localStorage.setItem("token", token); //예시로 로컬에 저장
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        dispatch(loginCheckDB());
        console.log("로그인 확인");
        window.location.replace("/"); // 토큰 받고 로그인되면 화면 전환(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        window.location.replace("/"); // 로그인 실패하면 로그인화면으로 보내기
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
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 로그아웃
const logoutDB = () => {
  return (dispatch, getState, { history }) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
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
  kakaoLogin,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
