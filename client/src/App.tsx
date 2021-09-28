import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import './App.css';
import CreateUser from "./Components/CreateUser";
import ListOfUsers from './Components/ListOfUsers';
import UpdatePassword from './Components/UpdatePassword';

function App() {
  const client = new ApolloClient({
    // the server where graphql is hosted
    uri: 'http://localhost:3001/graphql',
    // keep the queries in cache so that it is faster
    cache: new InMemoryCache(),
  });

  return (
    <>
    <ApolloProvider client={client}>
      <CreateUser/>
      <ListOfUsers/>
      <UpdatePassword/>
    </ApolloProvider>
    </>
  );
}

export default App;

