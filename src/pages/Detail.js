import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentsActions } from "../redux/modules/comment";
import { actionCreators as postActions } from "../redux/modules/post";
import {Card} from '../components/core/index';

const Detail = (props) => {
  const location = useLocation();
  const data = location.state.postId;
 

  return (
    <React.Fragment>
      <Card data={data}/>
    </React.Fragment>
  );
};

export default Detail;


