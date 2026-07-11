import { Module } from "@nestjs/common";
import { AppConfigModule } from "./config/config.module";
import { LinksModule } from "./links/links.module";
import { SkillsModule } from "./skills/skills.module";

@Module({
	imports: [LinksModule, SkillsModule, AppConfigModule],
})
export class AppModule { }
