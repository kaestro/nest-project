import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards() {
        return this.boards;
    }

    createBoard(CreateBoardDto: { title: string; description: string; }) {
        const board: Board = {
            id: uuid(),
            title: CreateBoardDto.title,
            description: CreateBoardDto.description,
            status: BoardStatus.PUBLIC,
        };
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        return this.boards.find((board) => board.id === id);
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id: string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }

}
