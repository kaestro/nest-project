import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [ChatModule, BoardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
