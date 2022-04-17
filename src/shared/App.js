import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Write from "../pages/Write";
import Detail from "../pages/Detail";

import { Header } from "../components/core";
import { Div, GlobalStyle } from "../components/ui";

function App() {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const is_session = localStorage.getItem("token") ? true : false;
  console.log(is_session, is_login);

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckDB());
    }
  }, []);
  return (
    <React.Fragment>
      <GlobalStyle />
      <Div container>
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail/" exact component={Detail} />
        </ConnectedRouter>
      </Div>
    </React.Fragment>
  );
}

export default App;
