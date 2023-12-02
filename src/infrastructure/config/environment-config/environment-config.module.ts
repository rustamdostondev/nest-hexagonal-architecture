import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './environment-config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', `.env.${process.env.NODE_ENV}`], // Load appropriate env file
      validate,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {}
