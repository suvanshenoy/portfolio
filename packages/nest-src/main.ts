import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix("api");
	app.enableCors({
		origin: [
			"http://localhost:5173",
			JSON.stringify(process.env.PORTFOLIO_FRONTEND_URL),
			"https://portfolio-frontend-xy.vercel.app",
		],
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"],
		credentials: true,
		maxAge: 86400,
	});
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
