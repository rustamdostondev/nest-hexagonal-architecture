import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { AllExceptionFilter } from './infrastructure/common/filter/exception.filter';
import { LoggerService } from './infrastructure/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const PORT = 3000;

  // Filter
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  await app.listen(PORT, () => {
    console.log('Server url : http://localhost:' + PORT);
  });
}
bootstrap();
