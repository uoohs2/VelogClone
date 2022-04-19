import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Write from "../pages/Write";
import Detail from "../pages/Detail";
import Edit from "../components/core/Edit";
import Auth2 from "../shared/Auth2";

import { Div, GlobalStyle } from "../components/ui";

function App() {
  const dispatch = useDispatch();
  const isLocal = localStorage.getItem("token") ? true : false;

  React.useEffect(() => {
    if (isLocal) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Div container>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/oauth/kakao/callback" exact component={Auth2}></Route>
          <Route path="/write" exact component={Write} />
          <Route path="/Edit/:id" exact component={Edit} />
          <Route path="/detail/:id" exact component={Detail} />
        </ConnectedRouter>
      </Div>
    </React.Fragment>
  );
}

export default App;
