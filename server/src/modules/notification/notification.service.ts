import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma";

@Injectable()
export class NotificationService {
    constructor(private readonly prisma:PrismaService) {}
}