import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateBoardDto } from './boards.CreateBoardDto';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor (private readonly boardsService: BoardsService) {}

    @Get('/')
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }

    @Post('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
