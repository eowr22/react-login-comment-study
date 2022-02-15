import styled from "styled-components";
import { useState, useRef } from "react";

const Container = styled.div`
  display: flex;
`;

const LoginInput = styled.input``;

const LoginBtn = styled.button``;

function Header({ setLogin, id, checkLogin }) {
  const inputRef = useRef("");
  const [input, setInput] = useState("");

  const onLogin = () => {
    if (input === "") {
      inputRef.current.focus();
    } else if (!inputRef.current) {
      // logout
      setLogin("");
      setInput("");
    } else {
      // login
      setLogin(inputRef.current.value);
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container>
      {checkLogin === false ? (
        <LoginInput ref={inputRef} onChange={onChange} type="text" />
      ) : (
        id
      )}
      <LoginBtn onClick={onLogin}>
        {checkLogin === false ? "Log In" : "Log out"}
      </LoginBtn>
    </Container>
  );
}

export default Header;
