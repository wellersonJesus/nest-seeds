import { ConfigService, ConfigModule } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: { origin: '*' } });

  const configService = app.get(ConfigService);
  ConfigModule.forRoot({
    isGlobal: true,
  });
  const port = process.env.PORT;

  await app.listen(port, () =>
    console.log(`
     🚀🚀🚀 API Data-Process-Consumer Listening at :${port}`),
  );
}
bootstrap();
