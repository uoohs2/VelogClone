import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { history } from "../../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../../redux/modules/post";
import { actionCreators as imageActions } from "../../redux/modules/image";
import { IoMdImage } from "react-icons/io";
import { MdLink } from "react-icons/md";
import { BsCode } from "react-icons/bs";

const Edit = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef(null);
  const preview = useSelector((state) => state.image.preview);
  const posts = useSelector((state) => state.post.list);
  const post_id = props.match.params.id;
  let post = posts.find((p) => p._id === post_id);
  let postId = post.postId;


  const [titles, setTitles] = React.useState(posts.title);
  const [contents, setContents] = React.useState(posts.content);
  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const changeTitle = (e) => {
    setTitles(e.target.value);
  };

  const selectFile = (e) => {

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const is_uploading = useSelector((state) => state.image.uploading);

  const edit_post = () => {
    const file = fileInput.current.files[0];

    const formData = new FormData();

    formData.append("title", titles);
    formData.append("image", file);
    formData.append("content", contents);
    return dispatch(postActions.editPostDB(postId, formData));
  };

  return (
    <React.Fragment>
      <Container>
        <Wrapper>
          <Title
            name="title"
            value={titles}
            placeholder="제목을 입력하세요"
            onChange={changeTitle}
          ></Title>
          <Line />

          <HashTagWrapper>
            <Input1 type="text" placeholder="태그를 입력하세요" />
            <Wrapper1>
              <MdLink />{" "}
              <label htmlFor="selectFile">
                <IoMdImage />
              </label>
              <input
                id="selectFile"
                disabled={is_uploading}
                type="file"
                ref={fileInput}
                onChange={selectFile}
                style={{ display: "none" }}
              />
              <BsCode />
            </Wrapper1>
            {preview && (
              <AspectOutter>
                <AspectInner src={preview ? preview : null}></AspectInner>
              </AspectOutter>
            )}
            <Input2
              name="content"
              value={contents}
              type="text"
              placeholder="당신의 이야기를 적어보세요..."
              onChange={changeContents}
            />
          </HashTagWrapper>
        </Wrapper>
        {/* editor는 토스트 ui사용 */}
      </Container>
      <Footer>
        <button
          className="exit"
          onClick={() => {
            history.goBack();
          }}
        >
          <span>나가기</span>
        </button>
        <Buttons>
          <button className="cancle" onClick={edit_post}>
            임시저장
          </button>
          <button className="submit" onClick={edit_post}>
            출간하기
          </button>
        </Buttons>
      </Footer>
    </React.Fragment>
  );
};

export default Edit;

const Container = styled.div`
  ${(props) => props.theme.border_box};
  padding: 0 48px;
  width: 100vw;
`;

const Footer = styled.div`
  ${(props) => props.theme.border_box};
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  width: 100vw;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: white;
  & button.exit {
    height: 2.5rem;
    padding: 0.5rem 1rem;
    -webkit-box-align: center;
    display: flex;
    align-items: center;
    background: none;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 1.125rem;
    &:hover {
      background-color: rgb(233, 236, 239);
    }
    & span {
      margin-left: 0.5rem;
      font-weight: 450;
    }
  }
`;
const Tag = styled.div`
  ${(props) => props.theme.flex_row};
  color: ${(props) => props.theme.velog_green};
  background-color: ${(props) => props.theme.post_bg};
  padding: 0 0.75rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  font-size: 12px;
  margin: 0.5rem 0;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const Buttons = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  & button {
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0px 1.25rem;
    height: 2.5rem;
    font-size: 1.125rem;
    font-weight: bold;
    outline: none;
  }
  & button.cancle {
    margin-right: 0.75rem;
    background: rgb(233, 236, 239);
    color: rgb(73, 80, 87);
    &:hover {
      background-color: rgb(233, 236, 239, 0.7);
    }
  }
  & button.submit {
    background-color: #12b886;
    &:hover {
      background-color: #63e6be;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  ${(props) => props.theme.border_box}
`;
const Wrapper1 = styled.div`
  width: 200px;
  justify-content: space-between;
  margin: 5px 0px;
  padding: 1rem 0;
  background-color: white;
  font-size: xx-large;
  padding: 1px 1px;
`;

const Line = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.66rem;
  background: rgb(73, 80, 87);
  height: 6px;
  width: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-radius: 1px;
`;
const Title = styled.input`
  font-size: 2.5rem;
  outline: none;
  border: none;
  font-weight: bold;
  padding: 30px 0px 0px 0px;
  width: 100%;
  ${(props) => props.theme.border_box}
`;

const HashTagWrapper = styled.div`
  ${(props) => props.theme.flex_row};
  flex-wrap: wrap;
  justify-content: flex;
  align-items: center;
  display: grid;
`;

const Input1 = styled.input`
  outline: none;
  border: none;
  line-height: 1.5rem;
  font-size: 1rem;
`;

const Input2 = styled.input`
  outline: none;
  border: none;
  line-height: 1.5rem;
  font-size: 1rem;
  width: 50vw;
  margin: 10px 0px;
  white-space: normal;
`;

const AspectOutter = styled.div`
  width: 30%;
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-repeat: no-repeat;
`;
