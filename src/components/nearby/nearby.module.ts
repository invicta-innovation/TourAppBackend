import { Module, HttpModule } from '@nestjs/common';
import { NearbyService } from './nearby.service';
import { NearbyController } from './nearby.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    AuthModule
  ],
  providers: [NearbyService],
  controllers: [NearbyController]
})
export class NearbyModule {}
