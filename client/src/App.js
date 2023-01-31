import './App.css';
import {useState} from 'react';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Signup from './components/Pages/Signup/Signup';


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
  }

  const changePageFunction = (someString) => {
    setPage(someString) 
  }

  return (
   <>
   <Header changePageFunction={changePageFunction}></Header>
   {render()}
   </>
    
  );
}

export default App;
