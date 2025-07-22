import { BadRequestException, ForbiddenException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { JsonWebTokenError, JwtService, TokenExpiredError } from "@nestjs/jwt";
import { userRole } from "@prisma/client";


@Injectable()
export class JwtHelper{
  constructor(private readonly jwt: JwtService) {};

  async generateToken(payload: {id: string, role: userRole}){

    const token = await this.jwt.signAsync(payload,{
      secret: process.env.JWT_SECRET_TIME,
      expiresIn: process.env.JWT_SECRET,
    });

    return token;
  }

  async verifyToken(token: string){

    try {
      const secretKey = process.env.JWT_SECRET;
      const openToken = await this.jwt.verifyAsync(token, {secret: secretKey});
      return openToken;
    } catch (error) {
      
      if(error instanceof JsonWebTokenError){
        throw new BadRequestException('Token Not Found');
      }

      if(error instanceof TokenExpiredError){
        throw new ForbiddenException('token time out');
      }

      throw new InternalServerErrorException('erver error');
    }
  }


}