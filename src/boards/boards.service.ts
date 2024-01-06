import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    // Board[] 는 Return Type
    getAllBoards(): Board[] {
        return this.boards;
    }
}
