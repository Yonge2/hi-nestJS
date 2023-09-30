import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

//nestjs는 기본적으로 express위에서 돌아간다. 그래서 필요에 의해서 req, res객체 를 사용할 수도 있음(컨트롤러에서)
//nestjs는 fastify라는 프레임워크 위에서도 돌아간다. 즉, 두 개의 프레임워크 위에서 돌아간단 소리

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //파이프 : express.js에서의 미들웨어랑 같은 역할이라고 볼 수 있음.
  //npm i class-validator class-transformer => 클래스의 유효성 검사
  app.useGlobalPipes(new ValidationPipe({ //dto에 있는 것인지 검사
    whitelist: true,  //(도달하지 않음)
    forbidNonWhitelisted: true, //dto에 없는 것은 request자체를 막아줌
    transform: true //request가 라우팅 된 곳에서 원하는 데이터 타입으로 바꿔줌.
  }));
  await app.listen(3000);
}
bootstrap();
