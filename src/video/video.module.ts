import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from '../comment/comment.module';
import { ConfigModule } from '../common/config/config.module';
import { LoggerService } from '../common/logger/logger.service';
import { User } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { VideoController } from './video.controller';
import { Video } from './video.entity';
import { VideoService } from './video.service';

@Module({
	imports: [TypeOrmModule.forFeature([User, Video]), ConfigModule, CommentModule, UserModule],
	providers: [VideoService, LoggerService, { provide: 'LOGGER_CONTEXT', useValue: VideoService.name }],
	controllers: [VideoController],
	exports: [VideoService],
})
export class VideoModule {}
