import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';
import { Profile } from './components/Profile';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';

function App() {
  return (

      <div className='container mt-2'>
          <Profile />
          <Education />
          <Experience />
      </div>


  );
}

export default App;
