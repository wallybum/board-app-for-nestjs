import { DataSource, EntityRepository, Repository } from "typeorm";
import { Board } from "./board-entity";
import { Injectable } from "@nestjs/common";

// TypeORM 0.3.0 부터는 @EntityRepository가 Deprecated 됨.
@EntityRepository(Board)
export class BoardRepository extends Repository<Board>{
     
}

// @Injectable()
// export class BoardRepository extends Repository<Board>{
//      constructor(dataSource : DataSource){
//         super(Board, dataSource.createEntityManager());
//      }
// }