import { ConfigModule } from '@nestjs/config';
import appConfig from './appConfig';

export const configModule = ConfigModule.forRoot({
  load: [appConfig],
  isGlobal: true,
  expandVariables: true,
});
