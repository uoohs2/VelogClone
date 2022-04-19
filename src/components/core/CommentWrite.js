import React from "react";

import styled from "styled-components";

const CommentWrite = () => {
  return (
    <Box>
      <h4 className="Count">8개의 댓글</h4>
      <input className="int" placeholder="댓글을 작성하세요" />
      <button className="btn">댓글 작성</button>
    </Box>
  );
};

export default CommentWrite;

const Box = styled.div`
  background-color: #ffffff;
  background-position: 0% 0%;
  color: #212529;
  height: 158px;
  width: 768px;
  margin: 0px auto;
  display: block;
  margin-top: 100px;
  .Count {
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    text-decoration: none solid rgb(33, 37, 41);
    word-spacing: 0px;
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #212529;
    height: 27px;
    width: 768px;
    margin: 24px 0 16px 0;
    display: block;
    margin-bottom: 10px;
  }
  .int {
    font-size: 16px;
    line-height: 28px;
    text-decoration: none solid rgb(33, 37, 41);
    white-space: pre-wrap;
    word-spacing: 0px;
    background-color: #ffffff;
    background-position: 0% 0%;
    color: #212529;
    height: 98px;
    width: 100%;
    border: 1px solid #f1f3f5;
    margin: 0 0 24px 0;
    padding: 16px 16px 24px 16px;
    min-height: 98px;
    display: inline-block;
    overflow: auto;
    cursor: text;
    box-sizing: border-box;
    word-wrap: break-word;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .btn {
    font-size: 16px;
    font-weight: 700;
    text-decoration: none solid rgb(255, 255, 255);
    text-align: center;
    word-spacing: 0px;
    background-color: #20c997;
    background-position: 0% 0%;
    color: #ffffff;
    height: 32px;
    width: 109.625px;
    padding: 5px 20px 0 20px;
    margin-left: 655px;
    min-height: auto;
    min-width: auto;
    display: flex;
    cursor: pointer;
    box-sizing: border-box;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
