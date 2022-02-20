import styled from "styled-components";
import { nanoid } from "nanoid";
import { useComment } from "../Provider/CommentProvider";
import Comment from "./Comment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 15px;
  background-color: cornflowerblue;
  width: 100%;
`;

function Comments() {
  const { comments } = useComment();
  return (
    <>
      {comments.length !== 0 ? (
        <Container>
          {comments.map((v, i) => (
            <Comment
              key={nanoid()}
              id={v.id}
              content={v.content}
              date={v.date}
              index={i}
            />
          ))}
        </Container>
      ) : null}
    </>
  );
}

export default Comments;
