import {Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
// import NavBar from '../components/NavBar';
import Login from './Login';
import Signup from './Signup';

function Start() {
  return (
    <Suspense fallback={(<div>...</div>)}>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>	
          <Route path="/signup" element={<Signup/>}/>	
        </Routes>
      </div>
    </Suspense>
    );
}

export default Start;