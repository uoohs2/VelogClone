import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Post from "./modules/post";
import Image from "./modules/image";
import Comment from "./modules/comment";

//직접만든 히스토리(스토어에 넣어줄거임)
export const history = createBrowserHistory();

//리듀서 만들기
const rootReducer = combineReducers({
  user: User,
  post: Post,
  image: Image,
  comment: Comment,
  router: connectRouter(history),
});

//미들웨어 준비
const middlewares = [thunk.withExtraArgument({ history: history })];
const env = process.env.NODE_ENV;
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

//redux devTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

//미들웨어 묶기
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//미들웨어와 루트리듀서 엮기=스토어 생성
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
