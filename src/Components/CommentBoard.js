import InputComment from "./InputComment";
import styled from "styled-components";
import Comments from "./Comments";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

function CommentBoard() {
  return (
    <Container>
      <InputComment />
      <Comments />
    </Container>
  );
}

export default CommentBoard;
