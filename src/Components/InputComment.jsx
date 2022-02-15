import styled from "styled-components";
import { useRef } from "react";

const Container = styled.div``;

const Input = styled.textarea``;

const CommentBtn = styled.button``;

function InputComment({ id, checkLogin, addComment }) {
  const inputRef = useRef(null);

  const onClick = () => {
    const date = new Date();

    const input = {
      id: id,
      content: inputRef.current.value,
      date: `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`,
    };
    addComment(input);
    inputRef.current.value = "";
  };

  return (
    <Container>
      <Input ref={inputRef} disabled={!checkLogin} />
      <CommentBtn onClick={onClick}>Tweet</CommentBtn>
    </Container>
  );
}

export default InputComment;
