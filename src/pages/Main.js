import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import post from "../redux/modules/post";
import { useEffect } from "react";
import { actionCreators as postActions } from "../redux/modules/post";


const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
  
  useEffect(() => {
    dispatch(postActions.getPostDB());
  },[]);

  return (
    <React.Fragment>
      <Responsive>
        <Bigbox>
          {post_list.map((post) => (
            <Midbox key={post._Id}>
              <Box > {post.image}</Box>
              <Box1>
                {" "}
                {post.title}
                {post.content}
                {post.comment}
                {post.date}
              </Box1>
              <Box2> {post.userName} </Box2>
            </Midbox>
          ))}
        </Bigbox>
      </Responsive>
    </React.Fragment>
  );
};

export default Main;

const Box = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid black;
  margin: 5px 5px;
`;
const Box1 = styled.div`
  width: 350px;
  height: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid black;
  margin: 1px 5px;
`;
const Box2 = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid black;
  margin: 2px 5px;
`;

const Midbox = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid red;
  margin: 10px 10px;
`;

const Bigbox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 2px solid blue;
  margin-top: 50px;
`;

const Responsive = styled.div`
  /* ${(prop) => prop.theme.responsiveContainer}; */
  max-width: 100vw;
  border: 2px solid black;
  height: 100;
`;

const TabContainer = styled.div`
  display: flex;
  width: 93%;
  margin: auto;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
  border: 2px solid red;
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid blue;
`;
