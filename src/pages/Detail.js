import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentsActions } from "../redux/modules/comment";

import {
  Header,
  Card,
  DetailUser,
  CommentWrite,
  CommentList,
} from "../components/core";

const Detail = (props) => {
  const dispatch = useDispatch();
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
