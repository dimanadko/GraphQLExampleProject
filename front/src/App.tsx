import React from "react";

import "./App.css";

import { BookItem } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <h1>BookApp</h1>
      <BookItem
        id="BookId"
        name="BookName"
        genre="BookGenre"
        author={{ name: "BookAuthor", id: "BookAuthorID" }}
      />
    </div>
  );
};

export default App;
