import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundError } from 'rxjs';

describe('MoviesService', () => {
  let service: MoviesService;

  //test를 시작하면서 데이터를 추가하는 등 사전작업 하는 것.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    service.create({title: "hi", year: 2000, genres:["hi test"]});
  });

  afterAll(()=>{
    //test를 끝내고 나서 데이터를 정리하거나 하는 후작업
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*테스트하고 싶은 부분을 함수를 만드는 것.
  describe("test Name", ()=>{

  })
  */
 describe("getAll", () => {
  it("should return Array", ()=>{
    const result = service.getAll();
    expect(result).toBeInstanceOf(Array);
  })
 })

 describe("getOne", ()=>{
  it("should return a movie", ()=>{
    
    const result = service.getOne(1);
    expect(result).toBeDefined();
    expect(result.id).toEqual(1);
  })

  it("should throw 404 error", ()=>{
    try{
      service.getOne(111);
    }catch(e){
      expect(e).toBeInstanceOf(NotFoundError);
    }
  })
 })

 describe("delete One", ()=>{
  it("should delete one", ()=>{

    const beforeDel = service.getAll();
    service.delete(1);
    const afterDel = service.getAll();

    expect(afterDel.length).toEqual(beforeDel.length-1);
  })
  it("should throw 404 error", ()=>{
    try{
      service.delete(999);
    }catch(e){
      expect(e).toBeInstanceOf(NotFoundError);
    }
  })
 })

 describe("create", ()=>{
  it("should create one", ()=>{
    const beforeCreate = service.getAll().length;
    service.create({title: "hi", year: 2000, genres:["hi test"]});
    const afterCreate = service.getAll().length;

    expect(beforeCreate).toBeLessThan(afterCreate);
  })
 })

 describe("update", ()=>{
  it("should update a one", ()=>{
    service.update(1, {title: "update test"});
    const title = service.getOne(1).title;
    expect(title).toEqual("update test");
  })
  it("should throw 404 error", ()=>{
    try{
      service.update(999, {title:"not"});
    }catch(e){
      expect(e).toBeInstanceOf(NotFoundError);
    }
  })
 })
});
