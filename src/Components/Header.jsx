import styled from "styled-components";
import { useState, useRef } from "react";

const Container = styled.div`
  display: flex;
`;

const LoginInput = styled.input``;

const LoginBtn = styled.button``;

function Header({ setLogin, id, checkLogin }) {
  const inputRef = useRef("");

  const onLogin = () => {
    if (inputRef.current == null) {
      setLogin('');
    } else {
      setLogin(inputRef.current.value);
    }
  };

  return (
    <Container>
      {checkLogin === false ? <LoginInput ref={inputRef} type="text" /> : id}
      <LoginBtn onClick={onLogin}>
        {checkLogin === false ? "Log In" : "Log out"}
      </LoginBtn>
    </Container>
  );
}

export default Header;
