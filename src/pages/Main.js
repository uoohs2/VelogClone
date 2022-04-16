import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import post from "../redux/modules/post";
import { useEffect } from "react";
import { actionCreators as postActions } from "../redux/modules/post";
import {GoHeart} from 'react-icons/go';
const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <Responsive>
        <Bigbox>
          {post_list.map((post, i) => (
            <Midbox key={post + i}>
              <Box src={post.image} />
              <Box1>
                <H4>{post.title}</H4>
                <P>{post.content}</P>
              </Box1>

              <Box2>
                {post.comment}
                {post.date}
              </Box2>
              <Box3> {post.userName} 이성영 <GoHeart size="20"/>  </Box3>
            </Midbox>
          ))}
        </Bigbox>
      </Responsive>
    </React.Fragment>
  );
};

export default Main;

const Box = styled.div`
  height: 167px;
  width: 320px;
  /* position: absolute; */
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: block;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;
const Box1 = styled.div`
  font-size: 16px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  background-color: #ffffff;
  background-position: 0% 0%;
  position: color;
  height: 115px;
  width: 288px;
  min-height: auto;
  min-width: auto;
  display: block;
  cursor: pointer;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
`;

const H4 = styled.p`
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none solid rgb(33, 37, 41);
  white-space: nowrap;
  word-spacing: 0px;
  background-color: #ffffff;
  height: 24px;
  width: 288px;
  margin: 0 0 4px 0;
  display: block;
  overflow: hidden;
  cursor: pointer;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  text-overflow: ellipsis;
`;
const P = styled.p`
  font-size: 14px;
  line-height: 21px;
  text-decoration: none solid rgb(73, 80, 87);
  word-spacing: 0px;
  background-color: #ffffff;
  height: 63px;
  width: 288px;
  margin: 0 0 24px 0;
  display: -webkit-box;
  overflow: hidden;
  cursor: pointer;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  text-overflow: ellipsis;
  word-wrap: break-word;
  
`;
const Box2 = styled.div`
  height: 18px;
  width: 288px;
  min-height: auto;
  min-width: auto;
  display: block;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  background-color: #ffffff;
`;

const Box3 = styled.div`
  height: 45px;
  width: 320px;
  border-top: 1px solid #f1f3f5;
  padding: 10px 16px 10px 16px;
  min-height: auto;
  min-width: auto;
  display: flex;
  background-color: #ffffff;
  font-size: 12px;
  line-height: 18px;
  text-decoration: none solid rgb(33, 37, 41);
  word-spacing: 0px;
  cursor: pointer;
  justify-content: space-between;
`;

const Midbox = styled.div`
  background-color: #f8f9fa;
  background-position: 0% 0%;
  position: color;
  height: 332px;
  width: 320px;
  padding: 16px 16px 16px 16px;
  min-height: auto;
  min-width: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;

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
  ${(prop) => prop.theme.responsiveContainer};
  display: flex;
  border: 2px solid black;
  height: 3272px;
  width: 1056px;
  margin: -16px -16px -16px -16px;
  background-color: #f8f9fa;
  background-position: 0% 0%;
  position: color;
  transform: none;
  transition: all 0s ease 0s;

  box-sizing: border-box;
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
