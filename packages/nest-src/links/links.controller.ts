import { Controller, Get, Param } from '@nestjs/common';
import { Links } from '../prisma/generated/prisma/client';
import { LinksService } from './links.service';

@Controller()
export class LinksController {
  constructor(private readonly linksService: LinksService) { }

  @Get("link/:name")
  async getLinkByName(@Param("name") name: string): Promise<Links | null> {
    return this.linksService.link({ name: name });
  }

  @Get("links")
  async getAllLinks(): Promise<Links[]> {
    return this.linksService.links();
  }
}
