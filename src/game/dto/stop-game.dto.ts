import { Type } from "class-transformer";
import { IsDate, IsInt, IsString } from "class-validator";

export class StopGame {

    @IsDate()
    @Type(() => Date)
    schedule: Date
    
}