import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import jobsService from './modules/jobs/services/jobs.service';
import boardsService from './modules/jobs/services/boards.service';
import Boards from './modules/jobs/components/Boards';
import AddJob from './modules/jobs/components/AddJob';
import AddJobComponent from './modules/jobs/components/AddJob';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Boards />
       <AddJobComponent/>
      </header>
    </div>
  );

}

export default App;
