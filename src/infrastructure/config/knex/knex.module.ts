import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { KnexConfig } from './knex.config';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [
    {
      provide: 'KNEX_MODULE_OPTIONS', // Provide a token to inject Knex module options
      useFactory: (config: EnvironmentConfigService) => KnexConfig(config),
      inject: [EnvironmentConfigService],
    },
  ],
  exports: ['KNEX_MODULE_OPTIONS'], // Export the token for injection in other modules
})
export class KnexConfigModule {}
