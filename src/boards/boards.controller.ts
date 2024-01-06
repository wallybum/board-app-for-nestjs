import { Controller } from '@nestjs/common';
import { get } from 'http';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService){}
}
