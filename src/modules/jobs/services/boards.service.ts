import httpService from "../../shared/services/http.service";
import { Board } from "../models/Board.model";

const endpoint = '/boards';

const getBoards=(): Promise<Board[]> => httpService
.get<Board[]>(`${endpoint}`);

/*
function fetchBoards(){
  fetch(`${process.env.REACT_APP_API_URL}/boards`)
  .then(response => response.json())
  .catch(error =>console.log(error));
} 
*/
export default {
  getBoards,
};