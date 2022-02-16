import styled from "styled-components";
import { useRef } from "react";
import { useComment } from "../Provider/CommentProvider";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: space-between;
  background-color: cornflowerblue;
  padding: 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const Input = styled.textarea.attrs((props) => ({
  maxLength: "50",
}))`
  width: 70%;
  border-radius: 10px;
  border-style: none;
  resize: none;
  font-size: 1rem;
`;

const CommentBtn = styled.button`
  width: 25%;
  border-radius: 10px;
  border-style: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

function InputComment() {
  const { id, addComment } = useComment();
  const inputRef = useRef(null);

  const onClick = () => {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
      return;
    }

    const date = new Date();

    const input = {
      id,
      content: inputRef.current.value,
      date: `${date.getFullYear()}. ${
        date.getMonth() + 1
      }. ${date.getDate()}. ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    };
    addComment(input);
    inputRef.current.value = "";
  };
  return (
    <Container>
      <Input ref={inputRef} disabled={!id} />
      <CommentBtn onClick={onClick}>Tweet</CommentBtn>
    </Container>
  );
}

export default InputComment;
