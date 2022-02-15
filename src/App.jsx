import Header from "./Components/Header";
import CommentBoard from "./Components/CommentBoard";
import {useState} from "react";

function App() {
  const [checkLogin, setCheckLogin] = useState(false);
  const [id, setId] = useState("");

  const setLogin = (_id) => {
    if (!checkLogin) {
      setId(_id);
    } else {
      setId("");
    }
    setCheckLogin((prev) => !prev);
  }
  return (
    <>
      <Header setLogin={setLogin} id={id} checkLogin={checkLogin}/>
      <CommentBoard checkLogin={checkLogin}/>
    </>
  );
}

export default App;
