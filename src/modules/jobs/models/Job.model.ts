import { Board } from "./Board.model";

export default interface Job{
    id: string;
    title: string;
    date: Date;
    description: string;
    board: Board;
}