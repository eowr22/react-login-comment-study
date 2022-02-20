import styled from "styled-components";
import { useComment } from "../Provider/CommentProvider";
import { useEffect, useRef } from "react";

const Box = styled.div`
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

function Comment({ id, content, date, index }) {
  const { id: loginId, deleteComment, setComments, commentsRef } = useComment();

  useEffect(() => {
    let cnt = 0;
    const timer = setInterval(() => {
      console.log("index: ", index, commentsRef.current);
      cnt++;
      if (cnt > 4) {
        cnt = 0;
        clearInterval(timer);
        setComments((cur) => {
          const temp = [...cur];
          temp.shift();
          return temp;
        });
      }
    }, 1000);
  }, []);

  return (
    <Box>
      <CommentBox>
        <Name>{loginId}</Name>
        <Content>{content}</Content>
        <div>{date}</div>
      </CommentBox>
      {loginId === id ? (
        <DeleteBtn onClick={() => deleteComment(index)}>❌</DeleteBtn>
      ) : null}
    </Box>
  );
}

export default Comment;
