import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Museums from './components/pages/Museums/Museums';
import Footer from './components/Footer/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_req, { header }) => {
  const token = localStorage.getItem("id_token")
  return { headers: { ...header, authorization: token ? `Bearer ${token}` : "" } }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header></Header>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/museums'
            element={<Museums />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
