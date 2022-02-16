import InputComment from "./InputComment";
import styled from "styled-components";
import Comments from "./Comments";
import { useState } from "react";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

function CommentBoard({ id, checkLogin }) {
  const [comments, setComments] = useState([]);

  const addComments = (newComment) => {
    setComments((cur) => {
      return [...cur, newComment];
    });
  };

  const deleteComment = (index) => {
    setComments((cur) => {
      return cur.filter((_, i) => i !== index);
    });
  };

  return (
    <Container>
      <InputComment id={id} checkLogin={checkLogin} addComment={addComments} />
      <Comments id={id} comments={comments} deleteComment={deleteComment} />
    </Container>
  );
}

export default CommentBoard;
