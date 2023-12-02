import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { KnexConfigModule } from './infrastructure/config/knex/knex.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './infrastructure/config/environment-config/environment-config.validation';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';

@Module({
  imports: [EnvironmentConfigModule, KnexConfigModule, LoggerModule, ExceptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
