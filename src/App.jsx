import Header from "./Components/Header";
import CommentBoard from "./Components/CommentBoard";
import CommentProvider from "./Provider/CommentProvider";

function App() {
  return (
    <CommentProvider>
      <Header />;
      <CommentBoard />;
    </CommentProvider>
  );
}

export default App;
