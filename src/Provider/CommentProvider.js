import { createContext, useContext, useEffect, useState } from "react";

const InfoContext = createContext();
export const useComment = () => useContext(InfoContext);

export default function CommentProvider({ children }) {
  const [id, setId] = useState("");
  const [comments, setComments] = useState([]);

  const saveId = (_id) => {
    localStorage.setItem("id", JSON.stringify(_id));
    setId(_id);
  };

  useEffect(() => {
    const _id = JSON.parse(localStorage.getItem("id"));
    if (_id !== null) {
      setId(_id);
    }
  }, []);

  const addComment = (newComment) => {
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
    <InfoContext.Provider
      value={{ id, saveId, comments, addComment, deleteComment }}
    >
      {children}
    </InfoContext.Provider>
  );
}
