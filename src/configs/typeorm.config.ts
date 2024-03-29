import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true // 애플리케이션이 다시 실행할 때 Entity 안에서 수정된 컬럼의 길이, 타입 변경 값등을 해당 테이블을 Drop한 후 다시 생성해준다.
}