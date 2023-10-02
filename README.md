<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

# 튜토리얼 메모


@~~ (함수나 클래스위에 붙어있어야함)
class   => 데코레이터. 데코레이터는 클래스를 위한 함수를 만들 수 있게 해주는 것.

## 컨트롤러 controller
### url을 가져오는 존재 (express 라우터) url을 가져오고 함수를 실행.
@get데코레이터 = express,  get router
get 함수 밑에
@Param('id') id:string 이게 파라미터 받는법

정리 = 컨트롤러는 url과 파라미터, 바디 등 을 받아 관리한다.


## 서비스 service
### 일반적으로 함수들을 가지고 있는 파일(비즈니스 로직)
서비스는 로직을 관리하는 역할
dto를 적용
컨트롤러에서의 응답을 설정


## 모듈
### 모든 기능들을 한 번에 합쳐서 app으로 만듦.
app.module.ts에 들어가면 controller와 provider를 가지고 있다.
nestjs에서 앱은 여러 개의 모듈로 구성이 되기 때문에 각 모듈마다 나눠놓아야 한다.
따라서 app.module은 AppService와 AppController만 가져야 한다.

## 기타
cli에서
nest => 사용할 수 있는 옵션 나옴
nest g(=generate) co(=controller) => controller 이름
nest g s => service
controller 바로 생성

실행은 npm run start:dev
자세한 설정은 json package에서 script 안에서 설정.


## 테스트

## 유닛 테스트
### 모든 function을 따로 테스트하는 것 (서비스에서 분리된 유닛을 테스트하는 것)
예시) getAll()이라는 함수 하나만 테스트하고 싶을 때 사용.
함수단위

## end-to-end(e2e) 테스트
### 모든 시스템을 테스팅하는 것.
예시) 이 페이지로 가면 특정 페이지가 나와야하는 경우 사용. (사용자가 링크를 눌렀을 때 그 링크가 나오도록 하게 하는 테스트)
topic과 관련된 애플리케이션의 모든 부분을 테스트할 때 필요함.

## 메모
json-package를 보면, test 관련 script가 5개 있다. test, ,watch, cov, debug, e2e
jest - jest는 자바스크립트를 아주 쉽게 테스팅하는 npm 패키지

nest에서 뭔가를 생성하면, spec.ts 가 같이 생성되는데 그건 테스팅하는 파일이다.
nest에서는 jest가 spec.ts를 찾을 수 있도록 설정해뒀다.

npm run test:cov
cov(coverage) : 코드가 얼마나 테스팅 됐는지 또는 안됐는지 알려줌


테스트는 매 테스트마다 어플리케이션을 생성한다. 테스트 어플리케이션은 전체 애플리케이션은 아니다.
따라서 main.ts.의 controller에서 타입을 바꿔주는 transfrom이 작동하지 않음. (요청이 DTO로 변환해주는 파이프가 작동하지 않는다.)
따라서 실제 환경과 똑같도록 파이프 설정을 해주어야한다.

테스트 describe내부에 it.todo를 지원한다. 실행시, todo list를 보여줌.
