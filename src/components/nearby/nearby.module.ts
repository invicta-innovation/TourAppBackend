import { Module } from '@nestjs/common';
import { NearbyService } from './nearby.service';
import { NearbyController } from './nearby.controller';

@Module({
  providers: [NearbyService],
  controllers: [NearbyController]
})
export class NearbyModule {}
