import { Controller, Get, Param } from '@nestjs/common';
import { Skills } from '../prisma/generated/prisma/client';
import { SkillsService } from './skills.service';

@Controller()
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) { }

  @Get("skill/:name")
  async getSkillByName(@Param("name") name: string): Promise<Skills | null> {
    return this.skillsService.skill({ name: name });
  }

  @Get("skills")
  async getAllSkills(): Promise<Skills[]> {
    return this.skillsService.skills();
  }
}
