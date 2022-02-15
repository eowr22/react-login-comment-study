import styled from "styled-components";

const Container = styled.div``;

const Input = styled.textarea`
`;

const CommentBtn = styled.button``;

function InputComment({ checkLogin }) {
  return (
    <Container>
      <Input disabled={!checkLogin}/>
      <CommentBtn>Tweet</CommentBtn>
    </Container>
  );
}

export default InputComment;
