import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { HistoryModule } from './history/history.module';
import { VideoModule } from './video/video.module';


@Module({
  imports: [UsersModule,HistoryModule, VideoModule]
})
export class ComponentsModule {}
