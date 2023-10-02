import React from 'react';
import Nav from './components/Nav';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <>
    <AuthContextProvider>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/account' element={
        <ProtectedRoute>
          <Account/>
        </ProtectedRoute> } />
      </Routes>
    </AuthContextProvider>
    </>
  );
};

export default App;
