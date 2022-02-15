import InputComment from "./InputComment";
import styled from "styled-components";
import Comments from "./Comments";

const Container = styled.div``;

function CommentBoard({ checkLogin }) {
  return (
    <Container>
      <InputComment checkLogin={checkLogin}/>
      <Comments />
    </Container>
  );
}

export default CommentBoard;
