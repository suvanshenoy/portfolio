import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

@Module({
  providers: [SkillsService, PrismaService],
  controllers: [SkillsController]
})
export class SkillsModule { }
