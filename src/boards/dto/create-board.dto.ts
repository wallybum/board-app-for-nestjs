import { IsNotEmpty } from "class-validator";

/*
 DTO는 Class와 Interface 둘 다 사용 가능하나, NextJS는 Class 로 만들 것을 권고.
*/
export class CreateBoardDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string;
}