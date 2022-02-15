import InputComment from "./InputComment";
import styled from "styled-components";
import Comments from "./Comments";
import { useState } from "react";

const Container = styled.div``;

function CommentBoard({ id, checkLogin }) {
  const [comments, setComments] = useState([]);

  const addComments = (newComment) => {
    setComments((curArr) => {
      return [...curArr, newComment];
    });
  };

  return (
    <Container>
      <InputComment id={id} checkLogin={checkLogin} addComment={addComments} />
      <Comments id={id} comments={comments} />
    </Container>
  );
}

export default CommentBoard;
