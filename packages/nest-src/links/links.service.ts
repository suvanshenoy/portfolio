import { Injectable } from "@nestjs/common";
import { Links, Prisma } from "../prisma/generated/prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class LinksService {
	constructor(private prismaService: PrismaService) { }

	async link(linksWhereInput: Prisma.LinksWhereInput): Promise<Links | null> {
		return this.prismaService.links.findFirst({
			where: linksWhereInput,
		});
	}

	async links(): Promise<Links[]> {
		return this.prismaService.links.findMany();
	}
}
