import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { userRole } from "@prisma/client";
import { Request } from "express";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decaratores";

@Injectable()
export class CheckRoleGuard implements CanActivate{
  constructor(private readonly reflector: Reflector){};

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request & {role?: userRole, userId: string}>();

    const roles = this.reflector.getAllAndOverride<userRole[]>(ROLES_KEY , [
      context.getHandler(), context.getClass(),
    ]);

    let userR: any = request.role;
    if(!roles || !roles.includes( userR )){
      throw new ForbiddenException('You cannot perform this action');
    }

    return true
  }
}