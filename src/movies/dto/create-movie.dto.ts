//dto = data transfer object
//typescript를 쓰면 타입 보호도 되고, nestjs를 쓰면 타입 유효성 검사 또한 실시간으로 편리하게 할 수 있다. 이게 express와 다른점
import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateMoiveDTO{
    @IsString()
    readonly title : string;

    @IsNumber()
    readonly year : number;

    @IsOptional()
    @IsString({each: true})
    readonly genres : string[];
}