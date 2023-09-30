import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  //Each는 아래의 각 테스트마다 새로운 애플리케이션은 생성한다는 뜻.
  //All로만 바꿔주면 테스트하는 동안 덮어서 실행됨.
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    //실제환경과 똑같게 하도록 설정하기
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }));
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my movie API');
  });

  describe("/moives", () => {
    it('(GET)', () => {
      return request(app.getHttpServer())
        .get('/movies')
        .expect(200)
        .expect([])
    })

    it('POST', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'title', year: 2000, genres: ['test'] })
        .expect(201)
    })
    it('POST 400', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'title', year: 2000, genres: ['test'], other: "wrong" })
        .expect(400)
    })

    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete('/movies')
        .expect(404)
    })
  })

  describe('movies/:id', () => {
    it('Get:id 200', () => {
      return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200)
    })
    it('patch 200', () => {
      return request(app.getHttpServer())
        .patch('/movies/1')
        .send({ title: "change" })
        .expect(200);
    })
    it("delete 200", () => {
      return request(app.getHttpServer())
        .delete('/movies/1')
        .expect(200);
    })
  })


});
