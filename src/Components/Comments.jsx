import styled from "styled-components";
import { nanoid } from "nanoid";
import { useComment } from "../Provider/CommentProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 15px;
  background-color: cornflowerblue;
  width: 100%;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 18vh;
  background-color: #ffffff;
  margin-bottom: 1rem;
  border-radius: 15px;
  padding: 1rem;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 2rem;
`;

const Content = styled.div`
  width: 100%;
  font-size: 1.2rem;
  height: 100vh;
  overflow: hidden;
`;

const DeleteBtn = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

function Comments() {
  const { id, comments, deleteComment } = useComment();

  return (
    <>
      {comments.length !== 0 ? (
        <Container>
          {comments.map((v, i) => (
            <ItemBox key={nanoid()}>
              <CommentBox>
                <Name>{v.id}</Name>
                <Content>{v.content}</Content>
                <div>{v.date}</div>
              </CommentBox>
              {id === v.id ? (
                <DeleteBtn onClick={() => deleteComment(i)}>❌</DeleteBtn>
              ) : null}
            </ItemBox>
          ))}
        </Container>
      ) : null}
    </>
  );
}

export default Comments;
