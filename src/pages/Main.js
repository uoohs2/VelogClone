import React from "react";
import { useSelector, useDispatch } from "react-redux";
import post from "../redux/modules/post";
import { useEffect } from "react";
import { actionCreators as postActions } from "../redux/modules/post";
import { history } from "../redux/configureStore";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import { Div } from "../components/ui";
import { GoHeart } from "react-icons/go";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { GoTriangleDown } from "react-icons/go";

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  const date = post_list.map((cur, idx) => {
    return cur.date;
  });

  console.log(date);

  return (
    <React.Fragment>
      <Responsive>
        <MenuBar>
          <div className="menu">
            <div className="menu0">
              <TrendingUpIcon sx={{ fontSize: 30 }} />
              <div className="menu0_1">트렌딩</div>
            </div>
            <div className="menu1">
              <AccessTimeIcon color="disabled" />
              <div className="menu1_1"> 최신 </div>
            </div>
            <div className="menu2">
              이번 주 <GoTriangleDown />
            </div>
          </div>
          <div className="menu3">
            <MoreVertIcon color="disabled" />
          </div>
        </MenuBar>
        <Bigbox>
          {post_list.map((post, i) => (
            <Div
              key={post + i}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="320px"
              height="332px"
              margin="16px 16px 130px 16px"
              background-color="#f8f9fa"
              _onClick={() => {
                history.push({
                  pathname: "/detail",
                  state: { postId: post },
                });
              }}
            >
              <Box src={post.image} />
              <Box1>
                <H4>{post.title}</H4>
                <P>{post.content}</P>
              </Box1>

              <Box2>
                {post.comment}
                {moment(post.date).fromNow()}
              </Box2>
              <Box3>
                <div className="userinfo">
                  <ImageCircle
                    shape="circle"
                    src="https://velog.velcdn.com/images/syounglee012/profile/153e8e10-0a34-4939-be81-7244fa41347c/social.png"
                  />
                  {post.userName} by 이성영
                </div>{" "}
                <div className="likes">
                  <GoHeart size="20" /> 15
                </div>
              </Box3>
            </Div>
          ))}
        </Bigbox>
      </Responsive>
    </React.Fragment>
  );
};

export default Main;

const MenuBar = styled.div`
  background-color: #f8f9fa;
  background-position: 0% 0%;
  color: #212529;
  height: 48px;
  width: 100%;
  margin: 24px 0 0 0;
  position: relative;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  justify-content: space-between;
  .menu {
    display: flex;
  }
  .menu0 {
    font-size: 18px;
    font-weight: 700;
    background-color: #f8f9fa;
    color: #212529;
    height: 48px;
    width: 112px;
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    padding-top: 15px;
    .menu0_1 {
      padding-top: 6px;
    }
  }
  .menu1 {
    font-size: 18px;
    background-color: #f8f9fa;
    color: #868e96;
    height: 48px;
    width: 80px;
    min-height: auto;
    min-width: auto;
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    padding-top: 15px;
    margin: auto 15px;
    .menu1_1 {
      padding-top: 5px;
    }
  }
  .menu2 {
    font-size: 16px;
    font-weight: 600;
    text-decoration: none solid rgb(73, 80, 87);
    word-spacing: 0px;
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #495057;
    height: 32px;
    width: 96px;
    padding: 0px 8px 0 8px;
    min-height: auto;
    min-width: auto;
    display: flex;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    justify-content: space-evenly;
    margin-top: 12px;
    padding-top: 8px;
  }
  .menu3 {
    padding-top: 15px;
    background-color: #f8f9fa;
  }
`;

const Box = styled.div`
  height: 60%;
  width: 100%;
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
  height: 200px;
  width: 100%;
  min-height: auto;
  min-width: auto;
  display: block;
  cursor: pointer;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
`;
const H4 = styled.p`
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none solid rgb(33, 37, 41);
  white-space: nowrap;
  word-spacing: 0px;
  background-color: #ffffff;
  height: 23%;
  width: 100%;
  margin: 0 0 4px 0;
  display: block;
  overflow: hidden;
  cursor: pointer;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  text-overflow: ellipsis;
`;
const P = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-decoration: none solid rgb(73, 80, 87);
  word-spacing: 0px;
  background-color: #ffffff;
  height: 68%;
  width: 100%;
  margin: 0 0 24px 0;
  display: -webkit-box;
  overflow: hidden;
  cursor: pointer;
  transform: none;
  transition: all 0s ease 0s;
  box-sizing: border-box;
  text-overflow: ellipsis;
  word-wrap: break-word;
  padding-right: 22px;
`;
const Box2 = styled.div`
  height: 10%;
  width: 100%;
  min-height: auto;
  min-width: auto;
  display: block;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-left: 20px;
`;

const Box3 = styled.div`
  height: 15%;
  width: 100%;
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
  box-sizing: border-box;
  .userinfo {
    display: flex;
  }
  .likes {
    display: flex;
  }
`;

const Bigbox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 50px;
`;

const Responsive = styled.div`
  ${(prop) => prop.theme.responsiveContainer};
  display: block;
  height: 3272px;
  width: 92.5%;
  background-color: #f8f9fa;
  background-position: 0% 0%;
  position: color;
  transform: none;
  transition: all 0s ease 0s;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ImageCircle = styled.div`
  min-width: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin: 3px 10px 3px 3px;
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
