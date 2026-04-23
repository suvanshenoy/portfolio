import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { LinksController } from "./links.controller";
import { LinksService } from "./links.service";

@Module({
	providers: [LinksService, PrismaService],
	controllers: [LinksController],
})
export class LinksModule {}
