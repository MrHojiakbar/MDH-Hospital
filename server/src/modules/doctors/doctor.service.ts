import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma";

@Injectable()
export class DoctorService {
  constructor(private readonly prisma: PrismaService){};


}