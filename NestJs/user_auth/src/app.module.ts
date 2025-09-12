import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; //
import { UsersModule } from './users/users.module';  // Import UsersModule

@Module({
  imports: [
 
     MongooseModule.forRoot('mongodb://localhost:27017/nestjs-auth'),
     UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
