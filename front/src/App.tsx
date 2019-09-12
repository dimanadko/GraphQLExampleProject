import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import "./App.css";

import { BookItem } from "./components";
import Books from "./pages/Books";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <h1>BookApp</h1>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/books" component={Books} />
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
