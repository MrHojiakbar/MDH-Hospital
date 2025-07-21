import { SetMetadata } from "@nestjs/common";
import { userRole } from "@prisma/client";



export const ROLES_KEY = 'ROLES';

export const Roles = (roles: userRole[]) => SetMetadata(ROLES_KEY, roles);