import styled from "styled-components";
import { useState, useRef } from "react";

const Container = styled.div`
  display: flex;
`;

const LoginInput = styled.input``;

const LoginBtn = styled.button``;

function Header() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [id, setId] = useState("");
  const inputRef = useRef("");

  const onLogin = () => {
    if (!checkLogin) {
      setId(inputRef.current.value);
    } else {
      setId("");
    }
    setCheckLogin((prev) => !prev);
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
