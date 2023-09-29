import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { MoviesService } from './movies.service';
import { NotFoundError } from 'rxjs';

//url의 entryPoint를 관리함. 예를 들어 여기는 localhost:3000/movies/ 로 관리됨.
@Controller('movies')
export class MoviesController {
    constructor(private readonly moivesService: MoviesService){}
    //express의 app.get('')와 같은 역할
    @Get()
    getAll(): Movie[]{
        return this.moivesService.getAll();
    }
    @Get('/search')
    search(@Query('year') year:string){
        return `searching movies after ${year}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId:string){
        const movie =  this.moivesService.getOne(movieId);
        if(!movie){
            throw new NotFoundException("Not Found Moive ID")
        }
        return movie;
    }
    @Post()
    create(@Body() movieData){
        this.moivesService.create(movieData);
    }
    @Delete('/:id')
    remove(@Param('id') movieId:string){
        this.getOne(movieId);
        this.moivesService.delete(movieId);
    }
    //일부 리소스만 업데이트 전체 업데이트는 put
    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updateData){
        return this.moivesService.update(movieId, updateData);
    }
}
