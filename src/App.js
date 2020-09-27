import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./Component/User/UserList"
import Header from "./Component/Header/Header"
function App() {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
}

export default App;
