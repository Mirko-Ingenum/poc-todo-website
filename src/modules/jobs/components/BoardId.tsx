import React, { useEffect, useState } from 'react';
import { Board } from '../models/Board.model';
import boardsService from '../services/boards.service';
import jobsService from '../services/jobs.service';
import Jobs from './Jobs';

const BoardId = () => {
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
          <h5>{board.id}</h5>
        </div>
      ))}
    </div>
  );
}


export default BoardId;


