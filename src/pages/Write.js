import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import { history } from "../redux/configureStore";

import { Div, Text } from "../components/ui";

import styled from "styled-components";
import { IoMdImage } from "react-icons/io";
import { MdLink } from "react-icons/md";
import { BsCode } from "react-icons/bs";

const Write = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef(null);
  const preview = useSelector((state) => state.image.preview);
  const posts = useSelector((state) => state.post.list);
  const [post, setPost] = useState({});

  const postId = props.match.params.id;

  const is_edit = postId ? true : false;
  let _post = is_edit ? posts.find((p) => p.id === postId) : null;

  const selectFile = (e) => {
    console.log(e.target.files);

    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  const is_uploading = useSelector((state) => state.image.uploading);
  // computed property names 문법 (키값 동적 할당)
  const handleForm = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  //  폼데이터 콘솔 찍기
  //   for (var pair of formData.entries()) {
  // }
  const createPost = () => {
    if (post.title === null || post.content === null) {
      window.alert("내용을 추가 해주세요");
      return;
    }
    if (fileInput === null) {
      window.alert("이미지를 추가 해주세요");
      return;
    }

    const formData = new FormData();
    if (fileInput.current) {
      formData.append("title", post.title);
      formData.append("content", post.content);
      formData.append("image", fileInput.current.files[0]);
    }
    console.log(formData);
    dispatch(postActions.addPostDB(formData));
    history.push("/");
  };

  //해시태그
  const [tagItem, setTagItem] = React.useState("");
  const [tagList, setTagList] = React.useState([]);

  const onKeyPress = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
    console.log(updatedTagList);
  };

  const deleteTagItem = (e) => {
    const deleteTagItem = e.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList.filter(
      (tagItem) => tagItem !== deleteTagItem
    );
    setTagList(filteredTagList);
  };

  return (
    <React.Fragment>
      <Container>
        <Div>
          <Title
            name="title"
            value={post.title || ""}
            placeholder="제목을 입력하세요"
            onChange={handleForm}
          ></Title>
          <Line />
          <WholeBox>
            <TagBox>
              {tagList.map((tagItem, index) => {
                return (
                  <Div
                    key={index}
                    spaceBetween
                    width="auto"
                    height="30px"
                    lineHeight="20px"
                    margin="0px 0px 10px 10px"
                    borderRadius="30px"
                    backgroundColor="#f8f9fa"
                    cursor="pointer"
                    _onClick={deleteTagItem}
                  >
                    <Text
                      display="flex"
                      justifyContent="space-between"
                      margin="5px"
                      padding="10px"
                      size="16px"
                      color="#12b886"
                    >
                      {tagItem}
                    </Text>
                  </Div>
                );
              })}
              <TagInput
                type="text"
                placeholder="태그를 입력하세요"
                tabIndex={2}
                onChange={(e) => setTagItem(e.target.value)}
                value={tagItem}
                onKeyPress={onKeyPress}
              />
            </TagBox>
          </WholeBox>
          <HashTagWrapper>
            <Wrapper1>
              <MdLink />
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
              value={post.content || ""}
              type="text"
              placeholder="당신의 이야기를 적어보세요..."
              onChange={handleForm}
            />
          </HashTagWrapper>
        </Div>
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
          <button className="cancle">임시저장</button>
          <button
            className="submit"
            onClick={() => {
              createPost();
              dispatch(postActions.addHashTagDB(tagList));
            }}
          >
            출간하기
          </button>
        </Buttons>
      </Footer>
    </React.Fragment>
  );
};

export default Write;

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

// const Wrapper = styled.div`
//   width: 100%;
//   padding: 1rem 0;
//   background-color: white;
//   ${(props) => props.theme.border_box}
// `;

const Wrapper1 = styled.div`
  width: 200px;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 1rem 0;
  background-color: white;
  font-size: xx-large;
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
  /* flex-wrap: wrap; */
  /* justify-content: flex; */
  /* align-items: center; */
  /* display: grid; */
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

// const HashTag = (props) => {
//   const [tagItem, setTagItem] = React.useState("");
//   const [tagList, setTagList] = React.useState([]);

//   const onKeyPress = (e) => {
//     if (e.target.value.length !== 0 && e.key === "Enter") {
//       submitTagItem();
//     }
//   };

//   const submitTagItem = () => {
//     let updatedTagList = [...tagList];
//     updatedTagList.push(tagItem);
//     setTagList(updatedTagList);
//     setTagItem("");
//     console.log(updatedTagList);
//   };

//   const deleteTagItem = (e) => {
//     const deleteTagItem = e.target.parentElement.firstChild.innerText;
//     const filteredTagList = tagList.filter(
//       (tagItem) => tagItem !== deleteTagItem
//     );
//     setTagList(filteredTagList);
//   };

//   return (
//     <WholeBox>
//       <TagBox>
//         {tagList.map((tagItem, index) => {
//           return (
//             <Div
//               key={index}
//               spaceBetween
//               width="auto"
//               height="30px"
//               lineHeight="20px"
//               margin="0px 0px 10px 10px"
//               borderRadius="30px"
//               backgroundColor="#f8f9fa"
//               cursor="pointer"
//               _onClick={deleteTagItem}
//             >
//               <Text
//                 display="flex"
//                 justifyContent="space-between"
//                 margin="5px"
//                 padding="10px"
//                 size="16px"
//                 color="#12b886"
//               >
//                 {tagItem}
//               </Text>
//             </Div>
//           );
//         })}
//         <TagInput
//           type="text"
//           placeholder="태그를 입력하세요"
//           tabIndex={2}
//           onChange={(e) => setTagItem(e.target.value)}
//           value={tagItem}
//           onKeyPress={onKeyPress}
//         />
//       </TagBox>
//     </WholeBox>
//   );
// };

const WholeBox = styled.div`
  height: 50px;
`;

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap;
  width: 700px;
  margin: 15px 0px;
`;

const TagInput = styled.input`
  display: inline-flex;
  margin-left: 5px;
  background: transparent;
  outline: none;
  line-height: 1.5rem;
  font-size: 1.1rem;
  color: #212529;
  cursor: text;
`;
