import { PartialType } from "@nestjs/mapped-types";
import { CreateMoiveDTO } from "./create-movie.dto";

export class UpdateMoiveDTO extends PartialType(CreateMoiveDTO){} //npm i @nestjs/mapped-types : dto 타입을 변환시키고 사용할 수 있게 하는 패키지