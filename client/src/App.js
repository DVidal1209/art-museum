import './App.css';
import { useState } from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context"

import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Museums from './components/pages/Museums/Museums';

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
  const [page, setPage] = useState('home')
  const render = () => {
    if (page === 'home') {
      return <Home></Home>
    }
    else if (page === 'login') {
      return <Login></Login>
    }
    else if (page === 'signup') {
      return <Signup></Signup>
    }
     else if (page === 'museums') {
      return <Museums></Museums>
    }
  }

  const changePageFunction = (someString) => {
    setPage(someString)
  }

  return (
    <ApolloProvider client={client}>
      <>
        <Header changePageFunction={changePageFunction}></Header>
        {render()}
      </>
    </ApolloProvider>

  );
}

export default App;
