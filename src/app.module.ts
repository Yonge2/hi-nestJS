import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({//nestjs에서 앱은 여러 개의 모듈로 구성이 되기 때문에 각 모듈마다 나눠놓아야 한다.
        //따라서 app.module은 AppService와 AppController만 가져야 한다.
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
