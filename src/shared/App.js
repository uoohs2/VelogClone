import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Main from "../pages/Main";
import Write from "../pages/Write";
import Detail from "../pages/Detail";

import { Header } from "../components/core";
import { Div, GlobalStyle } from "../components/ui";

function App() {
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
