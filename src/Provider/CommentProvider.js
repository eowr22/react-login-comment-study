import { createContext, useContext, useState } from "react";

const InfoContext = createContext();
export const useComment = () => useContext(InfoContext);

export default function CommentProvider({ children }) {
  const [id, setId] = useState("");
  const [comments, setComments] = useState([]);

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
      value={{ id, setId, comments, addComment, deleteComment }}
    >
      {children}
    </InfoContext.Provider>
  );
}
