import './App.css';
import {useState} from 'react';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import Signup from './components/pages/Signup/Signup';
import Museums from './components/pages/Museums/Museums';

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
   <>
   <Header changePageFunction={changePageFunction}></Header>
   {render()}
   </>
    
  );
}

export default App;
