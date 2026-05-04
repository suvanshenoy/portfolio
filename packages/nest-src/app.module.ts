import { Module } from "@nestjs/common";
import { AppConfigModule } from "./config/config.module";
import { LinksModule } from "./links/links.module";

@Module({
	imports: [LinksModule, AppConfigModule],
})
export class AppModule {}
