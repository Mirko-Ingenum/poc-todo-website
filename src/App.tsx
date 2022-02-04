import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import jobsService from './modules/jobs/services/jobs.service';
import boardsService from './modules/jobs/services/boards.service';
import Boards from './modules/jobs/components/Boards';
import BoardId from './modules/jobs/components/BoardId';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h3>Board id :<BoardId/></h3>
        <table>
          <tbody>
            <tr>
              <td>Todo</td>
              <td>Doing</td>
              <td>Done</td>
            </tr>
            <tr>
              <td><Boards /></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );

}

export default App;
