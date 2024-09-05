import React, { useEffect, useState, useContext } from 'react';
import { supabase } from './supabaseClient.js';
import { MyContext } from './components/Context.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'
import { ClipLoader } from 'react-spinners';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import PublicChat from './components/PublicChat.jsx';
const App = () => {
  const { user, setUser, session, setSession } = useContext(MyContext);
  const [loading, setLoading] = useState(true); // Add loading state to wait for session check

  useEffect(() => {
   
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (session) {
        setUser(session.user);
        setSession(session);
      }
      setLoading(false); 
    };

    checkSession();
  }, [setUser, setSession]);


  if(loading){
    <div className=' flex justify-center mt-40'>
      <ClipLoader/>
    </div>
  }

 
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={user ? <Navigate to='/home' /> : <Signup />}/>
        <Route path='/login' element={user ? <Navigate to='/home' /> : <Login />} />
        <Route path='/chat' element={user ? <PublicChat/> : <Navigate to='/login' />} />
        <Route path='/home' element={user?<Home/>:<Navigate to='/login' />}/>
        
      </Routes>
    </Router>
  );
};

export default App;
