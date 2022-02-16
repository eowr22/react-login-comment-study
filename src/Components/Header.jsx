import styled from "styled-components";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #7eb7be;
  height: 5vh;
  padding: 10px;
  margin-bottom: 2rem;
`;

const LoginInput = styled.input`
  margin-right: 10px;
`;

const LoginBtn = styled.button`
  border-style: none;
  border-radius: 7px;
  cursor: pointer;
`;

function Header({ setLogin, id, checkLogin }) {
  const inputRef = useRef("");

  const onLogin = () => {
    if (!inputRef.current) {
      // logout
      setLogin("");
    } else if (inputRef.current.value === "") {
      inputRef.current.focus();
    } else {
      // login
      setLogin(inputRef.current.value);
    }
  };

  const Id = styled.div`
    font-size: 1.3rem;
    margin-top: 4px;
    margin-right: 10px;
    color: white;
  `;

  return (
    <Container>
      {checkLogin === false ? (
        <LoginInput ref={inputRef} type="text" />
      ) : (
        <Id>{id}</Id>
      )}
      <LoginBtn onClick={onLogin}>
        {checkLogin === false ? "Log In" : "Log out"}
      </LoginBtn>
    </Container>
  );
}

export default Header;
