import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HistoryModule } from './history/audio.module';

@Module({
  imports: [UsersModule,HistoryModule]
import { NearbyModule } from './nearby/nearby.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, NearbyModule,AuthModule]

})
export class ComponentsModule {}
