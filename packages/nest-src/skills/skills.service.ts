import { Injectable } from '@nestjs/common';
import { Prisma, Skills } from "../prisma/generated/prisma/client";
import { PrismaService } from "../prisma.service";


@Injectable()
export class SkillsService {
  constructor(private prismaService: PrismaService) { }

  async skill(skillsWhereInput: Prisma.SkillsWhereInput): Promise<Skills | null> {
    return this.prismaService.skills.findFirst({
      where: skillsWhereInput,
    });
  }

  async skills(): Promise<Skills[]> {
    return this.prismaService.skills.findMany();
  }
}
