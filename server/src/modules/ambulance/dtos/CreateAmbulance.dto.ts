import { ApiProperty } from "@nestjs/swagger";
import { ambulanceStatus } from "@prisma/client";
import { IsEnum, IsString } from "class-validator";

export class CreateAmbulance {
    @ApiProperty({type:'string',example:'A123BC',required:true})
    @IsString()
    carNumber:string;

    @ApiProperty({type:'string',description:'Example one of Enum',example:ambulanceStatus.PENDING,required:true})
    @IsString()
    @IsEnum(ambulanceStatus)
    status:ambulanceStatus;

    @ApiProperty({type:'string',example:'+998 98 765 43 21',required:true})
    @IsString()
    phoneNumber:string;
}