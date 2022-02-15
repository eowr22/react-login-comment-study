import styled from "styled-components";
import {nanoid} from "nanoid";

const Container = styled.div``;

const CommentList = styled.ul``;

const Item = styled.li``;

const Name = styled.div``;

const Content = styled.div``;

const DeleteBtn = styled.button``;

function Comments({ id, comments }) {
  return (
    <Container>
      <CommentList>
        {comments.map((v, i) => (
          <Item key={nanoid()}>
            <Name>{v.id}</Name>
            <Content>{v.content}</Content>
            <div>{v.date}</div>
            {id === v.id ? <DeleteBtn>X</DeleteBtn> : null}
          </Item>
        ))}
      </CommentList>
    </Container>
  );
}

export default Comments;
