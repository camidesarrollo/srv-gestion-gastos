import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import configuration from './config/configuration.js';
import { validationSchema } from './config/validation.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV ?? 'development'}`,
      load: [configuration],
      validationSchema,
      validationOptions: {
        libraryOptions: {
          abortEarly: false,
        },
      },
    }),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        appKey: config.getOrThrow<string>('observe.appKey'),
        appSecret: config.getOrThrow<string>('observe.appSecret'),
        serviceId: 'srv-control-gastos',
      }),
    }),
  ],
})
export class CoreModule {}
