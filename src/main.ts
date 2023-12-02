import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const PORT = 3000;
  await app.listen(PORT, () => {
    console.log('Server url : http://localhost:' + PORT);
  });
}
bootstrap();
