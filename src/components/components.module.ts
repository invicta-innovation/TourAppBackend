import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HistoryModule } from './history/audio.module';

@Module({
  imports: [UsersModule,HistoryModule]
})
export class ComponentsModule {}
