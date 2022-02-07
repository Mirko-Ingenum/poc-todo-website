import React, { useEffect, useState } from 'react';
import { Board } from '../models/Board.model';
import boardsService from '../services/boards.service';
import jobsService from '../services/jobs.service';
import Jobs from './Jobs';

const Boards = () => {
  const [boards, setBoards] = useState<Board[]>([]);

  const getBoards = async () => {
    const valueApi = await boardsService.getBoards();
    setBoards(valueApi);
  }

  useEffect(() => {
    getBoards();
  }, []);

  return (
    <div>
      {boards.map((board) => (
        
        <div>
          <h3>Board id : {board.id}</h3>
          <h3>{board.label}</h3>
          
          <div>
            <Jobs jobs={board.jobs} />
          </div>
        </div>
        
      ))}
    </div>
  );
}


export default Boards;


