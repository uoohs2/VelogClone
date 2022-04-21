import React from "react";
import {  useLocation } from "react-router-dom";

import {
  Header,
  Card,
  DetailUser,
  CommentWrite,
  CommentList,
} from "../components/core";

const Detail = (props) => {
  const location = useLocation();
  const data = location.state.postId;

  return (
    <React.Fragment>
      <Header data={data}></Header>
      <Card data={data} />
      <DetailUser data={data} />
      <CommentWrite postId={data} />
      <CommentList data={data} />
    </React.Fragment>
  );
};

export default Detail;
